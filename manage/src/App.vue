<script setup>
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside class="aside"><Aside></Aside></el-aside>
      <el-container>
        <el-header class="header"><Header></Header></el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.container {
  background-color: #f3f4f7;
}

.aside {
  width: 200px;
  height: 100vh;
  background-color: #fff;
}

.header {
  height: 60px;
  background-color: #fff;
}

.main {
  margin: 20px;
  background-color: #fff;
}
</style>
