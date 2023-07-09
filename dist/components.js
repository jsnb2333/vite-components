import { ref as _, openBlock as s, createElementBlock as r, toDisplayString as a } from "vue";
const u = (c, t) => {
  const e = c.__vccOpts || c;
  for (const [o, n] of t)
    e[o] = n;
  return e;
}, l = {
  __name: "Test",
  setup(c) {
    const t = _(1);
    function e() {
      t.value++;
    }
    return (o, n) => (s(), r("button", {
      class: "but-color",
      onClick: e
    }, "test" + a(t.value), 1));
  }
}, d = /* @__PURE__ */ u(l, [["__scopeId", "data-v-cf8ce6db"]]);
export {
  d as Test
};
