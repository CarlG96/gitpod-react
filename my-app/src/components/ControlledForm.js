import React, { Component } from 'react'

export class ControlledForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            queryCategory: "website",
            comments: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        }

        )
    }

    handleQueryCategoryChange = (event) => {
        this.setState({
            queryCategory: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" id="id-name" />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category:</label>
                        <select id="id-category" name="category" onChange={this.handleQueryCategoryChange} value={this.state.queryCategory}>
                            <option value="website">Website Issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea id="id-comments" value={this.state.comments} onChange={this.handleCommentsChange}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm