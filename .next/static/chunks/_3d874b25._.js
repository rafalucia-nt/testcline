(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/screens/users/components/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Header"
    }, void 0, false, {
        fileName: "[project]/screens/users/components/Header/Header.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/screens/users/components/MainContent/MainContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContent",
    ()=>MainContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const MainContent = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "MainContent"
    }, void 0, false, {
        fileName: "[project]/screens/users/components/MainContent/MainContent.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MainContent;
var _c;
__turbopack_context__.k.register(_c, "MainContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/growthbook/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureFlags",
    ()=>FeatureFlags
]);
var FeatureFlags = /*#__PURE__*/ function(FeatureFlags) {
    FeatureFlags["TESTING_FIRST_KEY_FLAG"] = "exampleFlag";
    return FeatureFlags;
}({})//https://iop-pro-growthbkwb-swdevelop-private-global.apps.aks01-pro.azure.ecommerce.inditex.grp/features  -- acceso a la lista de features
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/growthbook/useFeatureFlags.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFeatureFlags",
    ()=>useFeatureFlags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$growthbook$2f$growthbook$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@growthbook/growthbook-react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$growthbook$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/growthbook/types.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useFeatureFlags = ()=>{
    _s();
    const isEnableTestingFlag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$growthbook$2f$growthbook$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFeatureValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$growthbook$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureFlags"].TESTING_FIRST_KEY_FLAG, false);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFeatureFlags.useMemo": ()=>({
                isEnableTestingFlag
            })
    }["useFeatureFlags.useMemo"], [
        isEnableTestingFlag
    ]);
}; // NOTAS BASICAS DE EJEMPLO:
 // para definir la clave de la feature flag ponerla en ./types.ts
 // const isEnableTestingFlag = useFeatureValue(FeatureFlags.KEY, "defaultValue");
 // para usar el hook en un componente
 // const { isEnableTestingFlag } = useFeatureFlags();
_s(useFeatureFlags, "A2WM67kFNpPOrxdH75ow6gbTAmw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$growthbook$2f$growthbook$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFeatureValue"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/api/users/usersKeyFactory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usersKeyFactory",
    ()=>usersKeyFactory
]);
const usersKeyFactory = {
    all: ()=>[
            "all"
        ],
    getUserByUserId: (param)=>{
        let { userId } = param;
        return [
            ...usersKeyFactory.all(),
            "users",
            userId
        ];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/domain/client/clientFactory/axiosClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "axiosClient",
    ()=>axiosClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Axios instance with custom response interceptor
const axiosClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    headers: {
        "Content-Type": "application/json"
    }
});
function dataResolverInterceptor(response) {
    return response.data;
}
axiosClient.interceptors.response.use(dataResolverInterceptor);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/domain/client/clientFactory/clientFactory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCall",
    ()=>deleteCall,
    "getCall",
    ()=>getCall,
    "postCall",
    ()=>postCall,
    "putCall",
    ()=>putCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/domain/client/clientFactory/axiosClient.ts [app-client] (ecmascript)");
;
function resolveBaseUrl(apiEndpoint, apiVersion) {
    const base = apiEndpoint !== null && apiEndpoint !== void 0 ? apiEndpoint : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASEURL || "";
    const version = apiVersion ? "/".concat(apiVersion) : "";
    return "".concat(base).concat(version);
}
async function getCall(url, apiEndpoint, apiVersion) {
    const fullUrl = "".concat(resolveBaseUrl(apiEndpoint, apiVersion)).concat(url);
    const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosClient"].get(fullUrl);
    return resp;
}
async function postCall(url, data, apiEndpoint, apiVersion) {
    const fullUrl = "".concat(resolveBaseUrl(apiEndpoint, apiVersion)).concat(url);
    const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosClient"].post(fullUrl, data);
    return resp;
}
async function putCall(url, data, apiEndpoint, apiVersion) {
    const fullUrl = "".concat(resolveBaseUrl(apiEndpoint, apiVersion)).concat(url);
    const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosClient"].put(fullUrl, data);
    return resp;
}
async function deleteCall(url, apiEndpoint, apiVersion) {
    const fullUrl = "".concat(resolveBaseUrl(apiEndpoint, apiVersion)).concat(url);
    const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosClient"].delete(fullUrl);
    return resp;
} /* EN CASO DE QUERER AÑADIR DECORATORS SE HARIA A ESTE NIVEL POR EJEMPLO: 

axiosClient.get<R, R, D>(fullUrl) ---> axiosClient.get<R, R, D>(fullUrl, withLocaleHeaders(config))


*/ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/domain/client/users.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserByUserId",
    ()=>getUserByUserId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$clientFactory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/domain/client/clientFactory/clientFactory.ts [app-client] (ecmascript)");
;
function getUserByUserId(param) {
    let { userId } = param;
    const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$clientFactory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCall"])("https://jsonplaceholder.typicode.com/users/".concat(userId));
    return response;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/api/users/useGetUserById.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetUserById",
    ()=>useGetUserById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$usersKeyFactory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/users/usersKeyFactory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/domain/client/users.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useGetUserById = (param)=>{
    let { userId } = param;
    _s();
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        enabled: Boolean(userId),
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$usersKeyFactory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersKeyFactory"].getUserByUserId({
            userId
        }),
        queryFn: {
            "useGetUserById.useQuery[query]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserByUserId"])({
                    userId
                })
        }["useGetUserById.useQuery[query]"]
    });
    return query;
};
_s(useGetUserById, "c7fxJWDO4uMGjIdKMJSj1aiS9wg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/api/users/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$usersKeyFactory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/users/usersKeyFactory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$useGetUserById$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/users/useGetUserById.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/screens/users/Users.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>Users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$screens$2f$users$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/screens/users/components/Header/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$screens$2f$users$2f$components$2f$MainContent$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/screens/users/components/MainContent/MainContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$growthbook$2f$useFeatureFlags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/growthbook/useFeatureFlags.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/services/api/users/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$useGetUserById$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/users/useGetUserById.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Users = ()=>{
    _s();
    const { isEnableTestingFlag } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$growthbook$2f$useFeatureFlags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeatureFlags"])();
    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$useGetUserById$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserById"])({
        userId: "1"
    });
    console.log("USER DATA", userData);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$screens$2f$users$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/screens/users/Users.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$screens$2f$users$2f$components$2f$MainContent$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainContent"], {}, void 0, false, {
                fileName: "[project]/screens/users/Users.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isEnableTestingFlag && "example flag working"
        ]
    }, void 0, true, {
        fileName: "[project]/screens/users/Users.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Users, "ATi09qyYhVMgpJPdmdyxjCjuu5w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$growthbook$2f$useFeatureFlags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeatureFlags"],
        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$useGetUserById$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUserById"]
    ];
});
_c = Users;
var _c;
__turbopack_context__.k.register(_c, "Users");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3d874b25._.js.map