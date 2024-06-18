import { User } from "../../../domain/models/User";
import apiCall from "../../../shared/axios/apiCall"

export interface loginReq {
    email:string,
    password:string,
}

export interface AuthRes {
    user:User
    data:string,
    token: string
}

export const loginService = async (data: loginReq): Promise<AuthRes> => {
    try {
        const response = await apiCall.post<AuthRes>('/login', data);
        const responseData = response.data;
        return responseData;
    } catch (error:any) {
        // Manejar errores específicos de autenticación
        if (error.response && error.response.status === 401) {
            throw new Error('Incorrect email or password');
        } else {
            console.error(error);
            throw error;
        }
    }
};
  