"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────── */
type FieldDef = { name: string; type: string };
type TableConfig = { pk: readonly string[]; fields: readonly FieldDef[] };
type Tables = Record<string, TableConfig>;

type QueryCatalogItem = {
  id: string;
  label: string;
  description: string;
  category: "joins" | "agrupaciones" | "filtros";
  params: { name: string; label: string; type: "text" | "date" }[];
};

interface Props {
  tables: Tables;
  initialTable: string;
}

/* ─────────────────────────────────────────────────────────────
   ICONS
───────────────────────────────────────────────────────────── */
const Icon = {
  Plus: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Trash: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M1 3h11M4 3V2a1 1 0 011-1h3a1 1 0 011 1v1M5 6v4M8 6v4M2 3l.7 8.1A1 1 0 003.7 12h5.6a1 1 0 001-.9L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Edit: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M9 2l2 2L4 11H2V9L9 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Search: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 8.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Close: () => (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ChevronRight: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Refresh: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M11.5 2v3.5H8M1.5 11V7.5H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 5a5 5 0 018.5-1.5L11.5 5.5M11 8a5 5 0 01-8.5 1.5L1.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  Filter: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M1 2h11l-4 5v4l-3-1.5V7L1 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Check: () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Query: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <rect x="1" y="1" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 4.5h6M3.5 6.5h4M3.5 8.5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Play: () => (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M2.5 1.5l7 4-7 4V1.5z" fill="currentColor" />
    </svg>
  ),
  Table: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <rect x="1" y="1" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1 5h11M5 5v7" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  Calendar: () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <rect x="1" y="2" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 1v2M8 1v2M1 5h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
};

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function ClientDashboard({ tables, initialTable }: Props) {
  // ── view mode: "table" | "queries"
  const [viewMode, setViewMode] = useState<"table" | "queries">("table");

  // ── table mode state
  const [selected, setSelected] = useState(initialTable);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [dateFilters, setDateFilters] = useState<Record<string, { desde?: string; hasta?: string }>>({});
  const [editRow, setEditRow] = useState<any | null>(null);
  const [editData, setEditData] = useState<Record<string, string>>({});
  const [addData, setAddData] = useState<Record<string, string>>({});

  // ── query mode state
  const [catalog, setCatalog] = useState<QueryCatalogItem[]>([]);
  const [activeQuery, setActiveQuery] = useState<QueryCatalogItem | null>(null);
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});
  const [queryData, setQueryData] = useState<any[]>([]);
  const [queryLoading, setQueryLoading] = useState(false);
  const [queryRan, setQueryRan] = useState(false);

  // ── shared
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);
  const [liveIndicator, setLiveIndicator] = useState(false);

  const requestRef = useRef(0);
  const config = tables[selected];

  /* ── toast ── */
  const showToast = (msg: string, type: "ok" | "err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  /* ── load table ── */
  const load = useCallback(
    async (silent = false) => {
      const reqId = ++requestRef.current;
      if (!silent) setLoading(true);
      try {
        const params = new URLSearchParams({ table: selected });
        Object.entries(filters).forEach(([k, v]) => { if (v) params.set(k, v); });
        // date range params
        Object.entries(dateFilters).forEach(([field, range]) => {
          if (range.desde) params.set(`${field}__desde`, range.desde);
          if (range.hasta) params.set(`${field}__hasta`, range.hasta);
        });
        const res = await fetch(`/api/table?${params}`);
        const json = await res.json();
        if (reqId !== requestRef.current) return;
        setData(Array.isArray(json) ? json : []);
        setLiveIndicator(true);
        setTimeout(() => setLiveIndicator(false), 600);
      } catch {
        if (!silent) showToast("Error al obtener datos", "err");
      } finally {
        if (!silent) setLoading(false);
      }
    },
    [selected, filters, dateFilters]
  );

  useEffect(() => { setData([]); setFilters({}); setDateFilters({}); load(); }, [selected]);
  useEffect(() => { if (viewMode === "table") load(); }, [filters, dateFilters]);
  useEffect(() => {
    if (viewMode !== "table") return;
    const iv = setInterval(() => load(true), 3000);
    return () => clearInterval(iv);
  }, [load, viewMode]);

  /* ── load catalog ── */
  useEffect(() => {
    fetch("/api/query")
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d)) setCatalog(d); })
      .catch(() => {});
  }, []);

  /* ── run query ── */
  const runQuery = async (q: QueryCatalogItem, params: Record<string, string>) => {
    setQueryLoading(true);
    setQueryRan(false);
    try {
      const sp = new URLSearchParams({ id: q.id });
      Object.entries(params).forEach(([k, v]) => { if (v) sp.set(k, v); });
      const res = await fetch(`/api/query?${sp}`);
      const json = await res.json();
      setQueryData(Array.isArray(json) ? json : []);
      setQueryRan(true);
    } catch { showToast("Error al ejecutar consulta", "err"); }
    finally { setQueryLoading(false); }
  };

  /* ── insert ── */
  const handleInsert = async () => {
    try {
      const r = await fetch("/api/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ table: selected, data: addData }),
      });
      if (!r.ok) throw new Error();
      setAddData({});
      showToast("Registro añadido");
      load();
    } catch { showToast("Error al insertar", "err"); }
  };

  /* ── delete ── */
  const handleDelete = async (row: any) => {
    try {
      const pk = config.pk.reduce((acc: any, k: string) => { acc[k] = row[k]; return acc; }, {});
      const r = await fetch("/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ table: selected, pk }),
      });
      if (!r.ok) throw new Error();
      showToast("Registro eliminado");
      load();
    } catch { showToast("Error al eliminar", "err"); }
  };

  /* ── update ── */
  const handleUpdate = async () => {
    if (!editRow) return;
    try {
      const pk = config.pk.reduce((acc: any, k: string) => { acc[k] = editRow[k]; return acc; }, {});
      const r = await fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ table: selected, pk, data: editData }),
      });
      if (!r.ok) throw new Error();
      setEditRow(null);
      showToast("Registro actualizado");
      load();
    } catch { showToast("Error al actualizar", "err"); }
  };

  const openEdit = (row: any) => {
    setEditRow(row);
    setEditData(Object.fromEntries(config.fields.map((f) => [f.name, String(row[f.name] ?? "")])));
  };

  /* ── helpers ── */
  const hasDateField = config.fields.some((f) => f.type === "date");
  const activeDateFiltersCount = Object.values(dateFilters).filter(
    (r) => r.desde || r.hasta
  ).length;
  const activeFilterCount = Object.values(filters).filter(Boolean).length + activeDateFiltersCount;

  const queryColumns = queryData.length > 0 ? Object.keys(queryData[0]) : [];
  const categorized = (cat: string) => catalog.filter((q) => q.category === cat);

  /* ─────────────────────── RENDER ─────────────────────── */
  return (
    <>
      <style>{CSS}</style>
      <div className="db-root">

        {/* ══════════════ SIDEBAR ══════════════ */}
        <aside className={`db-sidebar ${sidebarOpen ? "open" : "closed"}`}>
          {/* header */}
          <div className="db-sidebar-header">
            <span className="db-logo">
              <span className="db-logo-dot" />
              <span className="db-logo-text">DB Studio</span>
            </span>
            <button className="db-icon-btn" onClick={() => setSidebarOpen(false)}>
              <Icon.ChevronLeft />
            </button>
          </div>

          {/* ── VIEW MODE SWITCHER ── */}
          <div className="db-mode-switch">
            <button
              className={`db-mode-btn ${viewMode === "table" ? "active" : ""}`}
              onClick={() => setViewMode("table")}
            >
              <Icon.Table /> Tablas
            </button>
            <button
              className={`db-mode-btn ${viewMode === "queries" ? "active" : ""}`}
              onClick={() => setViewMode("queries")}
            >
              <Icon.Query /> Consultas
            </button>
          </div>

          {/* ══ TABLE MODE SIDEBAR ══ */}
          {viewMode === "table" && (
            <>
              {/* context */}
              <div className="db-section-label">Context</div>
              <div className="db-context-list">
                {Object.keys(tables).map((t) => (
                  <button
                    key={t}
                    className={`db-context-item ${selected === t ? "active" : ""}`}
                    onClick={() => setSelected(t)}
                  >
                    <span className="db-context-icon">≡</span>
                    <span>{t}</span>
                  </button>
                ))}
              </div>

              <div className="db-divider" />

              {/* ADD */}
              <div className="db-section-label"><Icon.Plus /> Nuevo Registro</div>
              <div className="db-form-area">
                {config.fields.map((f) => (
                  <div key={f.name} className="db-field-row">
                    <label className="db-field-label">{f.name}</label>
                    <input
                      className="db-input"
                      type={f.type === "number" ? "number" : f.type === "date" ? "date" : "text"}
                      placeholder={f.name}
                      value={addData[f.name] ?? ""}
                      onChange={(e) => setAddData((p) => ({ ...p, [f.name]: e.target.value }))}
                    />
                  </div>
                ))}
                <button className="db-btn-primary" onClick={handleInsert}>
                  <Icon.Plus /> Insertar
                </button>
              </div>

              <div className="db-divider" />

              {/* FILTERS */}
              <div className="db-section-label">
                <Icon.Filter /> Filtros
                {activeFilterCount > 0 && (
                  <span className="db-badge">{activeFilterCount}</span>
                )}
              </div>
              <div className="db-form-area">
                {config.fields.map((f) => {
                  if (f.type === "date") {
                    return (
                      <div key={f.name} className="db-field-row">
                        <label className="db-field-label">
                          <Icon.Calendar /> {f.name} — rango
                        </label>
                        <div className="db-date-range">
                          <input
                            className="db-input"
                            type="date"
                            title="Desde"
                            value={dateFilters[f.name]?.desde ?? ""}
                            onChange={(e) =>
                              setDateFilters((p) => ({
                                ...p,
                                [f.name]: { ...p[f.name], desde: e.target.value },
                              }))
                            }
                          />
                          <span className="db-date-sep">—</span>
                          <input
                            className="db-input"
                            type="date"
                            title="Hasta"
                            value={dateFilters[f.name]?.hasta ?? ""}
                            onChange={(e) =>
                              setDateFilters((p) => ({
                                ...p,
                                [f.name]: { ...p[f.name], hasta: e.target.value },
                              }))
                            }
                          />
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={f.name} className="db-field-row">
                      <label className="db-field-label">{f.name}</label>
                      <div className="db-input-wrap">
                        <span className="db-input-icon"><Icon.Search /></span>
                        <input
                          className="db-input has-icon"
                          type="text"
                          placeholder={`Filtrar ${f.name}…`}
                          value={filters[f.name] ?? ""}
                          onChange={(e) =>
                            setFilters((p) => ({ ...p, [f.name]: e.target.value }))
                          }
                        />
                        {filters[f.name] && (
                          <button
                            className="db-input-clear"
                            onClick={() =>
                              setFilters((p) => { const n = { ...p }; delete n[f.name]; return n; })
                            }
                          >
                            <Icon.Close />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
                {activeFilterCount > 0 && (
                  <button
                    className="db-btn-ghost"
                    onClick={() => { setFilters({}); setDateFilters({}); }}
                  >
                    Limpiar todos los filtros
                  </button>
                )}
              </div>
            </>
          )}

          {/* ══ QUERY MODE SIDEBAR ══ */}
          {viewMode === "queries" && (
            <>
              {(["joins", "agrupaciones", "filtros"] as const).map((cat) => (
                <div key={cat}>
                  <div className="db-section-label" style={{ textTransform: "uppercase" }}>
                    {cat === "joins" ? "JOIN / Relaciones"
                      : cat === "agrupaciones" ? "Agrupaciones"
                      : "Filtros especiales"}
                  </div>
                  <div className="db-context-list">
                    {categorized(cat).map((q) => (
                      <button
                        key={q.id}
                        className={`db-context-item ${activeQuery?.id === q.id ? "active" : ""}`}
                        onClick={() => {
                          setActiveQuery(q);
                          setQueryParams({});
                          setQueryData([]);
                          setQueryRan(false);
                          // auto-run if no params needed
                          if (q.params.length === 0) runQuery(q, {});
                        }}
                      >
                        <span className="db-context-icon">▶</span>
                        <span>{q.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="db-divider" />
                </div>
              ))}
            </>
          )}
        </aside>

        {/* ══ TOGGLE ══ */}
        {!sidebarOpen && (
          <button className="db-sidebar-toggle" onClick={() => setSidebarOpen(true)}>
            <Icon.ChevronRight />
          </button>
        )}

        {/* ══════════════ MAIN ══════════════ */}
        <main className="db-main">

          {/* HEADER */}
          <header className="db-header">
            <div className="db-tabs-row">
              {viewMode === "table" ? (
                Object.keys(tables).map((t) => (
                  <button
                    key={t}
                    className={`db-tab ${selected === t ? "active" : ""}`}
                    onClick={() => setSelected(t)}
                  >
                    {t}
                    {selected === t && (
                      <span className="db-tab-close" onClick={(e) => e.stopPropagation()}>
                        <Icon.Close />
                      </span>
                    )}
                  </button>
                ))
              ) : (
                <div className="db-tab active" style={{ cursor: "default" }}>
                  <Icon.Query />
                  {activeQuery ? activeQuery.label : "Selecciona una consulta"}
                </div>
              )}
            </div>
            <div className="db-header-actions">
              {viewMode === "table" && (
                <>
                  <span className={`db-live-dot ${liveIndicator ? "pulse" : ""}`} title="Live sync" />
                  <button className="db-icon-btn" onClick={() => load()} title="Refresh">
                    <Icon.Refresh />
                  </button>
                </>
              )}
              {viewMode === "queries" && activeQuery && (
                <button
                  className="db-btn-run"
                  onClick={() => runQuery(activeQuery, queryParams)}
                  disabled={queryLoading}
                >
                  <Icon.Play />
                  {queryLoading ? "Ejecutando…" : "Ejecutar"}
                </button>
              )}
            </div>
          </header>

          {/* BREADCRUMB */}
          <div className="db-breadcrumb">
            {viewMode === "table" ? (
              <>
                <span>app_db</span>
                <span className="db-bc-sep">/</span>
                <span>{selected}</span>
                {activeFilterCount > 0 && (
                  <span className="db-bc-filter-badge">
                    <Icon.Filter /> {activeFilterCount} filtro{activeFilterCount > 1 ? "s" : ""}
                  </span>
                )}
                <span className="db-bc-count">{data.length} docs</span>
              </>
            ) : (
              <>
                <span>consultas</span>
                <span className="db-bc-sep">/</span>
                <span>{activeQuery?.category ?? "—"}</span>
                <span className="db-bc-sep">/</span>
                <span>{activeQuery?.id ?? "—"}</span>
                {queryRan && <span className="db-bc-count">{queryData.length} rows</span>}
              </>
            )}
          </div>

          {/* ══ TABLE VIEW ══ */}
          {viewMode === "table" && (
            <div className="db-table-wrap">
              {loading && data.length === 0 ? (
                <div className="db-loading"><span className="db-spinner" /><span>Cargando…</span></div>
              ) : (
                <table className="db-table">
                  <thead>
                    <tr>
                      <th className="db-th-idx">#</th>
                      {config.fields.map((f) => (
                        <th key={f.name} className="db-th">
                          <span className="db-th-type">{f.type}</span>{f.name}
                        </th>
                      ))}
                      <th className="db-th-actions" />
                    </tr>
                  </thead>
                  <tbody>
                    {data.length === 0 ? (
                      <tr><td colSpan={config.fields.length + 2} className="db-empty">Sin resultados</td></tr>
                    ) : (
                      data.map((row, i) => (
                        <tr key={i} className="db-row">
                          <td className="db-td-idx">{i + 1}</td>
                          {config.fields.map((f) => (
                            <td key={f.name} className="db-td">
                              <span className={`db-val ${typeof row[f.name] === "number" ? "num" : ""}`}>
                                {row[f.name] === null || row[f.name] === undefined
                                  ? <span className="db-null">null</span>
                                  : String(row[f.name])}
                              </span>
                            </td>
                          ))}
                          <td className="db-td-actions">
                            <button className="db-action-btn edit" onClick={() => openEdit(row)}><Icon.Edit /></button>
                            <button className="db-action-btn del" onClick={() => handleDelete(row)}><Icon.Trash /></button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* ══ QUERY VIEW ══ */}
          {viewMode === "queries" && (
            <div className="db-query-area">
              {!activeQuery ? (
                <div className="db-query-empty">
                  <div className="db-query-empty-icon"><Icon.Query /></div>
                  <p>Selecciona una consulta del panel lateral</p>
                  <p className="db-query-empty-sub">
                    {catalog.length} consultas disponibles — JOINs, agrupaciones y filtros especiales
                  </p>
                </div>
              ) : (
                <>
                  {/* query description + params */}
                  <div className="db-query-info">
                    <div className="db-query-desc">{activeQuery.description}</div>
                    {activeQuery.params.length > 0 && (
                      <div className="db-query-params">
                        {activeQuery.params.map((p) => (
                          <div key={p.name} className="db-field-row">
                            <label className="db-field-label">{p.label}</label>
                            <input
                              className="db-input"
                              type={p.type === "date" ? "date" : "text"}
                              value={queryParams[p.name] ?? ""}
                              onChange={(e) =>
                                setQueryParams((prev) => ({ ...prev, [p.name]: e.target.value }))
                              }
                            />
                          </div>
                        ))}
                        <button
                          className="db-btn-primary"
                          onClick={() => runQuery(activeQuery, queryParams)}
                          disabled={queryLoading}
                        >
                          <Icon.Play /> {queryLoading ? "Ejecutando…" : "Ejecutar consulta"}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* results */}
                  <div className="db-table-wrap">
                    {queryLoading ? (
                      <div className="db-loading"><span className="db-spinner" /><span>Ejecutando consulta…</span></div>
                    ) : !queryRan ? (
                      <div className="db-empty" style={{ paddingTop: "40px" }}>
                        {activeQuery.params.length === 0
                          ? "Cargando resultados…"
                          : "Completa los parámetros y presiona Ejecutar"}
                      </div>
                    ) : queryData.length === 0 ? (
                      <div className="db-empty">La consulta no devolvió resultados</div>
                    ) : (
                      <table className="db-table">
                        <thead>
                          <tr>
                            <th className="db-th-idx">#</th>
                            {queryColumns.map((col) => (
                              <th key={col} className="db-th">{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {queryData.map((row, i) => (
                            <tr key={i} className="db-row">
                              <td className="db-td-idx">{i + 1}</td>
                              {queryColumns.map((col) => (
                                <td key={col} className="db-td">
                                  <span className={`db-val ${typeof row[col] === "number" ? "num" : ""}`}>
                                    {row[col] === null || row[col] === undefined
                                      ? <span className="db-null">null</span>
                                      : String(row[col])}
                                  </span>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          {/* STATUS BAR */}
          <div className="db-statusbar">
            {viewMode === "table" ? (
              <>
                <span>{selected}</span>
                <span className="db-bc-sep">·</span>
                <span>{data.length} registros</span>
                {activeFilterCount > 0 && (
                  <><span className="db-bc-sep">·</span><span className="db-filter-active-label"><Icon.Filter /> filtros activos</span></>
                )}
                <span className="db-bc-sep">·</span>
                <span className="db-live-label">Live sync activo</span>
              </>
            ) : (
              <>
                <span>Modo consultas</span>
                {queryRan && <><span className="db-bc-sep">·</span><span>{queryData.length} resultados</span></>}
                {activeQuery && <><span className="db-bc-sep">·</span><span className="db-live-label">{activeQuery.id}</span></>}
              </>
            )}
          </div>
        </main>
      </div>

      {/* ══ EDIT MODAL ══ */}
      {editRow && (
        <div className="db-modal-bg" onClick={() => setEditRow(null)}>
          <div className="db-modal" onClick={(e) => e.stopPropagation()}>
            <div className="db-modal-header">
              <span>Editar registro</span>
              <button className="db-icon-btn" onClick={() => setEditRow(null)}><Icon.Close /></button>
            </div>
            <div className="db-modal-body">
              {config.fields.map((f) => (
                <div key={f.name} className="db-field-row">
                  <label className="db-field-label">{f.name}</label>
                  <input
                    className="db-input"
                    type={f.type === "number" ? "number" : f.type === "date" ? "date" : "text"}
                    value={editData[f.name] ?? ""}
                    onChange={(e) => setEditData((p) => ({ ...p, [f.name]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
            <div className="db-modal-footer">
              <button className="db-btn-ghost" onClick={() => setEditRow(null)}>Cancelar</button>
              <button className="db-btn-primary" onClick={handleUpdate}>
                <Icon.Check /> Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ TOAST ══ */}
      {toast && (
        <div className={`db-toast ${toast.type}`}>
          {toast.type === "ok" ? <Icon.Check /> : "✕"} {toast.msg}
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&family=Sora:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg0:  #0e0f11;
    --bg1:  #141518;
    --bg2:  #1a1b1f;
    --bg3:  #222429;
    --bg4:  #2a2d33;
    --line: #2e3138;
    --txt0: #e8eaf0;
    --txt1: #9da3b0;
    --txt2: #5c6270;
    --acc:  #3b82f6;
    --acc2: #60a5fa;
    --del:  #ef4444;
    --ok:   #22c55e;
    --num:  #fb923c;
    --dt:   #c084fc;
    --str:  #a3e635;
    --warn: #facc15;
    --rad:  6px;
    --mono: 'JetBrains Mono', monospace;
    --sans: 'Sora', sans-serif;
  }

  .db-root {
    display: flex; height: 100vh;
    background: var(--bg0); color: var(--txt0);
    font-family: var(--sans); overflow: hidden;
  }

  /* ── SIDEBAR ── */
  .db-sidebar {
    display: flex; flex-direction: column;
    background: var(--bg1); border-right: 1px solid var(--line);
    transition: width .25s cubic-bezier(.4,0,.2,1), opacity .2s;
    overflow: hidden; flex-shrink: 0;
    height: 100vh; overflow-y: auto;
    scrollbar-width: thin; scrollbar-color: var(--bg4) transparent;
  }
  .db-sidebar.open   { width: 288px; opacity: 1; }
  .db-sidebar.closed { width: 0; opacity: 0; pointer-events: none; }

  .db-sidebar-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 14px 14px; border-bottom: 1px solid var(--line);
    flex-shrink: 0;
  }

  .db-logo { display: flex; align-items: center; gap: 8px; }
  .db-logo-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--acc); box-shadow: 0 0 8px var(--acc);
  }
  .db-logo-text { font-size: 13px; font-weight: 600; letter-spacing: .04em; }

  /* ── MODE SWITCH ── */
  .db-mode-switch {
    display: flex; gap: 4px;
    padding: 8px 10px; border-bottom: 1px solid var(--line);
  }
  .db-mode-btn {
    flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px;
    padding: 6px 8px; border-radius: 5px; border: 1px solid transparent;
    font-size: 11.5px; font-family: var(--sans); cursor: pointer;
    color: var(--txt2); background: transparent;
    transition: all .15s;
  }
  .db-mode-btn:hover { color: var(--txt0); background: var(--bg3); }
  .db-mode-btn.active {
    color: var(--txt0); background: var(--bg3);
    border-color: var(--line);
  }

  .db-section-label {
    display: flex; align-items: center; gap: 6px;
    font-size: 10px; font-weight: 600; letter-spacing: .1em;
    text-transform: uppercase; color: var(--txt2);
    padding: 14px 14px 6px;
  }

  .db-badge {
    margin-left: 4px; padding: 1px 6px;
    background: var(--acc); color: #fff;
    border-radius: 10px; font-size: 9.5px; font-weight: 600;
  }

  .db-context-list { display: flex; flex-direction: column; gap: 2px; padding: 0 8px; }
  .db-context-item {
    display: flex; align-items: center; gap: 8px;
    padding: 7px 10px; border-radius: var(--rad);
    font-size: 12.5px; color: var(--txt1);
    background: transparent; border: none; cursor: pointer;
    transition: background .15s, color .15s;
    text-align: left; white-space: nowrap;
    overflow: hidden; text-overflow: ellipsis;
  }
  .db-context-item:hover { background: var(--bg3); color: var(--txt0); }
  .db-context-item.active { background: var(--bg3); color: var(--acc2); }
  .db-context-icon { color: var(--txt2); font-size: 11px; font-family: var(--mono); flex-shrink: 0; }

  .db-divider { height: 1px; background: var(--line); margin: 10px 0; }

  .db-form-area { padding: 0 12px 12px; display: flex; flex-direction: column; gap: 8px; }
  .db-field-row { display: flex; flex-direction: column; gap: 3px; }
  .db-field-label {
    display: flex; align-items: center; gap: 4px;
    font-size: 10.5px; color: var(--txt2); font-family: var(--mono);
  }

  .db-date-range { display: flex; align-items: center; gap: 4px; }
  .db-date-range .db-input { flex: 1; min-width: 0; font-size: 11px; padding: 5px 6px; }
  .db-date-sep { color: var(--txt2); font-size: 11px; flex-shrink: 0; }

  .db-input-wrap { position: relative; }
  .db-input-icon {
    position: absolute; left: 8px; top: 50%; transform: translateY(-50%);
    color: var(--txt2); pointer-events: none;
  }
  .db-input-clear {
    position: absolute; right: 6px; top: 50%; transform: translateY(-50%);
    background: none; border: none; color: var(--txt2); cursor: pointer;
    padding: 2px; display: flex; align-items: center;
  }
  .db-input-clear:hover { color: var(--txt0); }

  .db-input {
    width: 100%; background: var(--bg2);
    border: 1px solid var(--line); border-radius: 5px;
    padding: 6px 10px; font-size: 12px;
    color: var(--txt0); font-family: var(--mono);
    outline: none; transition: border-color .15s;
  }
  .db-input.has-icon { padding-left: 28px; padding-right: 24px; }
  .db-input:focus { border-color: var(--acc); }
  .db-input::placeholder { color: var(--txt2); }

  .db-btn-primary {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    background: var(--acc); color: #fff;
    border: none; border-radius: 5px;
    padding: 7px 14px; font-size: 12px; font-weight: 500;
    cursor: pointer; font-family: var(--sans);
    transition: background .15s, transform .1s;
  }
  .db-btn-primary:hover:not(:disabled) { background: var(--acc2); transform: translateY(-1px); }
  .db-btn-primary:disabled { opacity: .5; cursor: not-allowed; }

  .db-btn-ghost {
    background: transparent; color: var(--txt1);
    border: 1px solid var(--line); border-radius: 5px;
    padding: 6px 12px; font-size: 12px; cursor: pointer;
    font-family: var(--sans); transition: color .15s, border-color .15s;
  }
  .db-btn-ghost:hover { color: var(--txt0); border-color: var(--txt2); }

  .db-btn-run {
    display: flex; align-items: center; gap: 5px;
    background: rgba(59,130,246,.15); color: var(--acc2);
    border: 1px solid rgba(59,130,246,.3); border-radius: 5px;
    padding: 5px 12px; font-size: 12px; cursor: pointer;
    font-family: var(--sans); transition: all .15s;
  }
  .db-btn-run:hover:not(:disabled) { background: rgba(59,130,246,.25); }
  .db-btn-run:disabled { opacity: .5; cursor: not-allowed; }

  .db-icon-btn {
    background: none; border: none; cursor: pointer;
    color: var(--txt2); padding: 4px;
    display: flex; align-items: center; border-radius: 4px;
    transition: color .15s, background .15s;
  }
  .db-icon-btn:hover { color: var(--txt0); background: var(--bg3); }

  .db-sidebar-toggle {
    position: fixed; left: 0; top: 50%; transform: translateY(-50%);
    background: var(--bg2); border: 1px solid var(--line);
    border-left: none; border-radius: 0 6px 6px 0;
    color: var(--txt1); cursor: pointer;
    padding: 10px 4px; z-index: 20;
    transition: color .15s, background .15s;
  }
  .db-sidebar-toggle:hover { color: var(--txt0); background: var(--bg3); }

  /* ── MAIN ── */
  .db-main {
    flex: 1; display: flex; flex-direction: column;
    overflow: hidden; min-width: 0;
  }

  .db-header {
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid var(--line);
    background: var(--bg1); flex-shrink: 0; padding-right: 12px;
  }

  .db-tabs-row {
    display: flex; align-items: stretch;
    overflow-x: auto; scrollbar-width: none;
  }
  .db-tabs-row::-webkit-scrollbar { display: none; }

  .db-tab {
    display: flex; align-items: center; gap: 6px;
    padding: 10px 16px; font-size: 12.5px;
    color: var(--txt2); border: none; background: transparent; cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: color .15s, border-color .15s; white-space: nowrap;
    font-family: var(--sans);
  }
  .db-tab:hover { color: var(--txt0); }
  .db-tab.active { color: var(--txt0); border-bottom-color: var(--acc); background: var(--bg0); }

  .db-tab-close {
    display: flex; align-items: center;
    color: var(--txt2); margin-left: 2px; transition: color .15s;
  }
  .db-tab-close:hover { color: var(--del); }

  .db-header-actions { display: flex; align-items: center; gap: 8px; }

  .db-live-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--ok); opacity: .5; transition: opacity .2s;
  }
  .db-live-dot.pulse {
    opacity: 1; box-shadow: 0 0 6px var(--ok);
    animation: db-pulse .6s ease;
  }
  @keyframes db-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.5)} }

  .db-breadcrumb {
    display: flex; align-items: center; gap: 6px;
    padding: 8px 16px; font-size: 11.5px;
    color: var(--txt2); font-family: var(--mono);
    border-bottom: 1px solid var(--line); background: var(--bg0);
  }
  .db-bc-sep { color: var(--line); }
  .db-bc-count {
    margin-left: 8px; padding: 1px 7px;
    background: var(--bg3); border-radius: 10px;
    font-size: 10.5px; color: var(--txt1);
  }
  .db-bc-filter-badge {
    display: flex; align-items: center; gap: 3px;
    margin-left: 6px; padding: 1px 7px;
    background: rgba(59,130,246,.12);
    border: 1px solid rgba(59,130,246,.25);
    border-radius: 10px; font-size: 10.5px; color: var(--acc2);
  }
  .db-filter-active-label { color: var(--acc2); display: flex; align-items: center; gap: 4px; }

  /* ── TABLE ── */
  .db-table-wrap {
    flex: 1; overflow: auto;
    scrollbar-width: thin; scrollbar-color: var(--bg4) transparent;
  }

  .db-table { width: 100%; border-collapse: collapse; font-family: var(--mono); font-size: 12.5px; }

  .db-table thead {
    position: sticky; top: 0; z-index: 5;
    background: var(--bg1); border-bottom: 1px solid var(--line);
  }

  .db-th {
    padding: 9px 14px; text-align: left; color: var(--txt2);
    font-weight: 500; letter-spacing: .03em; white-space: nowrap;
    border-right: 1px solid var(--line);
  }
  .db-th-idx { padding: 9px 12px; color: var(--txt2); width: 40px; border-right: 1px solid var(--line); }
  .db-th-actions { width: 70px; }
  .db-th-type {
    display: inline-block; font-size: 9px; color: var(--acc);
    opacity: .7; margin-right: 4px;
  }

  .db-row { transition: background .1s; }
  .db-row:hover { background: var(--bg2); }
  .db-row:nth-child(even) { background: rgba(255,255,255,.012); }

  .db-td {
    padding: 8px 14px; vertical-align: middle;
    border-bottom: 1px solid var(--line);
    border-right: 1px solid rgba(255,255,255,.03);
    white-space: nowrap; max-width: 260px;
    overflow: hidden; text-overflow: ellipsis;
  }
  .db-td-idx {
    padding: 8px 12px; color: var(--txt2); font-size: 11px;
    border-bottom: 1px solid var(--line); border-right: 1px solid var(--line);
  }
  .db-td-actions { padding: 6px 10px; border-bottom: 1px solid var(--line); white-space: nowrap; }

  .db-val { color: var(--str); }
  .db-val.num { color: var(--num); }
  .db-null { color: var(--txt2); font-style: italic; }

  .db-action-btn {
    background: none; border: none; cursor: pointer;
    padding: 4px 5px; border-radius: 4px;
    transition: background .1s, color .1s;
    display: inline-flex; align-items: center;
  }
  .db-action-btn.edit { color: var(--txt2); }
  .db-action-btn.edit:hover { background: var(--bg4); color: var(--acc2); }
  .db-action-btn.del { color: var(--txt2); }
  .db-action-btn.del:hover { background: rgba(239,68,68,.15); color: var(--del); }

  .db-loading {
    display: flex; align-items: center; justify-content: center;
    gap: 10px; color: var(--txt2); padding: 60px; font-size: 13px;
  }
  .db-spinner {
    width: 16px; height: 16px; border-radius: 50%;
    border: 2px solid var(--line); border-top-color: var(--acc);
    animation: db-spin .7s linear infinite;
  }
  @keyframes db-spin { to { transform: rotate(360deg); } }

  .db-empty { text-align: center; color: var(--txt2); padding: 60px; font-size: 13px; }

  /* ── QUERY AREA ── */
  .db-query-area { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

  .db-query-empty {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 10px; color: var(--txt2); padding: 40px;
  }
  .db-query-empty-icon {
    width: 48px; height: 48px; border-radius: 12px;
    background: var(--bg2); border: 1px solid var(--line);
    display: flex; align-items: center; justify-content: center;
    font-size: 22px; margin-bottom: 6px; color: var(--txt2);
  }
  .db-query-empty p { font-size: 13.5px; color: var(--txt1); }
  .db-query-empty-sub { font-size: 11.5px; color: var(--txt2); font-family: var(--mono); }

  .db-query-info {
    padding: 14px 18px; border-bottom: 1px solid var(--line);
    background: var(--bg1); display: flex; gap: 20px; align-items: flex-start;
    flex-wrap: wrap;
  }
  .db-query-desc { font-size: 12.5px; color: var(--txt1); flex: 1; min-width: 200px; line-height: 1.5; }
  .db-query-params {
    display: flex; gap: 10px; align-items: flex-end; flex-wrap: wrap;
    flex-shrink: 0;
  }
  .db-query-params .db-field-row { min-width: 140px; }
  .db-query-params .db-btn-primary { align-self: flex-end; }

  /* ── STATUS BAR ── */
  .db-statusbar {
    display: flex; align-items: center; gap: 8px;
    padding: 6px 16px; font-size: 11px;
    color: var(--txt2); font-family: var(--mono);
    border-top: 1px solid var(--line); background: var(--bg1); flex-shrink: 0;
  }
  .db-live-label { color: var(--ok); opacity: .7; }

  /* ── MODAL ── */
  .db-modal-bg {
    position: fixed; inset: 0; background: rgba(0,0,0,.6);
    display: flex; align-items: center; justify-content: center;
    z-index: 50; backdrop-filter: blur(4px);
    animation: db-fadein .15s;
  }
  @keyframes db-fadein { from{opacity:0} to{opacity:1} }

  .db-modal {
    background: var(--bg1); border: 1px solid var(--line);
    border-radius: 10px; width: 420px; max-height: 80vh;
    display: flex; flex-direction: column;
    box-shadow: 0 24px 60px rgba(0,0,0,.5);
    animation: db-slideup .18s cubic-bezier(.4,0,.2,1);
  }
  @keyframes db-slideup {
    from { transform: translateY(16px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }

  .db-modal-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 16px; border-bottom: 1px solid var(--line);
    font-size: 13px; font-weight: 500;
  }
  .db-modal-body {
    flex: 1; overflow-y: auto; padding: 16px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .db-modal-footer {
    display: flex; justify-content: flex-end; gap: 8px;
    padding: 12px 16px; border-top: 1px solid var(--line);
  }

  /* ── TOAST ── */
  .db-toast {
    position: fixed; bottom: 24px; right: 24px;
    display: flex; align-items: center; gap: 8px;
    padding: 10px 16px; border-radius: 8px;
    font-size: 12.5px; font-family: var(--sans); z-index: 100;
    animation: db-slideup .2s ease; box-shadow: 0 8px 24px rgba(0,0,0,.4);
  }
  .db-toast.ok  { background: var(--bg2); border: 1px solid var(--ok);  color: var(--ok); }
  .db-toast.err { background: var(--bg2); border: 1px solid var(--del); color: var(--del); }
`;
