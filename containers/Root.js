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
        return (
            <Provider store={store}>
            {() => <AsyncApp />}
</Provider>
);
}
}