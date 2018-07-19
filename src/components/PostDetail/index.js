import React, {Fragment} from 'react';
import './post-detail.css';
//components
import Header from '../Header';
import Footer from '../Footer';

class PostDetail extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            errorSearch: false
        }
    }

    componentDidMount() {
        const targetPostId = this.props.match.params.name;

        if (targetPostId > 100) {
            this.setState({
                errorSearch: true
            })
        } else {
            const {getTargetPost} = this.props;

            if (getTargetPost) {
                getTargetPost(`/posts/${targetPostId}`);
            }
        }
    }

    render(){

        const {targetPost, getComments, comments} = this.props;
        const {errorSearch} = this.state;
            console.log(comments);
        return (
            <div className="flex-wrapper">
                <div>
                    <Header />
                    <div className="post-detail-content">
                        {errorSearch ? (
                            <p className="post-detail-title">sorry, this post does not exist !</p>
                            ) : (
                                <Fragment>
                                    <p className="post-detail-title">{targetPost.title}</p>
                                    <p className="post-detail-body">{targetPost.body}</p>
                                    {comments === '' ? (
                                        <p className="post-detail-more"
                                           onClick={() => getComments(`/posts/${targetPost.id}/comments`)}
                                        >MORE</p>
                                    ) : (
                                        <div className="post-detail-comments">
                                            <h1>Comments</h1>
                                            {
                                                comments.map((comment) => (
                                                    <div key={comment.id} className="comments-item">
                                                        <p>
                                                           NAME: {comment.name}
                                                        </p>
                                                        <p>
                                                            EMAIL: {comment.email}
                                                        </p>
                                                        <p>
                                                            COMMENT: {comment.body}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )}
                                </Fragment>
                            )}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PostDetail;