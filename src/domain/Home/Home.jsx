import React, { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Card from '../../components/Card/Card'

import './home.css'

class Home extends Component {
    render() {
        let { content } = this.props
        if( content == undefined ) return <div></div>

        let cards = content.filter(e => e.fields.slug == "HomeCard")
        cards = cards.sort((a, b) => a.fields.priority - b.fields.priority)

        return (
            <div className="home">
                <div className="title"></div>
                <div className="subtitle"></div>
                <div className="columns">
                    {
                        cards.map(e => <div className="item"><Card content={e} /></div>)
                    }
                </div>
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({ content: state.content })
    )
)(Home)