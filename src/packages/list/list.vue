<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "ZlhList",
  props: {
    items: Array
  }
};
</script>

<style scoped>
ul {
  background-color: pink;
  padding-top: 10px;
  padding-bottom: 1px;
}
ul li {
  list-style: decimal;
  background-color: orange;
  margin-bottom: 10px;
  display: block;
}
</style>
