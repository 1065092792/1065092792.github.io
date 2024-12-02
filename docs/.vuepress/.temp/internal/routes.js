export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/admin/Desktop/my-tools-md/my-tools-document/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"函数文档"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/admin/Desktop/my-tools-md/my-tools-document/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/admin/Desktop/my-tools-md/my-tools-document/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
