//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import Page1 from "@/pages/Page1.vue";
import Page2 from "@/pages/Page2.vue";

//创建并默认暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/page1',
            component: Page1
        },
        {
            path: '/page2',
            component: Page2
        }
    ]
});
