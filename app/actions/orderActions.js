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

export function orderComplete(number) {
  return {
    type: "ORDER_COMPLETE",
    payload: number
  }
}

export function cancelOrder(number) {
  return {
    type: "CANCEL_ORDER",
    payload: number
  }
}

export function editOrder(number) {
  return {
    type: "EDIT_ORDER",
    payload: number
  }
}

export function alertManager() {
  return {
    type: 'ALERT_MANAGER'
  }
}
