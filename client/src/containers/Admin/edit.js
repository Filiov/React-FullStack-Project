import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost, updatePost, clearPost, deleteReview } from '../../actions';

class EditReview extends PureComponent {

    state = {
        formdata: {
            _id: this.props.match.params.id,
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

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updatePost(this.state.formdata))
    }

    deletePost = () => {
        this.props.dispatch(deleteReview(this.props.match.params.id))
    }

    redirectUser = () => {
        setTimeout(() => {
            this.props.history.push('/user/user-reviews')
        }, 1000)
    }

    componentWillMount() {
        this.props.dispatch(getPost(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps) {
        let post = nextProps.news.post;
        this.setState({
            formdata: {
                _id: post._id,
                title: post.title,
                author: post.author,
                review: post.review,
                rating: post.rating,
                category: post.category
            }
        })
    }

    componentWillUnmount() {
        this.props.dispatch(clearPost())
    }

    render() {
        let news = this.props.news;
        return (
            <div className="rl_container article">
                {
                    news.updatePost ?
                        <div className="edit_confirm">Post Updated! <Link to={`/allNews/${news.post._id}`}>Click here to see your post</Link></div>
                        : null
                }
                {
                    news.postDeleted ?  
                        <div className="red_tag">Post Deleted {this.redirectUser()}</div>
                        : null
                }
                <form onSubmit={this.submitForm}>
                    <h2>Edit<img src="/images/edit.png" alt="Login" className="login_image" /> Review</h2>
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
                    <button type="submit"><i className="fa fa-edit"></i>&nbsp;&nbsp;Edit Review</button>
                    <div className="delete_post">
                        <div className="button" onClick={this.deletePost}>
                            <i className="fa fa-trash"></i>&nbsp;&nbsp;Delete Review
                        </div>
                    </div>
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

export default connect(mapStateToProps)(EditReview)