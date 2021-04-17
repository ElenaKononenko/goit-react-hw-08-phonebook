import React from 'react';
import s from './HomeView.module.css';
import Carousel from 'react-bootstrap/Carousel';
import gates from './gates.jpeg';
import phoneBook from './phoneBook.jpg';
import phoneBook2 from './phoneBook2.jpg';
const HomeView = () => (
  <section className={s.HomeView}>
    <h1 className={s.title}>Phone Book</h1>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={500}
          src={gates}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SECURITY</h3>
          <p>Your contacts are safe!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={phoneBook2}
          height={500}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ACCESSIBILITY</h3>
          <p>Contacts are easy to browse</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={phoneBook}
          height={500}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SIMPLISITY</h3>
          <p>User-friendly interface</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
);
export default HomeView;
