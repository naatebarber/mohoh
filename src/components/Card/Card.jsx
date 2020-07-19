import React, { Component } from 'react'

import './card.css'

export default class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { content, style } = this.props
        if( content == undefined ) return <div></div>

        return (
            <div className="card" style={style}>
                { content.fields.image 
                    ? <div><img src={content.fields.image.fields.file.url} /></div> 
                    : <div></div> }
                
                { content.fields.header 
                    ? <div className="header"><span>{content.fields.header}</span></div>
                    : <div></div> }

                { content.fields.body 
                    ? <div className="text"><p>{content.fields.body}</p></div>
                    : <div></div> }
                
                { content.fields.quote 
                    ? <div className="quote"><span>{content.fields.quote}</span></div>
                    : <div></div> }
            </div>
        )
    }
}