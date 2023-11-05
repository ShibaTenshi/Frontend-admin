import { _ as __nuxt_component_0$1 } from './Button-2160abdc.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-ec990a7c.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-fbfe6d9d.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'tailwind-merge';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UButton = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white py-3 opacity-90 fixed top-0 w-full z-10 flex justify-start items-center border-2 border-b-gray-200" }, _attrs))}><div class="flex justify-center items-center px-3"><img class="w-[50px] h-[50px]"${ssrRenderAttr("src", _imports_0)} alt=""><h1 class="font-bold mx-3 text-xl">ShibaQueue</h1></div><div class="px-3">`);
  _push(ssrRenderComponent(_component_UButton, {
    color: "orange",
    variant: "outline",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="px-3">`);
  _push(ssrRenderComponent(_component_UButton, {
    color: "orange",
    variant: "outline",
    to: "/restaurant/list"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Restaurant Request`);
      } else {
        return [
          createTextVNode("Restaurant Request")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="px-3">`);
  _push(ssrRenderComponent(_component_UButton, {
    color: "red",
    variant: "outline",
    to: "/logout"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Logout`);
      } else {
        return [
          createTextVNode("Logout")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-03e25cc4.mjs.map
