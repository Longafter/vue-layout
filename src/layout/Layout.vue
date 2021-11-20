<template>
  <div class="main-layout">
    <el-container>
      <!--侧边栏-->
      <el-aside width="210px">
        <!-- 菜单 -->
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          :router="true"
        >
          <el-submenu
            v-for="item in routes"
            :key="item.path"
            :index="item.path"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              class="menuItem"
              v-for="element in item.children"
              :key="element.path"
              :index="element.path"
              @click="clickMenuItem"
            >
              <i class="el-icon-location"></i>
              <span>{{ element.name }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {};
  },
  computed: {
    // 获取路由
    routes() {
      return this.$router.options.routes;
    }
  },
  methods: {
    clickMenuItem() {
      console.warn('router >>>', this.$router.options.routes);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.el-container {
  height: 100vh;
}

.el-aside {
  background-color: $sideBarBg;
  color: #333;

  .el-menu {
    border-right: none;
  }
}

.el-header {
  background-color: $headerBg;
  color: #333;
}

.el-main {
  background-color: $mainBg;
  color: #333;
}
</style>
