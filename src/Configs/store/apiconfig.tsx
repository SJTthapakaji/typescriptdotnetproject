let apiEndPoints: {  
    api: string;
    base: string;
};

function getApiEndPoints() {
    // switch (process.env.NODE_ENV) {
    //     case "development":
    //         apiEndPoints = {               
    //             api: "/api",
    //             base: "/",
    //         };
    //         break;
    //     case "production":
    //         apiEndPoints = {               
    //             api: "/api",
    //             base: "/",
    //         };
    //         break;

    //     default:
    //         apiEndPoints = {               
    //             api: "/api",
    //             base: "/",
    //         };
    // }
    var BaseUrl=process.env.PUBLIC_URL==="http://localhost:7242";
    apiEndPoints={
        api:BaseUrl+'/api',
        base:'/'
    }
    return apiEndPoints;
}
export const ApiEndPoints = getApiEndPoints();
