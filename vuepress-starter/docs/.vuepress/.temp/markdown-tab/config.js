import { CodeTabs } from "/Users/hanhanwenbo/Desktop/my-tools-document/my-tools-document/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/hanhanwenbo/Desktop/my-tools-document/my-tools-document/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/hanhanwenbo/Desktop/my-tools-document/my-tools-document/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
