import axios, {AxiosResponse} from "axios";

export const RequestAPI = {
    getSuccess(success: boolean) {
        return axios.post<{ success: boolean }, AxiosResponse<ResponseType>>(`https://neko-cafe-back.herokuapp.com/auth/test`, {"success": success})
            .then(res => res)
            .catch(err => err.response)
    }
}

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}