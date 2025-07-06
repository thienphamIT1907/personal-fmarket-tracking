<script lang="ts" setup>
  import { AgGridVue } from "ag-grid-vue3";

  const rowData = ref([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const colDefs = ref([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);
</script>

<template>
  <AgGridVue
    :row-data="rowData"
    :column-defs="colDefs"
    style="height: 500px"
    :auto-size-strategy="{
      type: 'fitGridWidth',
    }"
  />
</template>

<style lang="css" scoped></style>
