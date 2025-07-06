<script setup lang="ts">
  import type { NavigationMenuItem } from "@nuxt/ui";

  const items = ref<NavigationMenuItem[][]>([
    [
      {
        label: "Dashboard",
        class: "px-6 py-4 cursor-pointer rounded-md hover:bg-gray-200",
        icon: "mynaui:chart-pie-solid",
        to: "/dashboard",
        badge: 10,
      },
      {
        label: "Assets",
        class: "px-6 py-4 cursor-pointer rounded-md hover:bg-gray-200",
        icon: "mynaui:layers-three-solid",
        to: "/assets",
      },
      {
        label: "Transactions",
        class: "px-6 py-4 cursor-pointer rounded-md hover:bg-gray-200",
        icon: "mynaui:arrow-diagonal-one-solid",
        to: "/transactions",
      },
      {
        label: "Funds List",
        class: "px-6 py-4 cursor-pointer rounded-md hover:bg-gray-200",
        icon: "mynaui:swatches-solid",
        to: "/funds-list",
      },
    ],
  ]);
</script>

<template>
  <div class="flex flex-col h-full relative">
    <section>
      <div class="p-6">
        <div class="flex items-center space-x-2">
          <div
            class="w-8 h-8 bg-black rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold text-sm">FT</span>
          </div>
          <span class="font-semibold text-lg">Fmarket Tracking</span>
        </div>
      </div>
      <USeparator />

      <UNavigationMenu
        orientation="vertical"
        :items="items"
        tooltip
        class="p-2"
        highlight-color="primary"
        color="primary"
      />
    </section>
  </div>
</template>
