import React, { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { CircularProgress } from '@material-ui/core'

import { AiOutlineArrowDown } from 'react-icons/ai'

import './contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: "",
            showSubmit: true
        }
    }

    render() {
        let { content } = this.props
        if( content == undefined ) return <div></div>

        content = content.filter(e => e.fields.slug == "ContactPage")[0]

        return (
            <div className="contact">
                <div className="header">{content.fields.header}</div>
                <input placeholder={content.fields.firstName} onInput={(e) => {
                    let s = this.state;
                    s.firstName = e.target.value
                    this.setState(s)
                }}/>
                <br></br>
                <br></br>
                <input placeholder={content.fields.lastName} onInput={(e) => {
                    let s = this.state;
                    s.lastName = e.target.value
                    this.setState(s)
                }}/>
                <br></br>
                <br></br>
                <input placeholder={content.fields.phone} onInput={(e) => {
                    let s = this.state;
                    s.phone = e.target.value
                    this.setState(s)
                }}/>
                <br></br>
                <br></br>
                <input placeholder={content.fields.email} onInput={(e) => {
                    let s = this.state;
                    s.email = e.target.value
                    this.setState(s)
                }}/>
                <br></br>
                <br></br>
                <span className="arrow"><AiOutlineArrowDown /></span>
                <br></br>
                <br></br>
                <textarea placeholder={content.fields.textbox} onInput={(e) => {
                    let s = this.state;
                    s.message = e.target.value
                    this.setState(s)
                }}></textarea>
                <br></br>
                <br></br>
                <br></br>
                {/* Fuck typing all of those line breaks I fucking hate line breaks */}
                { this.state.showSubmit ? <button onClick={() => {
                    fetch("/email-hope", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            phone: this.state.phone,
                            email: this.state.email,
                            message: this.state.message
                        })
                    })
                    .then(data => {
                        if(data.status == 200) {
                            alert(content.fields.confirmation)
                        } else {
                            alert("Looks like our servers are wack right now :( Feel free to email me at mohohdesign@gmail.com!")
                        }
                    })
                    let s = this.state
                    s.showSubmit = false
                    this.setState(s)
                }}>{content.fields.button}</button> : <CircularProgress color="secondary" /> }
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({ content: state.content })
    )
)(Contact)