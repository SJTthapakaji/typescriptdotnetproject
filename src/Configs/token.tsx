import axios from "axios";
import jwt_decode from "jwt-decode";

interface ApiResponse {
    access_token?: string;
}

export default class TokenManager {
    public async GetToken(): Promise<ApiResponse> {
        try {
         
            const res = await axios.get(`/t/g`);
            // console.log("getToken", res);
            const response = await res.data;
            localStorage.setItem("token", JSON.stringify(response));
            return {
                access_token: response.access_token,
            };
        } catch (error) {
            throw error;
        }
    }
}

export async function getToken(): Promise<string> {
    let token =
        localStorage.getItem("token") ;
    const tokenManager = new TokenManager();
    if (token == null || token == "" || token == undefined) {
        //first case
        var a = await tokenManager.GetToken();
        return '';
    } else {
        let decodedToken:any = jwt_decode(token);
        if (Date.now() >= decodedToken.exp * 1000) {
            var a = await tokenManager.GetToken();
            return '';
        } else {
            return token;
        }
    }
}


export function setToken(token: string) {
    return localStorage.setItem("token", token);
}

export function isTokenExpired(token: string) {}
