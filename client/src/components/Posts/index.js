import React, { Component } from 'react';
import { getPostWithReviewer } from '../../actions';
import { connect } from 'react-redux';

class PostView extends Component {

    componentWillMount() {
        this.props.dispatch(getPostWithReviewer(this.props.match.params.id))
    }

    render() {
        return (
            <div>
               asdasd
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