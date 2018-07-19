import PostDetail from '../components/PostDetail';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getTargetPost} from "../actions/getTargetPost";
import {getComments} from "../actions/getComments";

const mapStateToProps = state => ({
    targetPost: state.posts.targetPost,
    comments: state.posts.comments
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getTargetPost,
    getComments
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);