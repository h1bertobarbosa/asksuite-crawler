export function searchBookingRequest(dateEntry, dateDeparture) {
  return {
    type: '@booking/SEARCH_REQUEST',
    payload: { dateEntry, dateDeparture },
  };
}

export function searchBookingSuccess(bookings) {
  return {
    type: '@booking/SEARCH_SUCCESS',
    payload: { bookings },
  };
}

export function failure() {
  return {
    type: '@booking/FAILURE',
  };
}
