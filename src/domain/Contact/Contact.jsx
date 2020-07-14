import React, { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import { AiOutlineArrowDown } from 'react-icons/ai'

import './contact.css'

class Contact extends Component {
    render() {
        let { content } = this.props
        if( content == undefined ) return <div></div>

        content = content.filter(e => e.fields.slug == "ContactPage")[0]

        return (
            <div className="contact">
                <div className="header">{content.fields.header}</div>
                <input placeholder={content.fields.firstName} />
                <br></br>
                <br></br>
                <input placeholder={content.fields.lastName} />
                <br></br>
                <br></br>
                <input placeholder={content.fields.phone} />
                <br></br>
                <br></br>
                <input placeholder={content.fields.email} />
                <br></br>
                <br></br>
                <span className="arrow"><AiOutlineArrowDown /></span>
                <br></br>
                <br></br>
                <textarea placeholder={content.fields.textbox}></textarea>
                <br></br>
                <br></br>
                <br></br>
                {/* Fuck typing all of those line breaks I fucking hate line breaks */}
                <button>{content.fields.button}</button>
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({ content: state.content })
    )
)(Contact)