import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { state, reducer } from './Store'
import Topbar from './components/Topbar/Topbar'
import BottomBar from './components/Bottombar/Bottombar'

import Home from './domain/Home/Home'
import Contact from './domain/Contact/Contact'
import Portfolio from './domain/Portfolio/Portfolio'
import Cart from './domain/Cart/Cart'

const store = createStore(reducer, state)

class App extends Component {
    componentWillMount() {
        fetch("/get-entries", {
            method: "GET"
        })
        .then(data => data.json())
        .then(data => store.dispatch({
            type: "CONTENT",
            data: data
        }))
    }

    render() {
        return (
            <div className="root">
                <Provider store={store}>
                    <BrowserRouter>
                        <BottomBar />
                        <Topbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/portfolio" component={Portfolio} />
                            {/* <Route exact path="/cart" component={Cart} /> */}
                        </Switch> 
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("react-app")
)