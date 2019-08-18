import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Item, Cards } from './styles';

export default function Booking() {
  const bookings = useSelector(state => state.booking.bookings);

  return (
    <Container>
      <header>
        <h1>Reservas</h1>
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
      </header>

      <Cards>
        {bookings.map(booking => (
          <Item key={String(booking.title)}>
            <img
              src={`https://myreservations.omnibees.com${booking.img}`}
              alt={booking.title}
            />
            <h3>{booking.title}</h3>
            <p>{booking.description}</p>
            <span>{booking.price}</span>
          </Item>
        ))}
      </Cards>
    </Container>
  );
}
