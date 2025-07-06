<script lang="ts" setup></script>

<template>
  <div class="flex">
    <div class="min-w-64 overflow-y-auto h-screen">
      <LeftSidebar />
    </div>
    <div class="w-full p-4 bg-gray-50">
      <slot>Content is not available.</slot>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
