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
