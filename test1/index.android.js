/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import Login from './script/login';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import loginReducer from './script/login_reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers({loginReducer});
const _store = createStoreWithMiddleware(reducer);

class test1 extends Component {

    render() {
        return (
            <Provider store={_store}>
                <Login/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('test1', () => test1);
