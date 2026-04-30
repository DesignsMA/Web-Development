(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/dashboard/ui/ClientDashboard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientDashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
/* ─────────────────────────────────────────────────────────────
   ICONS
───────────────────────────────────────────────────────────── */ const Icon = {
    Plus: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 1v12M1 7h12",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 30,
            columnNumber: 5
        }, this),
    Trash: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 3h11M4 3V2a1 1 0 011-1h3a1 1 0 011 1v1M5 6v4M8 6v4M2 3l.7 8.1A1 1 0 003.7 12h5.6a1 1 0 001-.9L11 3",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 35,
            columnNumber: 5
        }, this),
    Edit: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 2l2 2L4 11H2V9L9 2z",
                stroke: "currentColor",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, this),
    Search: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "5.5",
                    cy: "5.5",
                    r: "4",
                    stroke: "currentColor",
                    strokeWidth: "1.4"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.5 8.5l3 3",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 47,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 45,
            columnNumber: 5
        }, this),
    Close: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 11 11",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1l9 9M10 1L1 10",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 51,
            columnNumber: 5
        }, this),
    ChevronLeft: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 2L4 7l5 5",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 56,
            columnNumber: 5
        }, this),
    ChevronRight: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 2l5 5-5 5",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 61,
            columnNumber: 5
        }, this),
    Refresh: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11.5 2v3.5H8M1.5 11V7.5H5",
                    stroke: "currentColor",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 67,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 5a5 5 0 018.5-1.5L11.5 5.5M11 8a5 5 0 01-8.5 1.5L1.5 7.5",
                    stroke: "currentColor",
                    strokeWidth: "1.4",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 68,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 66,
            columnNumber: 5
        }, this),
    Filter: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 2h11l-4 5v4l-3-1.5V7L1 2z",
                stroke: "currentColor",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 72,
            columnNumber: 5
        }, this),
    Check: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.5 6l3 3 6-6",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 77,
            columnNumber: 5
        }, this),
    Query: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "1",
                    width: "11",
                    height: "11",
                    rx: "2",
                    stroke: "currentColor",
                    strokeWidth: "1.4"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 83,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.5 4.5h6M3.5 6.5h4M3.5 8.5h5",
                    stroke: "currentColor",
                    strokeWidth: "1.3",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 82,
            columnNumber: 5
        }, this),
    Play: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 11 11",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.5 1.5l7 4-7 4V1.5z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 88,
            columnNumber: 5
        }, this),
    Table: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "1",
                    width: "11",
                    height: "11",
                    rx: "2",
                    stroke: "currentColor",
                    strokeWidth: "1.4"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 94,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 5h11M5 5v7",
                    stroke: "currentColor",
                    strokeWidth: "1.3"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 95,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 93,
            columnNumber: 5
        }, this),
    Calendar: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "2",
                    width: "10",
                    height: "9",
                    rx: "1.5",
                    stroke: "currentColor",
                    strokeWidth: "1.3"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 100,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 1v2M8 1v2M1 5h10",
                    stroke: "currentColor",
                    strokeWidth: "1.3",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 101,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
            lineNumber: 99,
            columnNumber: 5
        }, this)
};
function ClientDashboard({ tables, initialTable }) {
    _s();
    // ── view mode: "table" | "queries"
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("table");
    // ── table mode state
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTable);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [dateFilters, setDateFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [editRow, setEditRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editData, setEditData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [addData, setAddData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // ── query mode state
    const [catalog, setCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeQuery, setActiveQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [queryParams, setQueryParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [queryData, setQueryData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [queryLoading, setQueryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [queryRan, setQueryRan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── shared
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [liveIndicator, setLiveIndicator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const config = tables[selected];
    /* ── toast ── */ const showToast = (msg, type = "ok")=>{
        setToast({
            msg,
            type
        });
        setTimeout(()=>setToast(null), 2800);
    };
    /* ── load table ── */ const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClientDashboard.useCallback[load]": async (silent = false)=>{
            const reqId = ++requestRef.current;
            if (!silent) setLoading(true);
            try {
                const params = new URLSearchParams({
                    table: selected
                });
                Object.entries(filters).forEach({
                    "ClientDashboard.useCallback[load]": ([k, v])=>{
                        if (v) params.set(k, v);
                    }
                }["ClientDashboard.useCallback[load]"]);
                // date range params
                Object.entries(dateFilters).forEach({
                    "ClientDashboard.useCallback[load]": ([field, range])=>{
                        if (range.desde) params.set(`${field}__desde`, range.desde);
                        if (range.hasta) params.set(`${field}__hasta`, range.hasta);
                    }
                }["ClientDashboard.useCallback[load]"]);
                const res = await fetch(`/api/table?${params}`);
                const json = await res.json();
                if (reqId !== requestRef.current) return;
                setData(Array.isArray(json) ? json : []);
                setLiveIndicator(true);
                setTimeout({
                    "ClientDashboard.useCallback[load]": ()=>setLiveIndicator(false)
                }["ClientDashboard.useCallback[load]"], 600);
            } catch  {
                if (!silent) showToast("Error al obtener datos", "err");
            } finally{
                if (!silent) setLoading(false);
            }
        }
    }["ClientDashboard.useCallback[load]"], [
        selected,
        filters,
        dateFilters
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientDashboard.useEffect": ()=>{
            setData([]);
            setFilters({});
            setDateFilters({});
            load();
        }
    }["ClientDashboard.useEffect"], [
        selected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientDashboard.useEffect": ()=>{
            if (viewMode === "table") load();
        }
    }["ClientDashboard.useEffect"], [
        filters,
        dateFilters
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientDashboard.useEffect": ()=>{
            if (viewMode !== "table") return;
            const iv = setInterval({
                "ClientDashboard.useEffect.iv": ()=>load(true)
            }["ClientDashboard.useEffect.iv"], 3000);
            return ({
                "ClientDashboard.useEffect": ()=>clearInterval(iv)
            })["ClientDashboard.useEffect"];
        }
    }["ClientDashboard.useEffect"], [
        load,
        viewMode
    ]);
    /* ── load catalog ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientDashboard.useEffect": ()=>{
            fetch("/api/query").then({
                "ClientDashboard.useEffect": (r)=>r.json()
            }["ClientDashboard.useEffect"]).then({
                "ClientDashboard.useEffect": (d)=>{
                    if (Array.isArray(d)) setCatalog(d);
                }
            }["ClientDashboard.useEffect"]).catch({
                "ClientDashboard.useEffect": ()=>{}
            }["ClientDashboard.useEffect"]);
        }
    }["ClientDashboard.useEffect"], []);
    /* ── run query ── */ const runQuery = async (q, params)=>{
        setQueryLoading(true);
        setQueryRan(false);
        try {
            const sp = new URLSearchParams({
                id: q.id
            });
            Object.entries(params).forEach(([k, v])=>{
                if (v) sp.set(k, v);
            });
            const res = await fetch(`/api/query?${sp}`);
            const json = await res.json();
            setQueryData(Array.isArray(json) ? json : []);
            setQueryRan(true);
        } catch  {
            showToast("Error al ejecutar consulta", "err");
        } finally{
            setQueryLoading(false);
        }
    };
    /* ── insert ── */ const handleInsert = async ()=>{
        try {
            const r = await fetch("/api/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    table: selected,
                    data: addData
                })
            });
            if (!r.ok) throw new Error();
            setAddData({});
            showToast("Registro añadido");
            load();
        } catch  {
            showToast("Error al insertar", "err");
        }
    };
    /* ── delete ── */ const handleDelete = async (row)=>{
        try {
            const pk = config.pk.reduce((acc, k)=>{
                acc[k] = row[k];
                return acc;
            }, {});
            const r = await fetch("/api/delete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    table: selected,
                    pk
                })
            });
            if (!r.ok) throw new Error();
            showToast("Registro eliminado");
            load();
        } catch  {
            showToast("Error al eliminar", "err");
        }
    };
    /* ── update ── */ const handleUpdate = async ()=>{
        if (!editRow) return;
        try {
            const pk = config.pk.reduce((acc, k)=>{
                acc[k] = editRow[k];
                return acc;
            }, {});
            const r = await fetch("/api/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    table: selected,
                    pk,
                    data: editData
                })
            });
            if (!r.ok) throw new Error();
            setEditRow(null);
            showToast("Registro actualizado");
            load();
        } catch  {
            showToast("Error al actualizar", "err");
        }
    };
    const openEdit = (row)=>{
        setEditRow(row);
        setEditData(Object.fromEntries(config.fields.map((f)=>[
                f.name,
                String(row[f.name] ?? "")
            ])));
    };
    /* ── helpers ── */ const hasDateField = config.fields.some((f)=>f.type === "date");
    const activeDateFiltersCount = Object.values(dateFilters).filter((r)=>r.desde || r.hasta).length;
    const activeFilterCount = Object.values(filters).filter(Boolean).length + activeDateFiltersCount;
    const queryColumns = queryData.length > 0 ? Object.keys(queryData[0]) : [];
    const categorized = (cat)=>catalog.filter((q)=>q.category === cat);
    /* ─────────────────────── RENDER ─────────────────────── */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: CSS
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-root",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `db-sidebar ${sidebarOpen ? "open" : "closed"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-sidebar-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-logo",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "db-logo-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "db-logo-text",
                                                children: "DB Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "db-icon-btn",
                                        onClick: ()=>setSidebarOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.ChevronLeft, {}, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-mode-switch",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `db-mode-btn ${viewMode === "table" ? "active" : ""}`,
                                        onClick: ()=>setViewMode("table"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Table, {}, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this),
                                            " Tablas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `db-mode-btn ${viewMode === "queries" ? "active" : ""}`,
                                        onClick: ()=>setViewMode("queries"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Query, {}, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this),
                                            " Consultas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            viewMode === "table" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-section-label",
                                        children: "Context"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-context-list",
                                        children: Object.keys(tables).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `db-context-item ${selected === t ? "active" : ""}`,
                                                onClick: ()=>setSelected(t),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "db-context-icon",
                                                        children: "≡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, t, true, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-section-label",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Plus, {}, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 322,
                                                columnNumber: 49
                                            }, this),
                                            " Nuevo Registro"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-form-area",
                                        children: [
                                            config.fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "db-field-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "db-field-label",
                                                            children: f.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "db-input",
                                                            type: f.type === "number" ? "number" : f.type === "date" ? "date" : "text",
                                                            placeholder: f.name,
                                                            value: addData[f.name] ?? "",
                                                            onChange: (e)=>setAddData((p)=>({
                                                                        ...p,
                                                                        [f.name]: e.target.value
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, f.name, true, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "db-btn-primary",
                                                onClick: handleInsert,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Plus, {}, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Insertar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-section-label",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Filter, {}, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this),
                                            " Filtros",
                                            activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "db-badge",
                                                children: activeFilterCount
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 347,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-form-area",
                                        children: [
                                            config.fields.map((f)=>{
                                                if (f.type === "date") {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "db-field-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "db-field-label",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Calendar, {}, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " ",
                                                                    f.name,
                                                                    " — rango"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "db-date-range",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "db-input",
                                                                        type: "date",
                                                                        title: "Desde",
                                                                        value: dateFilters[f.name]?.desde ?? "",
                                                                        onChange: (e)=>setDateFilters((p)=>({
                                                                                    ...p,
                                                                                    [f.name]: {
                                                                                        ...p[f.name],
                                                                                        desde: e.target.value
                                                                                    }
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "db-date-sep",
                                                                        children: "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "db-input",
                                                                        type: "date",
                                                                        title: "Hasta",
                                                                        value: dateFilters[f.name]?.hasta ?? "",
                                                                        onChange: (e)=>setDateFilters((p)=>({
                                                                                    ...p,
                                                                                    [f.name]: {
                                                                                        ...p[f.name],
                                                                                        hasta: e.target.value
                                                                                    }
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 372,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, f.name, true, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 23
                                                    }, this);
                                                }
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "db-field-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "db-field-label",
                                                            children: f.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "db-input-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-input-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Search, {}, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: "db-input has-icon",
                                                                    type: "text",
                                                                    placeholder: `Filtrar ${f.name}…`,
                                                                    value: filters[f.name] ?? "",
                                                                    onChange: (e)=>setFilters((p)=>({
                                                                                ...p,
                                                                                [f.name]: e.target.value
                                                                            }))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                    lineNumber: 393,
                                                                    columnNumber: 25
                                                                }, this),
                                                                filters[f.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "db-input-clear",
                                                                    onClick: ()=>setFilters((p)=>{
                                                                            const n = {
                                                                                ...p
                                                                            };
                                                                            delete n[f.name];
                                                                            return n;
                                                                        }),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Close, {}, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 409,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, f.name, true, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 21
                                                }, this);
                                            }),
                                            activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "db-btn-ghost",
                                                onClick: ()=>{
                                                    setFilters({});
                                                    setDateFilters({});
                                                },
                                                children: "Limpiar todos los filtros"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            viewMode === "queries" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "joins",
                                    "agrupaciones",
                                    "filtros"
                                ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "db-section-label",
                                                style: {
                                                    textTransform: "uppercase"
                                                },
                                                children: cat === "joins" ? "JOIN / Relaciones" : cat === "agrupaciones" ? "Agrupaciones" : "Filtros especiales"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 433,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "db-context-list",
                                                children: categorized(cat).map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `db-context-item ${activeQuery?.id === q.id ? "active" : ""}`,
                                                        onClick: ()=>{
                                                            setActiveQuery(q);
                                                            setQueryParams({});
                                                            setQueryData([]);
                                                            setQueryRan(false);
                                                            // auto-run if no params needed
                                                            if (q.params.length === 0) runQuery(q, {});
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "db-context-icon",
                                                                children: "▶"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: q.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, q.id, true, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "db-divider"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, cat, true, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 432,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    !sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "db-sidebar-toggle",
                        onClick: ()=>setSidebarOpen(true),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.ChevronRight, {}, void 0, false, {
                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                            lineNumber: 467,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                        lineNumber: 466,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "db-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "db-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-tabs-row",
                                        children: viewMode === "table" ? Object.keys(tables).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `db-tab ${selected === t ? "active" : ""}`,
                                                onClick: ()=>setSelected(t),
                                                children: [
                                                    t,
                                                    selected === t && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "db-tab-close",
                                                        onClick: (e)=>e.stopPropagation(),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Close, {}, void 0, false, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, t, true, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 479,
                                                columnNumber: 19
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "db-tab active",
                                            style: {
                                                cursor: "default"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Query, {}, void 0, false, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this),
                                                activeQuery ? activeQuery.label : "Selecciona una consulta"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 493,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 476,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-header-actions",
                                        children: [
                                            viewMode === "table" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `db-live-dot ${liveIndicator ? "pulse" : ""}`,
                                                        title: "Live sync"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "db-icon-btn",
                                                        onClick: ()=>load(),
                                                        title: "Refresh",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Refresh, {}, void 0, false, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            viewMode === "queries" && activeQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "db-btn-run",
                                                onClick: ()=>runQuery(activeQuery, queryParams),
                                                disabled: queryLoading,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Play, {}, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 19
                                                    }, this),
                                                    queryLoading ? "Ejecutando…" : "Ejecutar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-breadcrumb",
                                children: viewMode === "table" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "app_db"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-bc-sep",
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selected
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this),
                                        activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-bc-filter-badge",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Filter, {}, void 0, false, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                activeFilterCount,
                                                " filtro",
                                                activeFilterCount > 1 ? "s" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 529,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-bc-count",
                                            children: [
                                                data.length,
                                                " docs"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "consultas"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-bc-sep",
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: activeQuery?.category ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-bc-sep",
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 540,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: activeQuery?.id ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 541,
                                            columnNumber: 17
                                        }, this),
                                        queryRan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-bc-count",
                                            children: [
                                                queryData.length,
                                                " rows"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 542,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            viewMode === "table" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-table-wrap",
                                children: loading && data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "db-loading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-spinner"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 551,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Cargando…"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 551,
                                            columnNumber: 76
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                    lineNumber: 551,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "db-table",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "db-th-idx",
                                                        children: "#"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 23
                                                    }, this),
                                                    config.fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "db-th",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-th-type",
                                                                    children: f.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                    lineNumber: 559,
                                                                    columnNumber: 27
                                                                }, this),
                                                                f.name
                                                            ]
                                                        }, f.name, true, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 558,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "db-th-actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 555,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 554,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: config.fields.length + 2,
                                                    className: "db-empty",
                                                    children: "Sin resultados"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 567,
                                                columnNumber: 23
                                            }, this) : data.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "db-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "db-td-idx",
                                                            children: i + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 27
                                                        }, this),
                                                        config.fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "db-td",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `db-val ${typeof row[f.name] === "number" ? "num" : ""}`,
                                                                    children: row[f.name] === null || row[f.name] === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "db-null",
                                                                        children: "null"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 37
                                                                    }, this) : String(row[f.name])
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                    lineNumber: 574,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, f.name, false, {
                                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 29
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "db-td-actions",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "db-action-btn edit",
                                                                    onClick: ()=>openEdit(row),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Edit, {}, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 582,
                                                                        columnNumber: 98
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                    lineNumber: 582,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "db-action-btn del",
                                                                    onClick: ()=>handleDelete(row),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Trash, {}, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 583,
                                                                        columnNumber: 101
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 565,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                    lineNumber: 553,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                lineNumber: 549,
                                columnNumber: 13
                            }, this),
                            viewMode === "queries" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-query-area",
                                children: !activeQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "db-query-empty",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "db-query-empty-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Query, {}, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 599,
                                                columnNumber: 56
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 599,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Selecciona una consulta del panel lateral"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 600,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "db-query-empty-sub",
                                            children: [
                                                catalog.length,
                                                " consultas disponibles — JOINs, agrupaciones y filtros especiales"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 601,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                    lineNumber: 598,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "db-query-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "db-query-desc",
                                                    children: activeQuery.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 21
                                                }, this),
                                                activeQuery.params.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "db-query-params",
                                                    children: [
                                                        activeQuery.params.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "db-field-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "db-field-label",
                                                                        children: p.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 614,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "db-input",
                                                                        type: p.type === "date" ? "date" : "text",
                                                                        value: queryParams[p.name] ?? "",
                                                                        onChange: (e)=>setQueryParams((prev)=>({
                                                                                    ...prev,
                                                                                    [p.name]: e.target.value
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 615,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, p.name, true, {
                                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                lineNumber: 613,
                                                                columnNumber: 27
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "db-btn-primary",
                                                            onClick: ()=>runQuery(activeQuery, queryParams),
                                                            disabled: queryLoading,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Play, {}, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                    lineNumber: 630,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " ",
                                                                queryLoading ? "Ejecutando…" : "Ejecutar consulta"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 608,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "db-table-wrap",
                                            children: queryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "db-loading",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "db-spinner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Ejecutando consulta…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 82
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 639,
                                                columnNumber: 23
                                            }, this) : !queryRan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "db-empty",
                                                style: {
                                                    paddingTop: "40px"
                                                },
                                                children: activeQuery.params.length === 0 ? "Cargando resultados…" : "Completa los parámetros y presiona Ejecutar"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 641,
                                                columnNumber: 23
                                            }, this) : queryData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "db-empty",
                                                children: "La consulta no devolvió resultados"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 647,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "db-table",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "db-th-idx",
                                                                    children: "#"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 29
                                                                }, this),
                                                                queryColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "db-th",
                                                                        children: col
                                                                    }, col, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 654,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 650,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: queryData.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "db-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "db-td-idx",
                                                                        children: i + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                        lineNumber: 661,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    queryColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "db-td",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `db-val ${typeof row[col] === "number" ? "num" : ""}`,
                                                                                children: row[col] === null || row[col] === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "db-null",
                                                                                    children: "null"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                                    lineNumber: 666,
                                                                                    columnNumber: 41
                                                                                }, this) : String(row[col])
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, col, false, {
                                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                            lineNumber: 663,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                                lineNumber: 660,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                lineNumber: 649,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 637,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                lineNumber: 596,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-statusbar",
                                children: viewMode === "table" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selected
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 686,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-bc-sep",
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 687,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                data.length,
                                                " registros"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 688,
                                            columnNumber: 17
                                        }, this),
                                        activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "db-bc-sep",
                                                    children: "·"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "db-filter-active-label",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Filter, {}, void 0, false, {
                                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 98
                                                        }, this),
                                                        " filtros activos"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 57
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-bc-sep",
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 692,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-live-label",
                                            children: "Live sync activo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 693,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Modo consultas"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 697,
                                            columnNumber: 17
                                        }, this),
                                        queryRan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "db-bc-sep",
                                                    children: "·"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        queryData.length,
                                                        " resultados"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 68
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        activeQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "db-bc-sep",
                                                    children: "·"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "db-live-label",
                                                    children: activeQuery.id
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 71
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                lineNumber: 683,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            editRow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-modal-bg",
                onClick: ()=>setEditRow(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "db-modal",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-modal-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Editar registro"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                    lineNumber: 711,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "db-icon-btn",
                                    onClick: ()=>setEditRow(null),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Close, {}, void 0, false, {
                                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                        lineNumber: 712,
                                        columnNumber: 80
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                    lineNumber: 712,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                            lineNumber: 710,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-modal-body",
                            children: config.fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "db-field-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "db-field-label",
                                            children: f.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 717,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "db-input",
                                            type: f.type === "number" ? "number" : f.type === "date" ? "date" : "text",
                                            value: editData[f.name] ?? "",
                                            onChange: (e)=>setEditData((p)=>({
                                                        ...p,
                                                        [f.name]: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 718,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, f.name, true, {
                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                    lineNumber: 716,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                            lineNumber: 714,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-modal-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "db-btn-ghost",
                                    onClick: ()=>setEditRow(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                    lineNumber: 728,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "db-btn-primary",
                                    onClick: handleUpdate,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Check, {}, void 0, false, {
                                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                            lineNumber: 730,
                                            columnNumber: 17
                                        }, this),
                                        " Guardar cambios"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                                    lineNumber: 729,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                            lineNumber: 727,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                    lineNumber: 709,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 708,
                columnNumber: 9
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `db-toast ${toast.type}`,
                children: [
                    toast.type === "ok" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon.Check, {}, void 0, false, {
                        fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                        lineNumber: 740,
                        columnNumber: 34
                    }, this) : "✕",
                    " ",
                    toast.msg
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/ui/ClientDashboard.tsx",
                lineNumber: 739,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(ClientDashboard, "U6FlYrUxBjfGzqAfMlLLr/r+Jjs=");
_c = ClientDashboard;
/* ─────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────── */ const CSS = `
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
var _c;
__turbopack_context__.k.register(_c, "ClientDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_dashboard_ui_ClientDashboard_tsx_8eec5749._.js.map