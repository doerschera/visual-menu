export function startNewOrder(item) {
  return {
    type: 'NEW_ORDER',
    payload: item
  }
}
