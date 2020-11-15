import React from 'react';
import './style.css';

const Content = (props) => {
  let content = <h1>Loading ...</h1>
  if (props.data) {
    content = props.data.map((img) => (
      <a href={img.urls.small}>

        <img src={img.urls.small} key={img.id} alt="df" />
      </a>
    ));
  }
  return (
    <section id="photos">
      {content}
    </section>
  )
} 

export default Content;