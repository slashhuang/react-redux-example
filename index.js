/**
 * Created by slashhuang on 15/10/5.
 */


//本示例使用了 fetch API。它是替代 XMLHttpRequest 用来发送网络请求的非常新的 API
// 由于目前大多数浏览器原生还不支持它，使用 isomorphic-fetch 库来代替.
// babel-core/polyfill启用promise的polyfill
import 'babel-core/polyfill';

import React from 'react';
import Root from './containers/Root';

React.render(
<Root />,
    document.getElementById('root')
);