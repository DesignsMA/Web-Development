"use client";

import { useEffect, useState, useRef, useCallback } from "react";

type FieldDef = { name: string; type: string };
type TableConfig = { pk: readonly string[]; fields: readonly FieldDef[] };
type Tables = Record<string, TableConfig>;
type QueryCatalogItem = {
  id: string; label: string; description: string;
  category: "joins" | "agrupaciones" | "filtros";
  params: { name: string; label: string; type: "text" | "date" }[];
};
interface Props { tables: Tables; initialTable: string; }

const SB_W = 340;

const Icon = {
  Plus:       () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>,
  Trash:      () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1M6 7v5M10 7v5M3 4l1 9a1 1 0 001 1h6a1 1 0 001-1l1-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Edit:       () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11 2.5l2.5 2.5L5 13.5H2.5V11L11 2.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Search:     () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.6"/><path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  Close:      () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  ArrowLeft:  () => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M14 4L7 11l7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ArrowRight: () => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M8 4l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Refresh:    () => <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M13 2.5v4H9M2 12.5v-4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 6A5.5 5.5 0 0113 4.5M12.5 9A5.5 5.5 0 012 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  Filter:     () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 2h12l-4.5 5.5V12l-3-1.5V7.5L1 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Check:      () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Table:      () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="2"/><path d="M2 7h14M7 7v9" stroke="currentColor" strokeWidth="1.8"/></svg>,
  Query:      () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="2"/><path d="M5 6h8M5 9h5M5 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Play:       () => <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M3 1.5l9 5-9 5V1.5z" fill="currentColor"/></svg>,
  Back:       () => <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M10 2L4 7.5l6 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Calendar:   () => <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="2.5" width="11" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M4.5 1v3M8.5 1v3M1 6h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  SortAsc:  () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 12V2M3 6l4-4 4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  SortDesc: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  SortNone: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 4.5l4-3 4 3M3 9.5l4 3 4-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  SortX:    () => <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 2l9 9M11 2L2 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  Moon:       () => <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M13 9.5A6.5 6.5 0 015.5 2a6.5 6.5 0 100 11A6.5 6.5 0 0013 9.5z" fill="currentColor"/></svg>,
  Sun:        () => <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.6"/><path d="M7.5 1v1.5M7.5 12.5V14M1 7.5h1.5M12.5 7.5H14M3 3l1.1 1.1M10.9 10.9l1.1 1.1M3 12l1.1-1.1M10.9 4.1L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
};

export default function ClientDashboard({ tables, initialTable }: Props) {
  const [viewMode, setViewMode]           = useState<"table" | "queries">("table");
  const [selected, setSelected]           = useState(initialTable);
  const [data, setData]                   = useState<any[]>([]);
  const [loading, setLoading]             = useState(false);
  const [filters, setFilters]             = useState<Record<string, string>>({});
  const [dateFilters, setDateFilters]     = useState<Record<string, { desde?: string; hasta?: string }>>({});
  const [editRow, setEditRow]             = useState<any | null>(null);
  const [editData, setEditData]           = useState<Record<string, string>>({});
  const [addData, setAddData]             = useState<Record<string, string>>({});
  const [catalog, setCatalog]             = useState<QueryCatalogItem[]>([]);
  const [activeQuery, setActiveQuery]     = useState<QueryCatalogItem | null>(null);
  const [queryParams, setQueryParams]     = useState<Record<string, string>>({});
  const [queryData, setQueryData]         = useState<any[]>([]);
  const [queryLoading, setQueryLoading]   = useState(false);
  const [queryRan, setQueryRan]           = useState(false);
  const [sidebarOpen, setSidebarOpen]     = useState(true);
  const [toast, setToast]                 = useState<{ msg: string; type: "ok" | "err" } | null>(null);
  const [liveIndicator, setLiveIndicator] = useState(false);
  const [darkMode, setDarkMode]           = useState(false);

  const requestRef = useRef(0);
  const config     = tables[selected];

  /* sync dark class on <html> so :root overrides reach fixed/portal elements */
  useEffect(() => {
    document.documentElement.classList.toggle("db-dark", darkMode);
  }, [darkMode]);

  const showToast = (msg: string, type: "ok" | "err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const load = useCallback(async (silent = false) => {
    const reqId = ++requestRef.current;
    if (!silent) setLoading(true);
    try {
      const params = new URLSearchParams({ table: selected });
      Object.entries(filters).forEach(([k, v]) => { if (v) params.set(k, v); });
      Object.entries(dateFilters).forEach(([field, range]) => {
        if (range.desde) params.set(`${field}__desde`, range.desde);
        if (range.hasta) params.set(`${field}__hasta`, range.hasta);
      });
      const res  = await fetch(`/api/table?${params}`);
      const json = await res.json();
      if (reqId !== requestRef.current) return;
      setData(Array.isArray(json) ? json : []);
      setLiveIndicator(true);
      setTimeout(() => setLiveIndicator(false), 600);
    } catch { if (!silent) showToast("Error al obtener datos", "err"); }
    finally   { if (!silent) setLoading(false); }
  }, [selected, filters, dateFilters]);

  useEffect(() => { setData([]); setFilters({}); setDateFilters({}); load(); }, [selected]);
  useEffect(() => { if (viewMode === "table") load(); }, [filters, dateFilters]);
  useEffect(() => {
    if (viewMode !== "table") return;
    const iv = setInterval(() => load(true), 3000);
    return () => clearInterval(iv);
  }, [load, viewMode]);

  useEffect(() => {
    fetch("/api/query").then(r => r.json()).then(d => { if (Array.isArray(d)) setCatalog(d); }).catch(() => {});
  }, []);

  const runQuery = async (q: QueryCatalogItem, params: Record<string, string>) => {
    setQueryLoading(true); setQueryRan(false);
    try {
      const sp = new URLSearchParams({ id: q.id });
      Object.entries(params).forEach(([k, v]) => { if (v) sp.set(k, v); });
      const res  = await fetch(`/api/query?${sp}`);
      const json = await res.json();
      setQueryData(Array.isArray(json) ? json : []);
      setQueryRan(true);
    } catch { showToast("Error al ejecutar consulta", "err"); }
    finally   { setQueryLoading(false); }
  };

  const handleInsert = async () => {
    try {
      const r = await fetch("/api/insert", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ table: selected, data: addData }) });
      if (!r.ok) throw new Error();
      setAddData({}); showToast("Registro añadido"); load();
    } catch { showToast("Error al insertar", "err"); }
  };

  const handleDelete = async (row: any) => {
    try {
      const pk = config.pk.reduce((acc: any, k: string) => { acc[k] = row[k]; return acc; }, {});
      const r  = await fetch("/api/delete", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ table: selected, pk }) });
      if (!r.ok) throw new Error();
      showToast("Registro eliminado"); load();
    } catch { showToast("Error al eliminar", "err"); }
  };

  const handleUpdate = async () => {
    if (!editRow) return;
    try {
      const pk = config.pk.reduce((acc: any, k: string) => { acc[k] = editRow[k]; return acc; }, {});
      const r  = await fetch("/api/update", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ table: selected, pk, data: editData }) });
      if (!r.ok) throw new Error();
      setEditRow(null); showToast("Registro actualizado"); load();
    } catch { showToast("Error al actualizar", "err"); }
  };

  const openEdit = (row: any) => {
    setEditRow(row);
    setEditData(Object.fromEntries(config.fields.map(f => [f.name, String(row[f.name] ?? "")])));
  };

  const activeFilterCount = Object.values(filters).filter(Boolean).length +
    Object.values(dateFilters).filter(r => r.desde || r.hasta).length;
  const queryColumns = queryData.length > 0 ? Object.keys(queryData[0]) : [];
  const categorized  = (cat: string) => catalog.filter(q => q.category === cat);

  /* ── sort state ── */
  type SortDir = "asc" | "desc";
  const [sortCol, setSortCol]   = useState<string | null>(null);
  const [sortDir, setSortDir]   = useState<SortDir>("asc");
  const [sortOpen, setSortOpen] = useState<string | null>(null); // which col menu is open

  const applySort = (col: string, dir: SortDir) => {
    setSortCol(col); setSortDir(dir); setSortOpen(null);
  };
  const clearSort = () => { setSortCol(null); setSortOpen(null); };

  const sortRows = (rows: any[], col: string | null, dir: SortDir) => {
    if (!col) return rows;
    return [...rows].sort((a, b) => {
      const av = a[col] ?? ""; const bv = b[col] ?? "";
      const cmp = typeof av === "number" && typeof bv === "number"
        ? av - bv
        : String(av).localeCompare(String(bv), undefined, { numeric: true });
      return dir === "asc" ? cmp : -cmp;
    });
  };

  // reset sort when table/query changes
  useEffect(() => { setSortCol(null); setSortOpen(null); }, [selected, activeQuery]);

  // close dropdown on outside click
  useEffect(() => {
    if (!sortOpen) return;
    const handler = () => setSortOpen(null);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [sortOpen]);

  const SortableHeader = ({ col, label, typeTag }: { col: string; label: string; typeTag?: string }) => {
    const active = sortCol === col;
    const isOpen = sortOpen === col;
    return (
      <th className="th" style={{ position: "relative" }}>
        {typeTag && <span className="th-type">{typeTag}</span>}
        {label}
        <button
          className={`th-sort-btn ${active ? "th-sort-active" : ""}`}
          onClick={e => { e.stopPropagation(); setSortOpen(isOpen ? null : col); }}
          title="Ordenar"
        >
          {active ? (sortDir === "asc" ? <Icon.SortAsc /> : <Icon.SortDesc />) : <Icon.SortNone />}
        </button>
        {isOpen && (
          <div className="sort-menu" onClick={e => e.stopPropagation()}>
            <button className={`sort-opt ${active && sortDir === "asc" ? "sort-opt-active" : ""}`}
              onClick={() => applySort(col, "asc")}>
              <span className="sort-opt-icon"><Icon.SortAsc /></span> Ascendente
            </button>
            <button className={`sort-opt ${active && sortDir === "desc" ? "sort-opt-active" : ""}`}
              onClick={() => applySort(col, "desc")}>
              <span className="sort-opt-icon"><Icon.SortDesc /></span> Descendente
            </button>
            {active && (
              <button className="sort-opt sort-opt-clear" onClick={clearSort}>
                <span className="sort-opt-icon"><Icon.SortX /></span> Sin orden
              </button>
            )}
          </div>
        )}
      </th>
    );
  };

  const selectQuery = (q: QueryCatalogItem) => {
    setActiveQuery(q); setQueryParams({}); setQueryData([]); setQueryRan(false);
    if (q.params.length === 0) runQuery(q, {});
  };

  return (
    <>
      <style>{CSS}</style>

      <div className="db-app">

        {/* ══ SIDEBAR ══ */}
        <aside className={`db-sidebar ${sidebarOpen ? "open" : "closed"}`}>

          <div className="sb-header">
            <div className="sb-logo">
              <div className="sb-logo-mark">DB</div>
              <span className="sb-logo-text">Studio</span>
            </div>
            <button className="db-dark-toggle" onClick={() => setDarkMode(d => !d)}>
              <span className="dt-icon">{darkMode ? <Icon.Sun /> : <Icon.Moon />}</span>
              <span className="dt-label">{darkMode ? "Claro" : "Oscuro"}</span>
            </button>
          </div>

          <div className="mode-btns">
            <button className={`mode-btn tables-btn ${viewMode === "table" ? "active" : ""}`} onClick={() => setViewMode("table")}>
              <Icon.Table /><span>Tablas</span>
            </button>
            <button className={`mode-btn queries-btn ${viewMode === "queries" ? "active" : ""}`} onClick={() => setViewMode("queries")}>
              <Icon.Query /><span>Consultas</span>
            </button>
          </div>

          {viewMode === "table" && (
            <>
              <div className="sb-section-title">Tablas</div>
              <div className="sb-table-list">
                {Object.keys(tables).map(t => (
                  <button key={t} className={`sb-table-btn ${selected === t ? "active" : ""}`} onClick={() => setSelected(t)}>
                    <span className="sb-table-icon">⊞</span>
                    <span className="sb-table-name">{t}</span>
                    {selected === t && <span className="sb-table-count">{data.length}</span>}
                  </button>
                ))}
              </div>
              <div className="sb-divider" />
              <div className="sb-section-title"><Icon.Plus /> Nuevo Registro</div>
              <div className="sb-form">
                {config.fields.map(f => (
                  <div key={f.name} className="sb-field">
                    <label className="sb-label">{f.name}</label>
                    <input className="sb-input"
                      type={f.type === "number" ? "number" : f.type === "date" ? "date" : "text"}
                      placeholder={f.name} value={addData[f.name] ?? ""}
                      onChange={e => setAddData(p => ({ ...p, [f.name]: e.target.value }))} />
                  </div>
                ))}
                <button className="action-btn insert-btn" onClick={handleInsert}><Icon.Plus /> Insertar registro</button>
              </div>
              <div className="sb-divider" />
              <div className="sb-section-title">
                <Icon.Filter /> Filtros
                {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
              </div>
              <div className="sb-form">
                {config.fields.map(f => {
                  if (f.type === "date") return (
                    <div key={f.name} className="sb-field">
                      <label className="sb-label"><Icon.Calendar /> {f.name} — rango</label>
                      <div className="date-range">
                        <input className="sb-input" type="date" value={dateFilters[f.name]?.desde ?? ""}
                          onChange={e => setDateFilters(p => ({ ...p, [f.name]: { ...p[f.name], desde: e.target.value } }))} />
                        <span className="date-sep">—</span>
                        <input className="sb-input" type="date" value={dateFilters[f.name]?.hasta ?? ""}
                          onChange={e => setDateFilters(p => ({ ...p, [f.name]: { ...p[f.name], hasta: e.target.value } }))} />
                      </div>
                    </div>
                  );
                  return (
                    <div key={f.name} className="sb-field">
                      <label className="sb-label">{f.name}</label>
                      <div className="sb-input-wrap">
                        <span className="sb-input-icon"><Icon.Search /></span>
                        <input className="sb-input has-icon" type="text" placeholder={`Buscar en ${f.name}…`}
                          value={filters[f.name] ?? ""}
                          onChange={e => setFilters(p => ({ ...p, [f.name]: e.target.value }))} />
                        {filters[f.name] && (
                          <button className="sb-input-clear"
                            onClick={() => setFilters(p => { const n = { ...p }; delete n[f.name]; return n; })}>
                            <Icon.Close />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
                {activeFilterCount > 0 && (
                  <button className="action-btn clear-btn" onClick={() => { setFilters({}); setDateFilters({}); }}>
                    Limpiar filtros
                  </button>
                )}
              </div>
            </>
          )}

          {viewMode === "queries" && (
            <>
              {(["joins", "agrupaciones", "filtros"] as const).map(cat => (
                <div key={cat}>
                  <div className="sb-section-title">
                    {cat === "joins" ? "JOIN / Relaciones" : cat === "agrupaciones" ? "Agrupaciones" : "Filtros especiales"}
                  </div>
                  <div className="sb-table-list">
                    {categorized(cat).map(q => (
                      <button key={q.id} className={`sb-table-btn ${activeQuery?.id === q.id ? "active" : ""}`} onClick={() => selectQuery(q)}>
                        <span className="sb-table-icon">▶</span>
                        <span className="sb-table-name">{q.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="sb-divider" />
                </div>
              ))}
            </>
          )}
        </aside>

        {/* ══ MAIN ══ */}
        <main className="db-main">

          {/* ══ TOGGLE — fixed, floats over everything ══ */}
          <button
            className="db-sidebar-toggle"
            style={{ left: sidebarOpen ? `${SB_W - 24}px` : "12px" }}
            onClick={() => setSidebarOpen(o => !o)}
            title={sidebarOpen ? "Ocultar panel" : "Mostrar panel"}
          >
            {sidebarOpen ? <Icon.ArrowLeft /> : <Icon.ArrowRight />}
          </button>

          {/* context banner */}
          <div className={`context-banner ${viewMode === "queries" ? "qmode" : "tmode"}`}>
            <div className="cb-left">
              <div className="cb-icon">{viewMode === "table" ? <Icon.Table /> : <Icon.Query />}</div>
              <div className="cb-text">
                <div className="cb-label">{viewMode === "table" ? "VISTA DE TABLA" : "MODO CONSULTAS"}</div>
                <div className="cb-value">{viewMode === "table" ? selected : (activeQuery?.label ?? "Consultas avanzadas")}</div>
              </div>
              {viewMode === "table" && activeFilterCount > 0 && (
                <span className="ctx-tag ftag"><Icon.Filter /> {activeFilterCount} filtro{activeFilterCount > 1 ? "s" : ""}</span>
              )}
              {viewMode === "table" && <span className="ctx-tag ctag">{data.length} registros</span>}
              {viewMode === "queries" && queryRan && <span className="ctx-tag ctag">{queryData.length} resultados</span>}
            </div>
            <div className="cb-right">
              {viewMode === "queries" && activeQuery && (
                <button className="banner-back-btn" onClick={() => { setActiveQuery(null); setQueryData([]); setQueryRan(false); }}>
                  <Icon.Back /> Volver a consultas
                </button>
              )}
              {viewMode === "table" && (
                <>
                  <span className={`live-dot ${liveIndicator ? "pulse" : ""}`} />
                  <button className="icon-action-btn" onClick={() => load()}><Icon.Refresh /></button>
                </>
              )}
              {viewMode === "queries" && activeQuery && (
                <button className="run-btn" onClick={() => runQuery(activeQuery, queryParams)} disabled={queryLoading}>
                  <Icon.Play /> {queryLoading ? "Ejecutando…" : "Ejecutar"}
                </button>
              )}
            </div>
          </div>

          {/* tabs */}
          {viewMode === "table" && (
            <div className="tabs-bar">
              {Object.keys(tables).map(t => (
                <button key={t} className={`tab-btn ${selected === t ? "active" : ""}`} onClick={() => setSelected(t)}>{t}</button>
              ))}
            </div>
          )}

          {/* table view */}
          {viewMode === "table" && (
            <div className="table-wrap">
              {loading && data.length === 0 ? (
                <div className="loading-state"><span className="spinner" /><span>Cargando datos…</span></div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th className="th-idx">#</th>
                      {config.fields.map(f => (
                        <SortableHeader key={f.name} col={f.name} label={f.name} typeTag={f.type} />
                      ))}
                      <th className="th-actions">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length === 0 ? (
                      <tr><td colSpan={config.fields.length + 2} className="empty-state">Sin resultados</td></tr>
                    ) : sortRows(data, sortCol, sortDir).map((row, i) => (
                      <tr key={i} className="data-row">
                        <td className="td-idx">{i + 1}</td>
                        {config.fields.map(f => (
                          <td key={f.name} className="td">
                            <span className={`cell-val ${typeof row[f.name] === "number" ? "num" : ""}`}>
                              {row[f.name] === null || row[f.name] === undefined ? <span className="cell-null">null</span> : String(row[f.name])}
                            </span>
                          </td>
                        ))}
                        <td className="td-actions">
                          <button className="row-btn edit-row-btn" onClick={() => openEdit(row)}><Icon.Edit /><span>Editar</span></button>
                          <button className="row-btn delete-row-btn" onClick={() => handleDelete(row)}><Icon.Trash /><span>Eliminar</span></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* query view */}
          {viewMode === "queries" && (
            <div className="query-area">
              {!activeQuery ? (
                <div className="query-empty">
                  <div className="query-empty-icon"><Icon.Query /></div>
                  <h2 className="query-empty-title">Consultas avanzadas</h2>
                  <p className="query-empty-sub">Selecciona una consulta del panel lateral o usa los accesos rápidos de abajo</p>
                  <button className="action-btn back-to-tables-btn" onClick={() => setViewMode("table")}>
                    <Icon.Table /> Volver a Tablas
                  </button>
                  <div className="query-empty-cats">
                    {(["joins", "agrupaciones", "filtros"] as const).map(cat => (
                      <div key={cat} className="query-cat-card">
                        <div className="query-cat-name">{cat === "joins" ? "JOINs" : cat === "agrupaciones" ? "Agrupaciones" : "Filtros"}</div>
                        <div className="query-cat-count">{categorized(cat).length} consultas</div>
                        <div className="query-cat-items">
                          {categorized(cat).map(q => (
                            <button key={q.id} className="query-cat-item-btn" onClick={() => selectQuery(q)}>▶ {q.label}</button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="query-info-bar">
                    <p className="query-desc">{activeQuery.description}</p>
                    {activeQuery.params.length > 0 && (
                      <div className="query-params-row">
                        {activeQuery.params.map(p => (
                          <div key={p.name} className="sb-field" style={{ minWidth: 160 }}>
                            <label className="sb-label">{p.label}</label>
                            <input className="sb-input" type={p.type === "date" ? "date" : "text"}
                              value={queryParams[p.name] ?? ""}
                              onChange={e => setQueryParams(prev => ({ ...prev, [p.name]: e.target.value }))} />
                          </div>
                        ))}
                        <button className="action-btn insert-btn" style={{ alignSelf: "flex-end" }}
                          onClick={() => runQuery(activeQuery, queryParams)} disabled={queryLoading}>
                          <Icon.Play /> {queryLoading ? "Ejecutando…" : "Ejecutar"}
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="table-wrap">
                    {queryLoading ? (
                      <div className="loading-state"><span className="spinner" /><span>Ejecutando…</span></div>
                    ) : !queryRan ? (
                      <div className="empty-state">{activeQuery.params.length === 0 ? "Cargando…" : "Completa los parámetros y presiona Ejecutar"}</div>
                    ) : queryData.length === 0 ? (
                      <div className="empty-state">Sin resultados</div>
                    ) : (
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th className="th-idx">#</th>
                            {queryColumns.map(col => (
                              <SortableHeader key={col} col={col} label={col} />
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sortRows(queryData, sortCol, sortDir).map((row, i) => (
                            <tr key={i} className="data-row">
                              <td className="td-idx">{i + 1}</td>
                              {queryColumns.map(col => (
                                <td key={col} className="td">
                                  <span className={`cell-val ${typeof row[col] === "number" ? "num" : ""}`}>
                                    {row[col] === null || row[col] === undefined ? <span className="cell-null">null</span> : String(row[col])}
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
        </main>
      </div>

      {/* ══ MODAL — inherits vars from :root ══ */}
      {editRow && (
        <div className="db-modal-bg" onClick={() => setEditRow(null)}>
          <div className="db-modal" onClick={e => e.stopPropagation()}>
            <div className="db-modal-header">
              <span>Editar registro — <strong>{selected}</strong></span>
              <button className="icon-action-btn" onClick={() => setEditRow(null)}><Icon.Close /></button>
            </div>
            <div className="db-modal-body">
              {config.fields.map(f => (
                <div key={f.name} className="sb-field">
                  <label className="sb-label">{f.name} <span className="sb-type-tag">{f.type}</span></label>
                  <input className="sb-input"
                    type={f.type === "number" ? "number" : f.type === "date" ? "date" : "text"}
                    value={editData[f.name] ?? ""}
                    onChange={e => setEditData(p => ({ ...p, [f.name]: e.target.value }))} />
                </div>
              ))}
            </div>
            <div className="db-modal-footer">
              <button className="action-btn clear-btn"  onClick={() => setEditRow(null)}>Cancelar</button>
              <button className="action-btn insert-btn" onClick={handleUpdate}><Icon.Check /> Guardar cambios</button>
            </div>
          </div>
        </div>
      )}

      {/* ══ TOAST — inherits vars from :root ══ */}
      {toast && (
        <div className={`db-toast ${toast.type}`}>
          {toast.type === "ok" ? <Icon.Check /> : "✕"} {toast.msg}
        </div>
      )}
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   CSS
   FIX: variables defined on :root (not .app) so position:fixed
   elements (modal, toast) always inherit them correctly.
   Dark mode toggles via .db-dark on <html>.
══════════════════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ══ LIGHT TOKENS on :root ══ */
:root {
  --bg-base:         #e8eaf2;
  --bg-surface:      #ffffff;
  --bg-raised:       #dde0ec;
  --bg-hover:        #cdd1e4;
  --border:          #8892b8;
  --border-strong:   #5560a0;
  --txt-primary:     #08091a;
  --txt-secondary:   #282e55;
  --txt-muted:       #525a88;
  --acc-table:       #1648cc;
  --acc-table-bg:    #d5e2ff;
  --acc-table-hover: #0f35a0;
  --acc-query:       #6c20da;
  --acc-query-bg:    #ead8ff;
  --acc-query-hover: #550fa8;
  --ok:              #166534;
  --ok-bg:           #bbf7d0;
  --del:             #991b1b;
  --del-bg:          #fecaca;
  --num-color:       #7c2d12;
  --str-color:       #14532d;
  --null-color:      #6b7280;
  --shadow-sm: 0 1px 4px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.10);
  --shadow-md: 0 4px 14px rgba(0,0,0,.15), 0 2px 6px rgba(0,0,0,.10);
  --shadow-lg: 0 20px 50px rgba(0,0,0,.22);
  --sans: 'DM Sans', sans-serif;
  --mono: 'DM Mono', monospace;
}

/* ══ DARK TOKENS — toggled on <html> ══ */
html.db-dark {
  --bg-base:         #090b14;
  --bg-surface:      #111420;
  --bg-raised:       #181c30;
  --bg-hover:        #202540;
  --border:          #2e3560;
  --border-strong:   #445090;
  --txt-primary:     #edf0ff;
  --txt-secondary:   #aab0d8;
  --txt-muted:       #606890;
  --acc-table:       #4d88f0;
  --acc-table-bg:    #162048;
  --acc-table-hover: #6da0f8;
  --acc-query:       #9060f0;
  --acc-query-bg:    #241450;
  --acc-query-hover: #a878f8;
  --ok:              #22c55e;
  --ok-bg:           #052e16;
  --del:             #f87171;
  --del-bg:          #2d0808;
  --num-color:       #fbbf24;
  --str-color:       #4ade80;
  --null-color:      #475569;
  --shadow-sm: 0 1px 4px rgba(0,0,0,.4);
  --shadow-md: 0 4px 14px rgba(0,0,0,.5);
  --shadow-lg: 0 20px 50px rgba(0,0,0,.7);
}

body { font-family: var(--sans); background: var(--bg-base); }

/* ══ ROOT LAYOUT ══ */
.db-app {
  display: flex; height: 100vh;
  background: var(--bg-base); color: var(--txt-primary);
  overflow: hidden; font-family: var(--sans);
}

/* ══ SIDEBAR ══ */
.db-sidebar {
  display: flex; flex-direction: column;
  background: var(--bg-surface);
  border-right: 3px solid var(--border-strong);
  height: 100vh; flex-shrink: 0;
  overflow-y: auto; overflow-x: hidden;
  transition: width .26s cubic-bezier(.4,0,.2,1);
  scrollbar-width: thin; scrollbar-color: var(--border) transparent;
}
.db-sidebar.open   { width: ${SB_W}px; }
.db-sidebar.closed { width: 0; border-right: none; }

.sb-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 14px 12px; border-bottom: 3px solid var(--border-strong);
  flex-shrink: 0; min-width: ${SB_W}px; gap: 8px;
}
.sb-logo { display: flex; align-items: center; gap: 9px; flex-shrink: 0; }
.sb-logo-mark {
  width: 36px; height: 36px; border-radius: 9px;
  background: var(--acc-table); color: #fff;
  font-size: 12px; font-weight: 700; font-family: var(--mono);
  display: flex; align-items: center; justify-content: center;
}
.sb-logo-text { font-size: 16px; font-weight: 800; color: var(--txt-primary); }

/* DARK TOGGLE */
.db-dark-toggle {
  display: flex; align-items: center; gap: 6px;
  padding: 7px 12px; border-radius: 22px;
  background: var(--bg-raised); border: 2.5px solid var(--border-strong);
  font-size: 12px; font-weight: 700; font-family: var(--sans);
  color: var(--txt-primary); cursor: pointer;
  transition: all .16s; white-space: nowrap; flex-shrink: 0;
  box-shadow: var(--shadow-sm);
}
.db-dark-toggle:hover {
  background: var(--acc-table); color: #fff; border-color: var(--acc-table);
  box-shadow: 0 3px 12px rgba(22,72,204,.35);
}
.dt-icon { display: flex; align-items: center; }

/* MODE BUTTONS */
.mode-btns {
  display: flex; gap: 8px; padding: 12px 20px 10px;
  min-width: ${SB_W}px; border-bottom: 2px solid var(--border);
}
.mode-btn {
  flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 12px 6px; border-radius: 10px;
  font-size: 14px; font-weight: 800; font-family: var(--sans);
  cursor: pointer; border: 3px solid transparent;
  transition: all .18s; white-space: nowrap;
}
.tables-btn  { background: var(--acc-table-bg);  color: var(--acc-table);  border-color: var(--acc-table); }
.queries-btn { background: var(--acc-query-bg);  color: var(--acc-query);  border-color: var(--acc-query); }
.tables-btn:hover,  .tables-btn.active  { background: var(--acc-table);  color: #fff; box-shadow: 0 4px 16px rgba(22,72,204,.4); }
.queries-btn:hover, .queries-btn.active { background: var(--acc-query);  color: #fff; box-shadow: 0 4px 16px rgba(108,32,218,.4); }

/* SECTION TITLES */
.sb-section-title {
  display: flex; align-items: center; gap: 6px;
  font-size: 11.5px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
  color: var(--txt-secondary); padding: 14px 16px 7px; min-width: ${SB_W}px;
}
.filter-badge {
  margin-left: 4px; background: var(--acc-table); color: #fff;
  border-radius: 20px; font-size: 10px; font-weight: 700; padding: 1px 7px;
}

/* TABLE LIST */
.sb-table-list { display: flex; flex-direction: column; gap: 3px; padding: 2px 10px; min-width: ${SB_W}px; }
.sb-table-btn {
  display: flex; align-items: center; gap: 10px;
  padding: 11px 12px; border-radius: 9px;
  background: transparent; border: none; cursor: pointer;
  transition: all .14s; text-align: left; width: 100%;
}
.sb-table-btn:hover { background: var(--bg-hover); }
.sb-table-btn.active { background: var(--acc-table-bg); border-left: 4px solid var(--acc-table); padding-left: 9px; }
.sb-table-icon { font-size: 14px; color: var(--txt-muted); flex-shrink: 0; font-family: var(--mono); }
.sb-table-btn.active .sb-table-icon { color: var(--acc-table); }
.sb-table-name { font-size: 15px; font-weight: 700; color: var(--txt-secondary); letter-spacing: -.01em; flex: 1; }
.sb-table-btn.active .sb-table-name { color: var(--acc-table); }
.sb-table-count {
  background: var(--acc-table); color: #fff;
  border-radius: 20px; font-size: 10.5px; font-weight: 700;
  padding: 2px 9px; font-family: var(--mono); flex-shrink: 0;
}

/* FORMS */
.sb-divider { height: 2.5px; background: var(--border); margin: 10px 0; min-width: ${SB_W}px; }
.sb-form { padding: 4px 12px 14px; display: flex; flex-direction: column; gap: 10px; min-width: ${SB_W}px; }
.sb-field { display: flex; flex-direction: column; gap: 4px; }
.sb-label {
  display: flex; align-items: center; gap: 4px;
  font-size: 11.5px; font-weight: 700; color: var(--txt-secondary);
  letter-spacing: .04em; text-transform: uppercase;
}
.sb-type-tag {
  font-size: 9.5px; background: var(--bg-raised); border: 1.5px solid var(--border);
  border-radius: 4px; padding: 0 5px; color: var(--txt-muted);
  font-family: var(--mono); text-transform: none; font-weight: 400;
}
.sb-input-wrap { position: relative; }
.sb-input-icon { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); color: var(--txt-muted); pointer-events: none; }
.sb-input-clear {
  position: absolute; right: 7px; top: 50%; transform: translateY(-50%);
  background: none; border: none; color: var(--txt-muted); cursor: pointer; padding: 2px; display: flex; align-items: center;
}
.sb-input-clear:hover { color: var(--del); }
.sb-input {
  width: 100%; background: var(--bg-raised);
  border: 2.5px solid var(--border); border-radius: 8px;
  padding: 8px 11px; font-size: 13px;
  color: var(--txt-primary); font-family: var(--mono);
  outline: none; transition: border-color .15s, box-shadow .15s;
}
.sb-input.has-icon { padding-left: 30px; padding-right: 26px; }
.sb-input:focus { border-color: var(--acc-table); box-shadow: 0 0 0 3px rgba(22,72,204,.14); }
.sb-input::placeholder { color: var(--txt-muted); }
.date-range { display: flex; align-items: center; gap: 5px; }
.date-range .sb-input { flex: 1; min-width: 0; font-size: 12px; padding: 7px 7px; }
.date-sep { color: var(--txt-muted); flex-shrink: 0; font-size: 13px; font-weight: 700; }

/* ACTION BUTTONS */
.action-btn {
  display: flex; align-items: center; justify-content: center; gap: 7px;
  padding: 11px 16px; border-radius: 9px;
  font-size: 13.5px; font-weight: 700; cursor: pointer;
  border: none; font-family: var(--sans); transition: all .16s;
}
.insert-btn { background: var(--acc-table); color: #fff; box-shadow: 0 2px 10px rgba(22,72,204,.35); }
.insert-btn:hover:not(:disabled) { background: var(--acc-table-hover); transform: translateY(-1px); box-shadow: 0 5px 18px rgba(22,72,204,.45); }
.insert-btn:disabled { opacity: .5; cursor: not-allowed; }
.clear-btn { background: transparent; color: var(--txt-secondary); border: 2.5px solid var(--border); }
.clear-btn:hover { background: var(--bg-hover); color: var(--txt-primary); border-color: var(--border-strong); }
.back-to-tables-btn {
  background: var(--acc-table); color: #fff;
  padding: 14px 32px; font-size: 16px; font-weight: 800; border-radius: 12px;
  box-shadow: 0 4px 18px rgba(22,72,204,.4);
}
.back-to-tables-btn:hover { background: var(--acc-table-hover); transform: translateY(-2px); box-shadow: 0 8px 26px rgba(22,72,204,.5); }

/* SIDEBAR TOGGLE — fixed, floats over everything */
.db-sidebar-toggle {
  position: fixed; top: 50%; transform: translateY(-50%);
  background: var(--bg-surface); border: 3px solid var(--border-strong);
  border-radius: 50%; width: 48px; height: 48px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--txt-primary);
  box-shadow: var(--shadow-md); z-index: 200;
  transition: left .26s cubic-bezier(.4,0,.2,1), background .18s, border-color .18s, box-shadow .18s;
}
.db-sidebar-toggle:hover {
  background: var(--acc-table); color: #fff; border-color: var(--acc-table);
  transform: translateY(-50%) scale(1.12); box-shadow: 0 6px 24px rgba(22,72,204,.45);
}

/* MAIN */
.db-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; min-width: 0; background: var(--bg-base); position: relative; }

/* CONTEXT BANNER */
.context-banner {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 22px; height: 68px; flex-shrink: 0;
  background: var(--bg-surface); border-bottom: 4px solid var(--acc-table);
  box-shadow: var(--shadow-sm);
}
.context-banner.qmode { border-bottom-color: var(--acc-query); }
.cb-left { display: flex; align-items: center; gap: 14px; }
.cb-icon { width: 44px; height: 44px; border-radius: 11px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.tmode .cb-icon { background: var(--acc-table-bg); color: var(--acc-table); }
.qmode .cb-icon { background: var(--acc-query-bg); color: var(--acc-query); }
.cb-text { display: flex; flex-direction: column; gap: 1px; }
.cb-label { font-size: 9.5px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
.tmode .cb-label { color: var(--acc-table); }
.qmode .cb-label { color: var(--acc-query); }
.cb-value { font-size: 19px; font-weight: 800; color: var(--txt-primary); letter-spacing: -.025em; line-height: 1; }
.ctx-tag { padding: 4px 11px; border-radius: 20px; font-size: 12px; font-weight: 600; border: 2px solid; }
.ftag { display: flex; align-items: center; gap: 4px; background: var(--acc-table-bg); color: var(--acc-table); border-color: var(--acc-table); }
.ctag { background: var(--bg-raised); color: var(--txt-secondary); border-color: var(--border); font-family: var(--mono); }
.cb-right { display: flex; align-items: center; gap: 10px; }
.live-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--ok); opacity: .6; transition: opacity .2s; }
.live-dot.pulse { opacity: 1; box-shadow: 0 0 0 3px var(--ok-bg); animation: db-pulse .6s ease; }
@keyframes db-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.45)} }
.icon-action-btn {
  background: var(--bg-raised); border: 2.5px solid var(--border);
  border-radius: 8px; padding: 8px 10px; cursor: pointer;
  color: var(--txt-secondary); display: flex; align-items: center; transition: all .14s;
}
.icon-action-btn:hover { background: var(--bg-hover); color: var(--txt-primary); border-color: var(--border-strong); }
.banner-back-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 9px 18px; border-radius: 9px;
  background: var(--bg-raised); border: 2.5px solid var(--border);
  color: var(--txt-secondary); font-size: 13px; font-weight: 700;
  cursor: pointer; font-family: var(--sans); transition: all .14s;
}
.banner-back-btn:hover { background: var(--bg-hover); color: var(--txt-primary); border-color: var(--border-strong); }
.run-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 9px 22px; border-radius: 9px;
  background: var(--acc-query); color: #fff;
  border: none; font-size: 13.5px; font-weight: 700;
  cursor: pointer; font-family: var(--sans);
  box-shadow: 0 2px 12px rgba(108,32,218,.38); transition: all .16s;
}
.run-btn:hover:not(:disabled) { background: var(--acc-query-hover); transform: translateY(-1px); }
.run-btn:disabled { opacity: .5; cursor: not-allowed; }

/* TABS */
.tabs-bar {
  display: flex; padding: 0 16px;
  border-bottom: 3px solid var(--border-strong);
  background: var(--bg-surface); flex-shrink: 0;
  overflow-x: auto; scrollbar-width: none;
}
.tabs-bar::-webkit-scrollbar { display: none; }
.tab-btn {
  padding: 11px 20px; font-size: 14px; font-weight: 600;
  color: var(--txt-muted); background: transparent; border: none;
  border-bottom: 3px solid transparent; cursor: pointer;
  transition: all .14s; white-space: nowrap; font-family: var(--sans);
  margin-bottom: -3px;
}
.tab-btn:hover { color: var(--txt-primary); }
.tab-btn.active { color: var(--acc-table); border-bottom-color: var(--acc-table); font-weight: 800; }

/* TABLE */
.table-wrap {
  flex: 1; overflow: auto;
  padding-left: 42px;
  scrollbar-width: thin; scrollbar-color: var(--border) transparent;
}
.data-table { width: 100%; border-collapse: collapse; font-family: var(--mono); font-size: 13px; }
.data-table thead {
  position: sticky; top: 0; z-index: 5;
  background: var(--bg-surface); border-bottom: 3px solid var(--border-strong);
}
.th-idx { padding: 11px 14px; color: var(--txt-secondary); width: 46px; border-right: 3px solid var(--border-strong); font-family: var(--mono); font-weight: 600; }
.th { padding: 11px 16px; text-align: left; color: var(--txt-primary); font-weight: 800; font-size: 12px; letter-spacing: .05em; text-transform: uppercase; border-right: 2.5px solid var(--border); white-space: nowrap; font-family: var(--sans); }
.th-type { display: inline-block; font-size: 9px; color: var(--txt-muted); background: var(--bg-raised); border: 1.5px solid var(--border); border-radius: 3px; padding: 0 4px; margin-right: 6px; font-family: var(--mono); vertical-align: middle; text-transform: lowercase; font-weight: 400; }
.th-actions {padding: 11px 16px; color: var(--txt-primary); font-size: 12px; font-weight: 800; font-family: var(--sans); }
.data-row { transition: background .1s; border-bottom: 2px solid var(--border); }
.data-row:hover { background: var(--bg-raised); }
.td-idx { padding: 11px 14px; color: var(--txt-secondary); font-size: 13px; font-weight: 700; border-right: 3px solid var(--border-strong); font-family: var(--mono); }
.td { padding: 11px 16px; vertical-align: middle; border-right: 2px solid var(--border); max-width: 280px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cell-val { color: var(--txt-primary) !important; font-size: 13.5px; font-weight: 600; }
.cell-val.num { color: var(--num-color) !important; font-weight: 700; }
.td-actions { padding: 8px 12px; white-space: nowrap; display: flex; gap: 6px; align-items: center; justify-content: center; }
.cell-null { color: var(--null-color); font-style: italic; font-size: 13px; }

/* SORT DROPDOWN */
.th-sort-btn {
  display: inline-flex; align-items: center; justify-content: center;
  margin-left: 7px; padding: 3px 5px; border-radius: 6px;
  background: var(--bg-raised); border: 2px solid var(--border);
  color: var(--txt-muted); cursor: pointer; vertical-align: middle;
  line-height: 0; transition: all .14s;
  width: 26px; height: 26px;
}
.th-sort-btn:hover { background: var(--bg-hover); color: var(--txt-primary); border-color: var(--border-strong); }
.th-sort-active { background: var(--acc-table-bg) !important; color: var(--acc-table) !important; border-color: var(--acc-table) !important; }

.sort-opt-icon {
  display: flex; align-items: center; justify-content: center;
  width: 18px; flex-shrink: 0;
}

.sort-menu {
  position: absolute; top: calc(100% + 4px); left: 0; z-index: 100;
  background: var(--bg-surface); border: 2.5px solid var(--border-strong);
  border-radius: 10px; padding: 5px; min-width: 160px;
  box-shadow: var(--shadow-md);
  display: flex; flex-direction: column; gap: 2px;
}
.sort-opt {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 12px; border-radius: 7px; border: none;
  background: transparent; color: var(--txt-secondary);
  font-size: 13px; font-weight: 600; font-family: var(--sans);
  cursor: pointer; text-align: left; width: 100%;
  transition: background .12s, color .12s;
}
.sort-opt:hover { background: var(--bg-hover); color: var(--txt-primary); }
.sort-opt-active { background: var(--acc-table-bg) !important; color: var(--acc-table) !important; }
.sort-opt-clear { color: var(--txt-muted); }
.sort-opt-clear:hover { background: var(--del-bg); color: var(--del); }
.sort-opt-icon { font-size: 14px; font-weight: 800; width: 16px; text-align: center; }

/* ROW BUTTONS */
.row-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 7px 13px; border-radius: 7px;
  font-size: 12.5px; font-weight: 700; cursor: pointer;
  border: 2.5px solid transparent; font-family: var(--sans);
  transition: all .14s; white-space: nowrap;
}
.edit-row-btn { background: var(--acc-table-bg); color: var(--acc-table); border-color: var(--acc-table); }
.edit-row-btn:hover { background: var(--acc-table); color: #fff; transform: translateY(-1px); box-shadow: 0 3px 12px rgba(22,72,204,.35); }
.delete-row-btn { background: var(--del-bg); color: var(--del); border-color: var(--del); }
.delete-row-btn:hover { background: var(--del); color: #fff; transform: translateY(-1px); box-shadow: 0 3px 12px rgba(153,27,27,.35); }

/* STATES */
.loading-state { display: flex; align-items: center; justify-content: center; gap: 12px; color: var(--txt-muted); padding: 80px; font-size: 14px; }
.spinner { width: 20px; height: 20px; border-radius: 50%; border: 3px solid var(--border); border-top-color: var(--acc-table); animation: db-spin .7s linear infinite; }
@keyframes db-spin { to { transform: rotate(360deg); } }
.empty-state { display: flex; align-items: center; justify-content: center; color: var(--txt-muted); padding: 60px; font-size: 14px; }

/* QUERY AREA */
.query-area { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.query-empty { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 48px; text-align: center; }
.query-empty-icon { width: 72px; height: 72px; border-radius: 20px; background: var(--acc-query-bg); color: var(--acc-query); display: flex; align-items: center; justify-content: center; border: 3px solid var(--acc-query); }
.query-empty-title { font-size: 26px; font-weight: 800; color: var(--txt-primary); }
.query-empty-sub { font-size: 15px; color: var(--txt-secondary); max-width: 420px; line-height: 1.6; }
.query-empty-cats { display: flex; gap: 14px; margin-top: 6px; flex-wrap: wrap; justify-content: center; }
.query-cat-card { padding: 16px 22px; border-radius: 12px; background: var(--bg-surface); border: 2.5px solid var(--border); box-shadow: var(--shadow-sm); text-align: left; min-width: 180px; }
.query-cat-name { font-size: 14px; font-weight: 800; color: var(--txt-primary); margin-bottom: 2px; }
.query-cat-count { font-size: 12px; color: var(--acc-query); font-weight: 600; margin-bottom: 10px; }
.query-cat-items { display: flex; flex-direction: column; gap: 4px; }
.query-cat-item-btn { text-align: left; font-size: 12.5px; font-weight: 600; color: var(--acc-query); background: var(--acc-query-bg); border: 1.5px solid var(--acc-query); border-radius: 6px; padding: 5px 10px; cursor: pointer; font-family: var(--sans); transition: all .14s; }
.query-cat-item-btn:hover { background: var(--acc-query); color: #fff; }
.query-info-bar { padding: 16px 22px; border-bottom: 3px solid var(--border-strong); background: var(--bg-surface); display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap; }
.query-desc { font-size: 13.5px; color: var(--txt-secondary); flex: 1; min-width: 200px; line-height: 1.6; }
.query-params-row { display: flex; gap: 10px; align-items: flex-end; flex-wrap: wrap; }

/* ══ MODAL — gets vars from :root, always works ══ */
.db-modal-bg {
  position: fixed; inset: 0;
  background: rgba(0,0,0,.55);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(6px);
  animation: db-fadein .16s;
  font-family: var(--sans);
}
@keyframes db-fadein { from{opacity:0} to{opacity:1} }

.db-modal {
  background: var(--bg-surface);
  border: 3px solid var(--border-strong);
  border-radius: 14px; width: 470px; max-height: 82vh;
  display: flex; flex-direction: column;
  box-shadow: var(--shadow-lg);
  color: var(--txt-primary);
  font-family: var(--sans);
  animation: db-slideup .2s cubic-bezier(.4,0,.2,1);
}
@keyframes db-slideup { from{transform:translateY(18px);opacity:0} to{transform:translateY(0);opacity:1} }

.db-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 20px; border-bottom: 3px solid var(--border-strong);
  font-size: 15px; font-weight: 800; color: var(--txt-primary);
  background: var(--bg-surface); border-radius: 14px 14px 0 0;
}
.db-modal-body {
  flex: 1; overflow-y: auto; padding: 20px;
  display: flex; flex-direction: column; gap: 14px;
  background: var(--bg-surface);
}
.db-modal-footer {
  display: flex; justify-content: flex-end; gap: 10px;
  padding: 14px 20px; border-top: 3px solid var(--border-strong);
  background: var(--bg-surface); border-radius: 0 0 14px 14px;
}

/* ══ TOAST — gets vars from :root, always works ══ */
.db-toast {
  position: fixed; bottom: 26px; right: 26px;
  display: flex; align-items: center; gap: 9px;
  padding: 13px 22px; border-radius: 11px;
  font-size: 14px; font-weight: 700;
  font-family: var(--sans);
  z-index: 9999;
  animation: db-slideup .2s ease;
  box-shadow: var(--shadow-md);
}
.db-toast.ok  {
  background: var(--ok-bg);
  border: 3px solid var(--ok);
  color: var(--ok);
}
.db-toast.err {
  background: var(--del-bg);
  border: 3px solid var(--del);
  color: var(--del);
}
`;
