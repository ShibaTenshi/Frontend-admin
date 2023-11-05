import { H as Head } from './components-72d49c30.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './FormGroup-57c80e67.mjs';
import { _ as __nuxt_component_1 } from './Input-55cd4d73.mjs';
import { _ as __nuxt_component_0 } from './Button-2160abdc.mjs';
import { defineComponent, ref, withAsyncContext, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { n as navigateTo, a as useRuntimeConfig } from '../server.mjs';
import { u as useFetch } from './fetch-f5f2f602.mjs';
import { u as useCookie } from './cookie-19dfed9d.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-ec990a7c.mjs';
import { z } from 'zod';
import { i as isTokenValidate } from './tokenValidate-dec97d49.mjs';
import '@vueuse/core';
import 'tailwind-merge';
import './nuxt-link-fbfe6d9d.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const error = ref("");
    const runtime = /* @__PURE__ */ useRuntimeConfig();
    if ([__temp, __restore] = withAsyncContext(() => isTokenValidate()), __temp = await __temp, __restore(), __temp) {
      navigateTo("/");
    }
    const schema = z.object({
      username: z.string().min(5, "Invalid username"),
      password: z.string().min(5, "Must be at least 8 characters")
    });
    const state = ref({
      username: void 0,
      password: void 0
    });
    async function submit(event) {
      const { data: responseData } = await useFetch(runtime.public.API_URL + "/auth/login/admin", {
        method: "post",
        body: {
          username: event.data.username,
          password: event.data.password
        }
      }, "$4Q7McJQDXG");
      let respond = responseData.value;
      if (respond.startsWith("Error")) {
        error.value = respond.slice(7).toUpperCase();
      } else {
        const token = useCookie("token");
        token.value = respond;
        navigateTo("/");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_UForm = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_3;
      const _component_UInput = __nuxt_component_1;
      const _component_UButton = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Login - Shibaqueue Admin</title>`);
          } else {
            return [
              createVNode("title", null, "Login - Shibaqueue Admin")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-80 mx-auto my-[10%]"><img${ssrRenderAttr("src", _imports_0)} alt="" class="mx-auto w-[100px]"><br><h1 class="font-bold text-center">ShibaQueue Administration</h1><br>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: state.value,
        onSubmit: submit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Username",
              name: "username"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: state.value.username,
                    "onUpdate:modelValue": ($event) => state.value.username = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: state.value.username,
                      "onUpdate:modelValue": ($event) => state.value.username = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Password",
              name: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: state.value.password,
                    "onUpdate:modelValue": ($event) => state.value.password = $event,
                    type: "password"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: state.value.password,
                      "onUpdate:modelValue": ($event) => state.value.password = $event,
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br${_scopeId}><h1 class="text-red-500 text-sm text-center"${_scopeId}>${ssrInterpolate(error.value)}</h1><br${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              block: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Submit `);
                } else {
                  return [
                    createTextVNode(" Submit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "Username",
                name: "username"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: state.value.username,
                    "onUpdate:modelValue": ($event) => state.value.username = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode("br"),
              createVNode(_component_UFormGroup, {
                label: "Password",
                name: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: state.value.password,
                    "onUpdate:modelValue": ($event) => state.value.password = $event,
                    type: "password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode("br"),
              createVNode("h1", { class: "text-red-500 text-sm text-center" }, toDisplayString(error.value), 1),
              createVNode("br"),
              createVNode(_component_UButton, {
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" Submit ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-861575ab.mjs.map
