/**
 * Created by macbook on 10/8/18.
 */

export const API_HOST = "http://localhost:8080/"

class Api {
    static getUserById(id) {
        const request = new Request(API_HOST / user / id, {
            method: 'GET',
        });
        return fetch(request).then(response => {
            console.log(response.json())
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}