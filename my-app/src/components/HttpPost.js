import React, { Component } from 'react'
import axios from 'axios';

export class HttpPost extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            title: "Hello World",
            body: "It Works",
            userId: 123,
        }).then(response => console.log(response))
    }

    render() {
        return (
        <div>
            <button onClick={this.postToApi}>
                Create Post
            </button>
        </div>
        )
    }
}

export default HttpPost