import { a as useRuntimeConfig } from '../server.mjs';
import { u as useFetch } from './fetch-f5f2f602.mjs';
import { u as useCookie } from './cookie-19dfed9d.mjs';

async function isTokenValidate() {
  const tokenRef = useCookie("token");
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const { data: responseData } = await useFetch(runtimeConfig.public.API_URL + "/token", {
    method: "get",
    params: {
      token: tokenRef.value
    }
  }, "$NEInFCuAFa");
  let respond = responseData.value;
  if (respond == "")
    return true;
  return respond == "";
}

export { isTokenValidate as i };
//# sourceMappingURL=tokenValidate-dec97d49.mjs.map
