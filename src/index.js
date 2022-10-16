import React from "react";
import ReactDOM from 'react-dom';
import './index.css'

const firstBook = {
  img: "https://m.media-amazon.com/images/I/715vXuwzxyL._AC_UY327_FMwebp_QL65_.jpg",
  author: 'Rishabh Jain',
  title: 'Atal Bihari Vajpayee: A Man for All Seasons'
}

const secondBook = {
  img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg",
  author: 'Morgan Housel',
  title: 'The Psychology of Money'
}

const thirdBook = {
  img: "https://m.media-amazon.com/images/I/61kRkfsIMUL._AC_UY327_FMwebp_QL65_.jpg",
  author: 'Ankur Warikoo',
  title: 'DO EPIC SHIT'
}

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
      </Book>


      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("Choose any of the books fast");
  }
  return (
    <article className="book">
      <img src={img} alt="" />

      <h1 onClick={clickHandler}>{title}</h1>

      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Reference Example</button>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));