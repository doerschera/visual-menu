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
