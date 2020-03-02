<template>
  <div class="uni-switch">
    <div class="wrapper">
      <span :class="{ closed: !value }">{{ !value ? "关" : "开" }}</span>
      <input type="checkbox" @change="handleChange" v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZlhSwitch",
  data() {
    return {
      value: false
    };
  },
  props: {},
  computed: {},
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style>
.closed {
  color: red;
}
</style>
