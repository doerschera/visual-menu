export default function reducer(state={
  orderCounter: 100,
  pastOrders: [],
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
          items: action.payload,
          status: 'open',
        }
      }

    case 'ADD_ITEM':
      return {...state,
        newOrder: {
          number: state.orderCounter,
          items: state.newOrder.items.concat(action.payload),
          status: 'open',
        }
      }

    case 'REMOVE_ITEM':
      return {...state,
        newOrder: {
          number: state.orderCounter,
          items: state.newOrder.items.filter((element) => {
            return element != action.payload;
          }),
          status: 'open',
        }
      }

    case 'ADD_NOTE':
      return {...state,
        newOrder: {
          number: state.orderCounter,
          items: state.newOrder.items,
          status: 'open',
          note: action.payload
        }
      }

    case 'SUBMIT_ORDER':
      return {...state,
        orderCounter: state.orderCounter+1,
        pastOrders: state.pastOrders.concat(action.payload),
        newOrder: {
          number: undefined,
          items: [],
          status: 'open',
          note: ''
        }
      }

    default:
      return state;
  }
}
