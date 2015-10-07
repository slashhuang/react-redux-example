/**
 * Created by slashhuang on 15/10/5.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();

export default class Root extends Component {
    render() {
        //创建provider实例,并设定attribute将store状态树注入app
        return (

            <Provider store={store}>
            {() => <AsyncApp />}
            </Provider>
);
}
}