<script setup>
import { ref, reactive } from "vue";
</script>

<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>
