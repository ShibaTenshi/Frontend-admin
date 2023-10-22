import {emojiSequenceWithComponentsToString} from "@iconify/utils/lib/emoji/test/components";

export async function isTokenValidate() {
    const tokenRef = useCookie("token");
    const runtimeConfig = useRuntimeConfig();

    const {data: responseData} = await useFetch(runtimeConfig.public.API_URL + '/token', {
        method: 'get',
        params: {
            token: tokenRef.value
        }
    })

    let respond = <string>responseData.value;
    if (respond == "") return true;
    return respond == "";
}