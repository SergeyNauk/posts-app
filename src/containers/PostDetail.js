import PostDetail from '../components/PostDetail';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getTargetPost} from "../actions/getTargetPost";

const mapStateToProps = state => ({
    targetPost: state.posts.targetPost
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getTargetPost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);