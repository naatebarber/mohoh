import React, { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import { MdCancel } from 'react-icons/md'

import './cart.css'

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { content, cart } = this.props
        if( content == undefined ) return <div></div>

        return (
            <div className="cart">
                <div className="header">Your Cart</div>
                <div className="items">
                    {
                        cart != undefined
                            ?   cart.map((e, i) =>
                                    <div className="item">
                                        <img src={e.image} alt=""/>
                                        <span className="title">{e.title}</span>
                                        <div className="remove"><MdCancel onClick={() => {
                                            cart.splice(i, 1);
                                            this.props.dispatch({
                                                type: "UPDATE_CART",
                                                data: cart
                                            })
                                            this.forceUpdate()
                                        }}/></div>
                                        <div><span className="price">${e.price}</span></div>
                                    </div>
                                )
                            :   null
                    }
                </div>
                {
                    cart && cart.length > 0
                        ?   <div className="checkout">
                                <button onClick={() => { console.log("checkout") }}>Proceed To Checkout</button>
                            </div>
                        :   <div><i>Looks pretty lonely in here...</i></div>
                }
                    
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({ cart: state.cart, content: state.content })
    )
)(Cart)