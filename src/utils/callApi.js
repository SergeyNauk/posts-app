const apiUrl = 'https://jsonplaceholder.typicode.com';

export default function callApi(endPoint){
    console.log(`${apiUrl}${endPoint}`);
    return fetch(`${apiUrl}${endPoint}`)
        .then(response => {
            if(response.status === 200) {
                return response.json();
            }
            if(response.status === 400) {
                throw response.statusText;
            }
            if(response.status === 401){
                throw response.statusText;
            }
        })
};