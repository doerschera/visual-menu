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
          number: state.orderCounter,
          items: action.payload
        }
      }

    case 'ADD_ITEM':
      return {...state,
        newOrder: {
          number: state.orderCounter,
          items: state.newOrder.items.concat(action.payload)
        }
      }

    case 'REMOVE_ITEM':
      return {...state,
        newOrder: {
          number: state.orderCounter,
          items: state.newOrder.items.filter((element) => {
            return element != action.payload;
          })
        }
      }

    default:
      return state;
  }
}
