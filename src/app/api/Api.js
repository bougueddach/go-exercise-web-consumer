/**
 * Created by macbook on 10/8/18.
 */
import Request from 'superagent'

export const API_HOST = "http://localhost:8080/"

export default class Api {
    static findUserById(id) {
        let url = API_HOST + "user/" + id
        return Request.get(url).then((response) => {
            return response.body
        })
    }

    static updateUser() {

    }
}