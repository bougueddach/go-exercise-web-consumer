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
                Id: null,
                Name: null,
                Email: null,
                Avatar: null
            }
        };
    }

    componentDidMount() {
        var url = "http://localhost:8080/user/1"
        Request.get(url).then((response) => {
            this.setState({
                user: response.body
            })
        })
    }
    render() {
        var user = this.state.user
        return (
            <div>
                <div>{user.Name}</div>
                <div>{user.Email}</div>
                <div>{user.Avatar}</div>
            </div>
        );
    }
}