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
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return <img src="https://m.media-amazon.com/images/I/715vXuwzxyL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
}

const Title = () => {
  return <h1>Atal Bihari Vajpayee: A Man for All Seasons</h1>
}

const Author = () => {
  return <h4>Rishabh Jain</h4>
}
ReactDOM.render(<BookList />, document.getElementById('root'));