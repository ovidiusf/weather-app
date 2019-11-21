class Http {
    static fetchData(url) {
        return new Promise((resolve, reject) => {
            const HTTP = new XMLHttpRequest();
            HTTP.open('GET', url);
            HTTP.onreadystatechange = function () {
                //check if the request is done and the status is ok
                if(HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200){
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);
                    resolve(RESPONSE_DATA);
                } else if(HTTP.readyState == XMLHttpRequest.DONE ) {
                    reject('Something went wrong');
                }
            };
            //testing 
            // HTTP.onload = () => {
            //     console.log(HTTP.response);
            // };
            HTTP.send();
        });
    }
}

export {Http};