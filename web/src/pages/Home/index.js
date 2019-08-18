import React from 'react';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import logolecanton from '~/assets/logo-lecanton.png';
import DatePicker from '~/components/DatePicker';
import { Container } from './styles';
import { searchBookingRequest } from '~/store/modules/booking/actions';

const schema = Yup.object().shape({
  dateEntry: Yup.date('Insira uma data válida').required(
    'Insira a data de entrada'
  ),
  dateDeparture: Yup.date('Insira uma data válida').required(
    'Insira a data de saída'
  ),
});

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.booking.loading);
  function handleSubmit({ dateEntry, dateDeparture }) {
    dispatch(searchBookingRequest(dateEntry, dateDeparture));
  }

  if (loading) return <div className="loading" />;
  return (
    <Container>
      <img src={logolecanton} alt="Le canton" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <DatePicker name="dateEntry" placeholder="Data de Entrada" />
        <DatePicker name="dateDeparture" placeholder="Data de saída" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </Container>
  );
}
