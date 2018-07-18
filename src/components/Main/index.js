import React from 'react';
import './main.css';
//components
import Header from '../Header';
import Footer from '../Footer';

import {Link} from 'react-router-dom';
//lodash
import _ from "lodash";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {getPosts} = this.props;

            if(getPosts) {
                getPosts('/posts');
            }
        }

    render() {

        const {posts} = this.props;
        const postsArr = _.get(posts, 'posts', []);

        return (
            <div className="flex-wrapper">
                <div>
                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="posts-wrapper">
                                {postsArr.map((post) => (
                                    <Link key={post.id} to={`/post-detail/${post.id}`}>
                                        <div className="post-item">
                                            <p className="post-title">{post.title}</p>
                                            <p className="post-body">{post.body}</p>
                                        </div>
                                    </Link>
                                   )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main;