import React from "react"
import {render} from 'react-dom'
import Request from 'superagent'

class App extends React.Component {

    componentWillMount() {
        var url = "http://localhost:8080/user/1"
        Request.get(url).then((response)=> {
            console.log(response.body)
            this.setState({
                user : response.body
            })
        } )
    }

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));