<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style lang="less">
  [class^="el-icon-fa"], [class*=" el-icon-fa"] {
    font-family: "FontAwesome" !important;
    display: inline-block;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @import url("../node_modules/font-awesome/less/font-awesome");
  @fa-css-prefix: el-icon-fa;
  @import url("../node_modules/element-ui/lib/theme-chalk/index.css");
</style>
