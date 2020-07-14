import React, { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { AiFillInstagram } from 'react-icons/ai'
import { FcMusic } from 'react-icons/fc'

import './bottom-bar.css'

class Bottombar extends Component {
    render() {
        let { content } = this.props;
        if( content == undefined ) return <div></div>

        return (
            <div className="bottom-bar">
                <div className="links">
                    <div><Link to="/">About Me</Link></div>
                    <div><Link to="/contact">Contact Info</Link></div>
                    <div><Link to="/portfolio">View My Work</Link></div>
                </div>
                <div className="socials">
                    <span><a target="_blank" href="https://www.instagram.com/hope.em.h/?hl=en"><AiFillInstagram /></a></span>
                    <span><a target="_blank" href="https://vm.tiktok.com/JLpUe7w/"><FcMusic /></a></span>
                </div>
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({ content: state.content })
    )
)(Bottombar)