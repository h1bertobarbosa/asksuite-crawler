import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import api from '~/services/api';
import history from '~/services/history';
import { searchBookingSuccess, failure } from './actions';

export function* searchBookings({ payload }) {
  try {
    const { dateEntry, dateDeparture } = payload;
    const dateEntryCleaned = format(new Date(dateEntry), 'ddMMyyyy');
    const dateDepartureCleaned = format(new Date(dateDeparture), 'ddMMyyyy');

    const response = yield call(
      api.post,
      `booking/${dateEntryCleaned}/${dateDepartureCleaned}`
    );

    yield put(searchBookingSuccess(response.data));
    history.push('/bookings');
  } catch (error) {
    toast.error(
      `Erro ao buscar as reservas, confira as datas = ${error.message}`
    );
    yield put(failure());
  }
}

export default all([takeLatest('@booking/SEARCH_REQUEST', searchBookings)]);
