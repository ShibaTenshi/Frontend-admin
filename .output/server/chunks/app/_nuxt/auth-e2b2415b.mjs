import { d as defineNuxtRouteMiddleware, e as executeAsync, n as navigateTo } from '../server.mjs';
import { i as isTokenValidate } from './tokenValidate-dec97d49.mjs';
import 'vue';
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
import './fetch-f5f2f602.mjs';
import './cookie-19dfed9d.mjs';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!([__temp, __restore] = executeAsync(() => isTokenValidate()), __temp = await __temp, __restore(), __temp)) {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-e2b2415b.mjs.map
