/**
 * Created by macbook on 10/7/18.
 */
import React from "react"
import Request from 'superagent'
import {API_HOST} from '../api/Api';


export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                Id: this.props.params.id,
                Name: null,
                Email: null,
                Avatar: null
            }
        };
    }

    componentDidMount() {
        this.getUserById(this.state.user.Id);
    }

    render() {
        let user = this.state.user
        return (
            <table >
                <td>
                    <tr>
                        <td ><p >Name</p></td>
                        <td ><p contentEditable={true} onChange={(event) =>this.onChange(event)}>{user.Name}</p></td>
                    </tr>
                    <tr>
                        <td ><p >Email</p></td>
                        <td ><p contentEditable={true} onChange={this.onChange}>{user.Email}</p></td>
                    </tr>
                    <button onClick={this.updateUser}> Save</button>
                </td>
            </table>
        );
    }

    onChange(event) {
        console.log(event)
        this.setState({[event.target.name]: event.target.value()});
    }

    getUserById = (id) => {
        let url = API_HOST + "user/" + id
        Request.get(url).then((response) => {
            this.setState({
                user: response.body
            })
        })
        // Api.getUserById(id)   healthier but I need more time to get this approach to work
    }
    updateUser = () => {
        let url = API_HOST + "user/" + this.state.user.id
        let data = {
            "Avatar": this.state.user.Avatar,
            "Name": this.state.user.Name,
            "Email": this.state.user.Email
        }
        Request.put(url)
            .set('Content-Type', 'application/json')
            .send(data)
    }
}
