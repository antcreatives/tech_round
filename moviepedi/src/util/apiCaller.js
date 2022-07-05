import fetch from 'isomorphic-fetch';
const API_URL = process.env.REACT_APP_API_URL || `https://nearbyrasoi.purplepatch.in/api`;
// const API_URL = `http://localhost:8080/api`;

// agent, customer --> api
export default function callApi(endpoint, method = 'get', body) {
  // let token = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : '';
  // let token = storageService.get(JWT_TOKEN);
  let headers = {};
  headers['content-type'] = 'application/json';
  // if (token && token !== '') {
  //   headers.Authorization = `Token ${token}`;
  // }
  return fetch(`${API_URL}/${endpoint}`, {
    headers: headers,
    method,
    body: JSON.stringify(body),
  }).then(response => response.json().then(json => ({json, response})))
    .then(({json, response}) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(
      response => response,
      error => error
    );
}
