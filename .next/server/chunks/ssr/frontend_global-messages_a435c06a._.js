module.exports = [
"[project]/frontend/global-messages/en.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/frontend_global-messages_en_json_a81b4d08._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/frontend/global-messages/en.json (json)");
    });
});
}),
"[project]/frontend/global-messages/es.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/frontend_global-messages_es_json_b7fd76b3._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/frontend/global-messages/es.json (json)");
    });
});
}),
];