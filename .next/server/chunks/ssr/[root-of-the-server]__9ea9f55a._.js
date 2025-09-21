module.exports = [
"[project]/screens/users/components/Header/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Header"
    }, void 0, false, {
        fileName: "[project]/screens/users/components/Header/Header.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/screens/users/components/MainContent/MainContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContent",
    ()=>MainContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const MainContent = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "MainContent"
    }, void 0, false, {
        fileName: "[project]/screens/users/components/MainContent/MainContent.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/services/growthbook/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/services/growthbook/useFeatureFlags.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFeatureFlags",
    ()=>useFeatureFlags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$growthbook$2f$growthbook$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@growthbook/growthbook-react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$growthbook$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/growthbook/types.ts [app-ssr] (ecmascript)");
;
;
;
const useFeatureFlags = ()=>{
    const isEnableTestingFlag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$growthbook$2f$growthbook$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFeatureValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$growthbook$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeatureFlags"].TESTING_FIRST_KEY_FLAG, false);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isEnableTestingFlag
        }), [
        isEnableTestingFlag
    ]);
}; // NOTAS BASICAS DE EJEMPLO:
 // para definir la clave de la feature flag ponerla en ./types.ts
 // const isEnableTestingFlag = useFeatureValue(FeatureFlags.KEY, "defaultValue");
 // para usar el hook en un componente
 // const { isEnableTestingFlag } = useFeatureFlags();
}),
"[project]/services/api/users/usersKeyFactory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usersKeyFactory",
    ()=>usersKeyFactory
]);
const usersKeyFactory = {
    all: ()=>[
            "all"
        ],
    getUserByUserId: ({ userId })=>[
            ...usersKeyFactory.all(),
            "users",
            userId
        ]
};
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/services/domain/client/clientFactory/axiosClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "axiosClient",
    ()=>axiosClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// Axios instance with custom response interceptor
const axiosClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    headers: {
        "Content-Type": "application/json"
    }
});
function dataResolverInterceptor(response) {
    return response.data;
}
axiosClient.interceptors.response.use(dataResolverInterceptor);
;
}),
"[project]/services/domain/client/clientFactory/clientFactory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/domain/client/clientFactory/axiosClient.ts [app-ssr] (ecmascript)");
;
function resolveBaseUrl(apiEndpoint, apiVersion) {
    const base = apiEndpoint ?? (process.env.NEXT_PUBLIC_API_BASEURL || "");
    const version = apiVersion ? `/${apiVersion}` : "";
    return `${base}${version}`;
}
async function getCall(url, apiEndpoint, apiVersion) {
    const fullUrl = `${resolveBaseUrl(apiEndpoint, apiVersion)}${url}`;
    const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosClient"].get(fullUrl);
    return resp;
}
async function postCall(url, data, apiEndpoint, apiVersion) {
    const fullUrl = `${resolveBaseUrl(apiEndpoint, apiVersion)}${url}`;
    const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosClient"].post(fullUrl, data);
    return resp;
}
async function putCall(url, data, apiEndpoint, apiVersion) {
    const fullUrl = `${resolveBaseUrl(apiEndpoint, apiVersion)}${url}`;
    const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosClient"].put(fullUrl, data);
    return resp;
}
async function deleteCall(url, apiEndpoint, apiVersion) {
    const fullUrl = `${resolveBaseUrl(apiEndpoint, apiVersion)}${url}`;
    const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$axiosClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosClient"].delete(fullUrl);
    return resp;
} /* EN CASO DE QUERER AÑADIR DECORATORS SE HARIA A ESTE NIVEL POR EJEMPLO: 

axiosClient.get<R, R, D>(fullUrl) ---> axiosClient.get<R, R, D>(fullUrl, withLocaleHeaders(config))


*/ 
}),
"[project]/services/domain/client/users.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserByUserId",
    ()=>getUserByUserId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$clientFactory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/domain/client/clientFactory/clientFactory.ts [app-ssr] (ecmascript)");
;
function getUserByUserId({ userId }) {
    const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$clientFactory$2f$clientFactory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCall"])(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response;
}
}),
"[project]/services/api/users/useGetUserById.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetUserById",
    ()=>useGetUserById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$usersKeyFactory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/users/usersKeyFactory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/domain/client/users.ts [app-ssr] (ecmascript)");
;
;
;
const useGetUserById = ({ userId })=>{
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        enabled: Boolean(userId),
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$usersKeyFactory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usersKeyFactory"].getUserByUserId({
            userId
        }),
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$domain$2f$client$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserByUserId"])({
                userId
            })
    });
    return query;
};
;
}),
"[project]/services/api/users/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$usersKeyFactory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/users/usersKeyFactory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$useGetUserById$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/users/useGetUserById.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/screens/users/Users.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>Users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$screens$2f$users$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/screens/users/components/Header/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$screens$2f$users$2f$components$2f$MainContent$2f$MainContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/screens/users/components/MainContent/MainContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$growthbook$2f$useFeatureFlags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/growthbook/useFeatureFlags.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/services/api/users/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$useGetUserById$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/users/useGetUserById.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const Users = ()=>{
    const { isEnableTestingFlag } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$growthbook$2f$useFeatureFlags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFeatureFlags"])();
    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$users$2f$useGetUserById$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetUserById"])({
        userId: "1"
    });
    console.log("USER DATA", userData);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$screens$2f$users$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/screens/users/Users.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$screens$2f$users$2f$components$2f$MainContent$2f$MainContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContent"], {}, void 0, false, {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9ea9f55a._.js.map