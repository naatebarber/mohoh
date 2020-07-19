import React, { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import { Backdrop } from '@material-ui/core'

import './portfolio.css'

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null,
            backdrop: false
        }
    }
    render() {
        let { content, cart, showCart } = this.props
        if( content == undefined ) return <div></div>

        let text = content.filter(e => e.fields.slug == "Portfolio")[0]
        let cards = content.filter(e => e.fields.slug == "PortfolioCard")

        console.log(cards[0].fields.image.fields.file.url)

        return (
            <div className="portfolio">
                {
                    this.state.backdrop
                    ?   <div className="backdrop">
                            <div className="background" onClick={() => { this.setState({ backdrop: false }) }}></div>
                            <div className="panel">
                                <img src={this.state.selected.fields.image.fields.file.url} />
                                <div className="text">{this.state.selected.fields.description}</div>
                                {
                                    showCart
                                        ?   <button
                                                onClick={() => {
                                                    if(cart == undefined) {
                                                        cart = []
                                                    }
            
                                                    cart.push({
                                                        image: this.state.selected.fields.image.fields.file.url,
                                                        title: this.state.selected.fields.header,
                                                        price: this.state.selected.fields.price
                                                    })
            
                                                    this.props.dispatch({
                                                        type: "UPDATE_CART",
                                                        data: cart
                                                    })
            
                                                    this.setState({
                                                        backdrop: false,
                                                    })
                                                }}
                                            >
                                                Add To Cart ( ${this.state.selected.fields.price} )
                                            </button>
                                        :   null
                                }
                            </div>
                        </div>
                    :   null
                }
                    
                <div className="header">{text.fields.header}</div>
                <div className="grid">
                    {
                        cards.map((e, i) => 
                            <div 
                                key={i + "card"}
                                className="portfolio-card"
                                onClick={() => {
                                    this.setState({
                                        backdrop: true,
                                        selected: e
                                    })
                                }}
                            >
                                <img src={e.fields.image.fields.file.url} />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    compose(
        state => ({ content: state.content, cart: state.cart, showCart: state.showCart })
    )
)(Portfolio)