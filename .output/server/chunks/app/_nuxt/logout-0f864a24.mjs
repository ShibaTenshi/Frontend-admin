import { defineComponent, useSSRContext } from 'vue';
import { n as navigateTo } from '../server.mjs';
import { u as useCookie } from './cookie-19dfed9d.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "logout",
  setup(__props) {
    const tokenRef = useCookie("token");
    tokenRef.value = "";
    navigateTo("login");
    return () => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/logout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=logout-0f864a24.mjs.map
