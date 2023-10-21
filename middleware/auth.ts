import {isTokenValidate} from "~/composables/tokenValidate";

export default defineNuxtRouteMiddleware(async (to,from) => {
    if (!await isTokenValidate()){
        return navigateTo('/login')
    }
})