import API from './api/api';
import request from './../../request';
const qs = require('qs');


interface ApiResponse {
    Data?: any;
    Message: string;
    Code: number;
    loading: boolean;
}

interface ISEO {
    MetaTitle: string,
    MetaKeyWords: string,
    Image: string,
    MetaDescription: string
}
class SEOService {

    public async GetSEOMetaData(pageName: string, type: string, productId: number): Promise<ApiResponse> {

        try {
            
            const res = await (await request()).get(API.GetSEO+"?url="+pageName +"&type="+type);        
            const response = await res.data; 
            return {
                Data: response.Data,
                Message: response.Message,
                Code: response.Code,
                loading: false
            }
        }
        catch (error) {
            return {
                Message: '',
                Code: 400,
                Data: null,
                loading: true
            }
        }
       
    }
  
}


export default new SEOService();