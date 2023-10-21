import {emojiSequenceWithComponentsToString} from "@iconify/utils/lib/emoji/test/components";

export async function isTokenValidate() {
    const tokenRef = useCookie("token");

    const {data: responseData} = await useFetch('http://10.147.17.253:5041/token', {
        method: 'get',
        params: {
            token: tokenRef.value
        }
    })

    let respond = <string>responseData.value;
    if (respond == "") return true;
    return respond == "";

}