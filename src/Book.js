import React from 'react'

const Book = ({ img, title, author }) => {
    return (
        <article className="book" onMouseOver={() => {
            console.log(title);
        }}>
            <img src={img} alt="" />

            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Reference Example</button>

            <button type="button" onClick={() => complexExample(author)}>
                More Complex Example.
            </button>
        </article>
    );
};

export default Book