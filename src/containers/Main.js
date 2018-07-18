import Main from '../components/Main';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getPosts} from '../actions/getPosts';

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getPosts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);