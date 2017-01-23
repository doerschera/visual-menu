export function startNewOrder(item) {
  return {
    type: 'NEW_ORDER',
    payload: item
  }
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export function removeItem(item) {
  return {
    type: 'REMOVE_ITEM',
    payload: item
  }
}

export function updateNote(string) {
  return {
    type: 'ADD_NOTE',
    payload: string
  }
}

export function submitNewOrder(order) {
  return {
    type: 'SUBMIT_ORDER',
    payload: order
  }
}

export function orderComplete(index) {
  return {
    type: "ORDER_COMPLETE",
    payload: index
  }
}
