import axios from 'axios';

const baseURL = 'https://sakneen-pet-store-api.herokuapp.com/';

function API(method, url, params = {}, data = {}, headers = {}) {
    headers.Accept = 'application/json';
    headers['Content-Type'] = 'application/json';

    return axios({
        method : method,
        baseURL: baseURL,
        url    : url,
        params : params,
        data   : data,
        headers: headers,
    }).then(response => {
        return response
    }).catch(error => {
        if(error.response.status === 401){
            if(error.response.data.status === 3){
                // REFRESH TOKEN HANDLING 
            }else if(error.response.data.status === 4){
                // INVALID TOKEN HANDLING 
            }else if(error.response.data.status === 5){
                // BLACKLISTED TOKEN HANDLING 
            }
            return error.response;
        }
        return error.response
    });
}

export default API;