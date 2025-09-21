(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/services/growthbook/growthbook-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$growthbook$2f$growthbook$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@growthbook/growthbook-react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$growthbook$2f$growthbook$2f$dist$2f$esm$2f$GrowthBook$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@growthbook/growthbook/dist/esm/GrowthBook.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const GrowthbookProvider = (param)=>{
    let { children } = param;
    _s();
    // Lee variables públicas de Next
    const apiHost = ("TURBOPACK compile-time value", "https://cdn.growthbook.io");
    const clientKey = ("TURBOPACK compile-time value", "sdk-Xq7XyXeYha2HSWAb");
    const decryptionKey = ("TURBOPACK compile-time value", "") || undefined;
    const enableDevMode = ("TURBOPACK compile-time value", "true") === 'true' && ("TURBOPACK compile-time value", "local") !== 'production';
    const growthbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GrowthbookProvider.useMemo[growthbook]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$growthbook$2f$growthbook$2f$dist$2f$esm$2f$GrowthBook$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrowthBook"]({
                apiHost,
                clientKey,
                decryptionKey,
                enableDevMode
            })
    }["GrowthbookProvider.useMemo[growthbook]"], [
        apiHost,
        clientKey,
        decryptionKey,
        enableDevMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GrowthbookProvider.useEffect": ()=>{
            // Load features asynchronously when the app renders
            growthbook.init({
                streaming: true
            });
        }
    }["GrowthbookProvider.useEffect"], [
        growthbook
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GrowthbookProvider.useEffect": ()=>{
            // Atributos que sirven para filtrar las flags creadas si queremos poner reglas personalizadas SDK -> Attributes
            growthbook.setAttributes({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["GrowthbookProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$growthbook$2f$growthbook$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GrowthBookProvider"], {
        growthbook: growthbook,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/services/growthbook/growthbook-provider.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GrowthbookProvider, "igUH4vpYBHtxXbTvLdxcKnK8g2o=");
_c = GrowthbookProvider;
const __TURBOPACK__default__export__ = GrowthbookProvider;
var _c;
__turbopack_context__.k.register(_c, "GrowthbookProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_services_growthbook_growthbook-provider_tsx_947bb7c8._.js.map