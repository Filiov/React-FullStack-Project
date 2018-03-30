import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';
import NewsItem from '../widgetsUI/newsItem';


class HomeContainer extends Component {

    componentWillMount() {
        this.props.dispatch(getNews(1, 0, 'desc'))
    }

    renderItems = (news) => (
        news.list ? news.list.map(item => (
            <NewsItem {...item} key={item._id} />
        ))
            : null
    )

    loadmore = () => {
        let count = this.props.news.list.length;
        this.props.dispatch(getNews(1, count, 'desc', this.props.news.list))
    }
 
    render() {
        return (
            <div>
                {this.renderItems(this.props.news)}
                <div className="loadmore" onClick={this.loadmore}>Load More</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps)(HomeContainer)