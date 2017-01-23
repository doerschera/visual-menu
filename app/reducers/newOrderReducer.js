export default function reducer(state={
  orderCounter: 100,
  newOrder: {
    number: undefined,
    items: [],
    status: 'open',
    note: ''
  },
}, action) {

  switch (action.type) {
    case 'NEW_ORDER':
      return {...state,
        newOrder: {
          items: action.payload
        }
      }

    default:
      return state;
  }
}
