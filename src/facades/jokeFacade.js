const URL = "http://localhost:8080";
// const URL = "https://markchomin.com"

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

import React from 'react';

function jokeFacade() {

    const fetchData = (endpoint, updateAction) => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/" + endpoint, options)
            .then(handleHttpErrors)
            .then((data) => updateAction(data))
    }

    const makeOptions = (method) => {
        method = method ? method : 'GET';
        const opts = {
            method: method,
            headers: {
                ...(['PUT', 'POST'].includes(method) && {
                    "Content-type": "application/json"
                }),
                'Accept': 'application/json',
            }
        }
        return opts;
    }


    return {
        fetchData,
        makeOptions
    }
}

const jokefacade = jokeFacade();

export default jokefacade;