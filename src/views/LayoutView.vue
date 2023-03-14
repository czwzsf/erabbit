<template>
  <div>
    <!--    顶部通栏-->
    <nav></nav>
    <!--    头部组件-->
    <header></header>
    <!--    内容容器-->
    <div class="main">
      <div class="app-body">
        <!-- 二级路由 -->
        <RouterView />
      </div>
    </div>
    <!--    底部组件-->
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: "LayoutView",
};
</script>
<script setup>
// 定义组件名称
</script>

<style scoped></style>
