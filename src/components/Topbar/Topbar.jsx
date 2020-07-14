import React, { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { FiShoppingCart } from 'react-icons/fi'

import './topbar.css'

class Topbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { content } = this.props;
        if( content == undefined ) return <div></div>

        return (
            <div className="topbar">
                <img className="logo" src={content.fields.logo.fields.file.url} />
                <div className="cart-icon">
                    <Link to="/cart"><FiShoppingCart /></Link>
                </div>
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({ content: state.content ? state.content.filter(e => e.fields.slug == "TopBar")[0] : undefined })
    )
)(Topbar)