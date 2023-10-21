import {isTokenValidate} from "~/composables/tokenValidate";

export default defineNuxtRouteMiddleware(() => {

    if (!isTokenValidate()) {
      return navigateTo('/login')
    }
})