import API from './api';
import request from '../../Configs/request';
import axios from 'axios';

const qs = require('qs')
interface ApiResponse {
    Data?: any;
    Message: string;
    Code: number;
    loading: boolean;
}



class DriverService {


    public async GenerateUserLogin(): Promise<any> {
        try {

            await axios.get(API.GetAvailableDrivers + "?UserName=asdfsd" + "&Password=jbjb")
                .then(response => {
                    if (response.status == 200) {
                        return {
                            Data: response.data,
                            Message: response.statusText,
                            Code: response.status,
                            loading: false
                        }
                    }
                })
                .catch(err => {
                    return err
                });

        }
        catch (error) {
            return error;
        }
    }


    public async GetProgramDetail(): Promise<any> {
        try {

            await axios.get(API.GetProgramDetail + "?Id=2")
                .then(response => {
                    if (response.status == 200) {
                        return {
                            Data: response.data,
                            Message: response.statusText,
                            Code: response.status,
                            loading: false
                        }
                    }
                })
                .catch(err => {
                    return err
                });

        }
        catch (error) {
            return error;
        }
    }
}
export default new DriverService();