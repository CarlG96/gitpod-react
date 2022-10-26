import React, { Component } from 'react'
import axios from 'axios';

export class HttpPost extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         post: []
      }
    }

    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            title: "Hello World",
            body: "It Works",
            userId: 123,
        }).then(response => {
        console.log(response);
        this.setState({
            post: response.data
        });
        })
    }

    render() {
        return (
        <div>
            <button onClick={this.postToApi}>
                Create Post
            </button>
            {
                this.state.post ? (
                    <div>
                        <h1>{this.state.post.title}</h1>
                        <p>{this.state.post.body}, {this.state.post.id}, {this.state.post.userId}</p>
                    </div>
                )   : (
                    <div>
                        <p>Data not returned yet!</p>
                    </div>
                )

            }
        </div>
        )
    }
}

export default HttpPost