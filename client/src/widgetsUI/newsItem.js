import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = (item) => {
    return (
        <Link to={`/allNews/${item._id}`} className="book_item">
            <div className="book_header">
                <h2>{item.title}</h2>
            </div>
            <div className="book_items">
                <div className="book_author">
                    {item.author}
                </div>
                <div className="book_bubble">
                    <strong>Category</strong> {item.category}
                </div>
                <div className="book_bubble rating">
                    <strong>Rating</strong> {item.rating}
                </div>
            </div>
        </Link>
    );
};

export default NewsItem;