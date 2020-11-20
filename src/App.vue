<template>
  <div id="app">
    <button @click="toggle">Toggle grid</button>
    <v-grid
      v-if="grid === 1"
      key="1"
      theme="compact"
      :source="rows"
      :columns="columns"
    ></v-grid>
    <v-grid
      v-if="grid === 2"
      key="2"
      theme="compact"
      :source="rows2"
      :columns="columns"
    ></v-grid>
  </div>
</template>

<script>
import VGrid from "@revolist/vue-datagrid";
export default {
  name: "App",
  data() {
    return {
      grid: 1,
      columns: [
        {
          prop: "name",
          name: "primero",
          editor: 'select',
        },
        {
          prop: "details",
          name: "Segundo",
          editor: 'select',
        },
        {
          prop: "details",
          name: "tercero",
        },
        {
          prop: "details",
          name: "cuarto",
        },
        {
          prop: "details",
          name: "quinto",
        },
        {
          prop: "details",
          name: "sexto",
        },
      ],
      rows: [
        {
          name: "1",
          details: "Item 1",
        },
        {
          name: "1",
          details: "Item 4",
        },
        {
          name: "4",
          details: "Item 4",
        },
        {
          name: "4",
          details: "Item 4",
        },
        {
          name: "4",
          details: "Item 4",
        },
        {
          name: "4",
          details: "Item 4",
        },
        {
          name: "1",
          details: "Item 1",
        },
        {
          name: "1",
          details: "Item 4",
        },
        {
          name: "4",
          details: "Item 4",
        },
        {
          name: "4",
          details: "Item 4",
        },
        {
          name: "4",
          details: "Item 4",
        },
        {
          name: "4",
          details: "Item 4",
        },
      ],
      rows2: [
        {
          name: "2",
          details: "Item 2",
        },
        {
          name: "3",
          details: "Item 3",
        },
      ],
    };
  },
  components: {
    VGrid,
  },
  methods: {
    toggle() {
      this.grid = this.grid === 1 ? 2 : 1;
    },
  },
};
</script>

<style>
#app {
  height: 800px;
  width: 1000px;
}
revo-grid {
  height: 50%;
}
</style>