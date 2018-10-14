/**
 * Created by macbook on 10/7/18.
 */
import React from "react"
import Api from '../api/Api';
import Request from 'superagent'


export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                Id: this.props.params.id,
                Name: null,
                Email: "",
                Avatar: ""
            }
        };
    }

    componentWillMount() {
        this.getUserById(this.state.user.Id);
    }

    render() {
        let user = this.state.user
        return (
            <td>
                <tr>
                    <td ><p >Name</p></td>
                    <td ><input type="text" name="Name" value={user.Name} onChange={(event) => this.onChange(event)}/>
                    </td>
                </tr>
                <tr>
                    <td ><p >Email</p></td>
                    <td ><input type="text" name="Email" value={user.Email} onChange={(event) => this.onChange(event)}/>
                    </td>
                </tr>
                <button onClick={() =>this.updateUser()}> Save</button>
            </td>
        );
    }

    onChange(event) {
        const oldUser = this.state.user
        this.setState({
            user: {
                ...oldUser,
                [event.target.name]: event.target.value
            }
        });
    }

    getUserById = async (id) => {
        let user = await Api.findUserById(id)
        this.setState({
            user: user
        })

    }
    updateUser = () => {
        let url = Api.API_HOST + "user/" + this.state.user.Id
        console.log(url)
        console.log(this.state.user)
        let data = {
            "Avatar": this.state.user.Avatar,
            "Name": this.state.user.Name,
            "Email": this.state.user.Email
        }
        var myInit = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }
        fetch(url, myInit)
            .then(response => console.log(response))
    }
}
