import { useState, useEffect } from 'react'
import { events } from '../data/events'

// Returns the full list of events — used by EventsListPage
export function useEvents() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    // Simulates async fetch — swap for a real fetch('/api/events') later
    try {
      setData(events)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { events: data, isLoading, error }
}

// Returns a single event by id — used by EventDetailsPage
export function useEvent(id) {
  const [event, setEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    // Simulates async lookup — swap for a real fetch(`/api/events/${id}`) later
    const found = events.find((e) => e.id === id)

    if (found) {
      setEvent(found)
    } else {
      setError(new Error('Event not found'))
    }
    setIsLoading(false)
  }, [id])

  return { event, isLoading, error }
}