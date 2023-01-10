// import { ApiEndPoints } from '../../Configs/store/apiconfig';

let API = {};
const BaseUrl="https://localhost:7242/api";
export default API = {
    GetAvailableDrivers:BaseUrl+"/Auth/Login",
    GetProgramDetail:BaseUrl+"/Program/detail"
}