/**
 * Created by slashhuang on 15/10/5.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';


class AsyncApp extends Component {
    constructor(props) {
        super(props);
        //函数调用模式this将被绑定到全局对象上，因此必须显式bind this
        //构造函数里面关于react定义的函数在实例化对象之前就执行，this仍旧绑定执行时候的context，而
        //实例化完成后自定义的函数必须绑定到实例对象，因此单独领出来
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    componentDidMount() {
        console.log("hello");
        console.log(this);
        const { dispatch, selectedReddit } = this.props;
        dispatch(fetchPostsIfNeeded(selectedReddit));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const { dispatch, selectedReddit } = nextProps;
            dispatch(fetchPostsIfNeeded(selectedReddit));
        }
    }

    handleChange(nextReddit) {

        this.props.dispatch(selectReddit(nextReddit));
    }

    handleRefreshClick(e) {
        console.log("refresh");
        console.log(this);
        e.preventDefault();
        const { dispatch, selectedReddit } = this.props;
        dispatch(invalidateReddit(selectedReddit));
        dispatch(fetchPostsIfNeeded(selectedReddit));
    }

    render () {
        console.log(this)
        const { selectedReddit, posts, isFetching, lastUpdated} = this.props;
        return (
            <div>
            <Picker value={selectedReddit}
        onChange={this.handleChange}
    options={['reactjs', 'frontend']} />
<p>
{lastUpdated &&
<span>
Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
{' '}
</span>
}
{!isFetching &&
<a href='#'
    onClick={this.handleRefreshClick}>
Refresh
</a>
}
</p>
{isFetching && posts.length === 0 &&
<h2>Loading...</h2>
}
{!isFetching && posts.length === 0 &&
<h2>Empty.</h2>
}
{posts.length > 0 &&
<div style={{ opacity: isFetching ? 0.5 : 1 }}>
<Posts posts={posts} />
    </div>
}
</div>
);
}
}

AsyncApp.propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    test: PropTypes.string.isRequired
};

console.log(AsyncApp)

function mapStateToProps(state) {
    const { selectedReddit, postsByReddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
        } = postsByReddit[selectedReddit] || {
        isFetching: true,
        items: []
    };
    //return props
    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    };
}
//connect() call will receive a dispatch function as a prop, and any state it needs from the global state
//The only argument to connect() is a function we call a selector.
// This function takes the global Redux store’s state, and returns the props you need for the component
export default connect(mapStateToProps)(AsyncApp);