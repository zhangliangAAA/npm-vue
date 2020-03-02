import ZlhSwitch from "./packages/switch";
import ZlhList from "./packages/list";

const components = [ZlhSwitch,ZlhList];

const install = function(Vue, opts = {}) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ZlhSwitch,
  ZlhList
};
