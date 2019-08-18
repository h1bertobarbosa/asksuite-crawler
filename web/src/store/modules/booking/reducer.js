import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  bookings: [],
};

export default function booking(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@booking/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@booking/SEARCH_SUCCESS': {
        draft.loading = false;
        draft.bookings = action.payload.bookings;
        break;
      }
      case '@booking/FAILURE': {
        draft.loading = false;
        draft.bookings = [];
        break;
      }
      default:
    }
  });
}
