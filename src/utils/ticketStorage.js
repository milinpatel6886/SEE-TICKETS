// src/utils/ticketStorage.js
//
// Mock persistence for purchased tickets, keyed by Firebase user UID.
// Swap this out for real API calls once you have a backend — the function
// signatures (getTicketsForUser, saveTicketOrder) are written so call sites
// won't need to change, just their internals.

const STORAGE_KEY = 'purchasedTickets'

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeAll(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
}

export function getTicketsForUser(uid) {
  return readAll()
    .filter((order) => order.uid === uid)
    .sort((a, b) => b.purchasedAt - a.purchasedAt)
}

export function saveTicketOrder(uid, order) {
  const orders = readAll()
  const orderId = `TKT-${Date.now().toString(36).toUpperCase()}`
  const record = {
    ...order,
    uid,
    orderId,
    purchasedAt: Date.now(),
  }
  orders.push(record)
  writeAll(orders)
  return record
}