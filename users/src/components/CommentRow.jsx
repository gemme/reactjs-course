import React from 'react';

export const CommentRow = (props) => {
    return (<>
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avatar} alt="avatar" />
            </a>
        </div>
        <div className="content">
            <a href="/" className="author">{props.author}</a>
        </div>
        <div className="metadata">
            <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.comment}</div>
    </>);
};

// import faker from 'faker';

/* export const CommentRow = (props) => {
    return (<>
        <div className="comment">
            <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar" />
            </a>
        </div>
        <div className="content">
            <a href="/" className="author">Roque</a>
        </div>
        <div className="metadata">
            <span className="date">Today at 4:00pm</span>
        </div>
        <div className="text">Hello World</div>
    </>);
}; */