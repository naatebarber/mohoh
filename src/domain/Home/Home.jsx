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

        return (
            <div className="home">
                <div className="title"></div>
                <div className="subtitle"></div>
                <div className="wrapper">
                    <div className="column">
                        {
                            cards.filter(e => e.fields.columnNumber == 1).reverse().map(e => <Card content={e} style={{ width: "100%" }} />)
                        }
                    </div>
                    <div className="column">
                        {
                            cards.filter(e => e.fields.columnNumber == 2).reverse().map(e => <Card content={e} style={{ width: "100%" }} />)
                        }
                    </div>
                    <div className="column">
                        {
                            cards.filter(e => e.fields.columnNumber == 3).reverse().map(e => <Card content={e} style={{ width: "100%" }} />)
                        }
                    </div>
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