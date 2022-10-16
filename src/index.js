import React from "react";
import ReactDOM from 'react-dom';
import './index.css'


function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'Atal Bihari Vajpayee: A Man for All Seasons'
  const author = 'Rishabh Jain'

  return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/715vXuwzxyL._AC_UY327_FMwebp_QL65_.jpg" alt="" />

      <h1>{title}</h1>

      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));