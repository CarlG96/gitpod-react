import React, { Component } from 'react'

export class UnControlledForm extends Component {

    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.query = React.createRef();
        this.comments = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.query.current.value);
        console.log(this.inputName.current.value);
        console.log(this.comments.current.value);
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input type="text" name="name" id="id-name" ref={this.inputName}/>
                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category:</label>
                        <select id="id-category" name="category" ref={this.query}>
                            <option value="website">Website Issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea id="id-comments" ref={this.comments}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UnControlledForm