/**
 * Created by macbook on 10/7/18.
 */
import React from "react"
import Request from 'superagent'


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
            <td>
                <tr contentEditable={true}>{user.Avatar}</tr>
                <tr contentEditable={true}>{user.Name}</tr>
                <tr contentEditable={true}>{user.Email}</tr>
                <button> Save</button>
            </td>
        );
    }

    getUserById = (id) => {
        let url = "http://localhost:8080/user/" + id
        Request.get(url).then((response) => {
            this.setState({
                user: response.body
            })
        })
    }
}
