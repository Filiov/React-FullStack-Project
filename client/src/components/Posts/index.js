import React, { Component } from 'react';
import { getPostWithReviewer, clearPostWithReviewer} from '../../actions';
import { connect } from 'react-redux';

class PostView extends Component {

    componentWillMount() {
        this.props.dispatch(getPostWithReviewer(this.props.match.params.id))
    }

    componentWillUnmount() {
        this.props.dispatch(clearPostWithReviewer())
    }

    renderNews = (news) => (
        news.post ?
            <div className="br_container">
                <div className="br_header">
                    <h2>{news.post.title}</h2>
                    <h5>{news.post.author}</h5>
                    <div className="br_reviewer">
                        <span>Review by:</span> {news.reviewer.name} {news.reviewer.lastname}
                    </div>
                </div>
                <div className="br_review">
                    {news.post.review}
                </div>
                <div className="br_box">
                    <div className="left">
                        <div><span>Category:</span>{news.post.category}</div>
                        <div><span>Created At:</span>{news.post.createdAt}</div>
                    </div>
                    <div className="right">
                        <span>Rating</span>
                        <div>{news.post.rating}/5</div>
                    </div>
                </div>
            </div>
            : null
    )

    render() {
        let news = this.props.news;
        return (
            <div>
                {this.renderNews(news)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps)(PostView)