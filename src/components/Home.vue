<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>主页</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            :default-active="$route.path"
            router
        >
          <el-menu-item index="/page1">典型表单</el-menu-item>
          <el-menu-item index="/page2">基础表格</el-menu-item>
        </el-menu>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- router-view 确定视图的位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page1 from "@/pages/Page1.vue";
import Page2 from "@/pages/Page2.vue";

export default {
  name: "Home",
  components: {Page1, Page2},
}
</script>

