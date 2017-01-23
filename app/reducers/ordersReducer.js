export default function reducer(state={
  pastOrders: [],
  newOrder: {
    number: undefined,
    items: [],
    status: 'open',
    note: ''
  },
  orderCounter: 100,
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
        pastOrders: state.pastOrders.concat(action.payload),
        orderCounter: state.orderCounter+1,
        newOrder: {
          number: undefined,
          items: [],
          status: 'open',
          note: ''
        }
      }

    case 'ORDER_COMPLETE':
      return {...state,
        pastOrders: state.pastOrders.map(function(element, i) {
          if(i === parseInt(action.payload)) {
            return {...element, status: 'closed'}
          } else {
            return {...element}
          }
        })
      }

    case 'CANCEL_ORDER':
      return {...state,
        pastOrders: state.pastOrders.filter((element) => {
          return element.number != action.payload;
        })

      }

    default:
      return state;
  }
}
