import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPost, clearNewPost } from '../../actions';

class AddReview extends Component {

    state = {
        formdata: {
            title: '',
            author: '',
            review: '',
            rating: '',
            category: ''
        }
    }

    handleInput = (event, name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value
        this.setState({
            formdata: newFormdata
        })
    }

    showNewPost = (post) => (
        post.post ? 
            <div className="conf_link">Cool! <Link to={`/allNews/${post.newsId}`}>Click here to see the post</Link></div>
        :null
    )

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addPost({
            ...this.state.formdata,
            ownerId: this.props.user.login.id
        }))
    }

    componentWillUnmount() {
        this.props.dispatch(clearNewPost())
    }

    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add a<img src="/images/reviews.png" alt="Login" className="login_image" /> Review</h2>
                    <div className="form_element">
                        <input type="text" placeholder="Enter title" value={this.state.formdata.title} onChange={(event) => this.handleInput(event, 'title')} />
                    </div>
                    <div className="form_element">
                        <input type="text" placeholder="Enter author" value={this.state.formdata.author} onChange={(event) => this.handleInput(event, 'author')} />
                    </div>
                    <textarea value={this.state.formdata.review} onChange={(event) => this.handleInput(event, 'review')}></textarea>
                    <div className="form_element">
                        <input type="text" placeholder="Enter category" value={this.state.formdata.category} onChange={(event) => this.handleInput(event, 'category')} />
                    </div>
                    <div className="form_element">
                        <select value={this.state.formdata.rating} onChange={(event) => this.handleInput(event, 'rating')}>
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>
                    <button type="submit">Add Review</button>
                    {
                        this.props.news.newpost ? 
                            this.showNewPost(this.props.news.newpost)
                        :null
                    }
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps)(AddReview)