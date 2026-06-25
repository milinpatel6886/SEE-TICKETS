import { useState, useEffect } from "react";
import {
  getPublicEventList,
  getPublicEventDetails,
} from "../services/client/publicEventService";
import { mapEventToCardProps } from "../utils/mapEvents";

// ── List hook ── used by EventsListPage
export function useEvents() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetch = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await getPublicEventList();
        if (isMounted) {
          setEvents(res?.data?.events ?? []);
        }
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetch();
    return () => { isMounted = false; };
  }, []);

  return { events, isLoading, error };
}

// ── Detail hook ── used by EventDetailsPage
const BASE_URL = "http://localhost:5000";

export function useEvent(id) {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    let isMounted = true;

    const fetch = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await getPublicEventDetails(id);
        if (!isMounted) return;

        const {
          event: raw,
          artists,
          ticketCategories,
          guides,
          schedules,
        } = res.data;

        if (!raw) throw new Error("Event not found");

        const rawImage = raw.media?.heroBannerImage;

        const lowestTicket = ticketCategories
          ?.filter((t) => t.isActive && t.isOnSale && !t.isSoldOut)
          ?.sort((a, b) => a.price - b.price)?.[0];

        const priceLabel = lowestTicket
          ? `${lowestTicket.currency} ${lowestTicket.price.toLocaleString()}`
          : null;

        setEvent({
          id: raw.id || raw._id,
          title: raw.eventName,
          tagline: raw.shortDescription,
          description: raw.fullDescription,
          image: rawImage ? `${BASE_URL}${rawImage}` : null,
          location: raw.venue?.venueName,
          fullAddress: raw.venue?.fullAddress,
          city: raw.venue?.city,
          date: raw.eventStartDate,
          endDate: raw.eventEndDate,
          startTime: raw.startTime,
          endTime: raw.endTime,
          badge: raw.isFeatured ? "Featured" : null,
          category: raw.category,
          tags: raw.tags ?? [],
          priceLabel,
          guides: (guides ?? []).map((g) => ({
            ...g,
            id: g._id,
            icon: g.icon ?? 'users',      // fallback icon since API has none
            label: g.title,
            value: g.content,
          })),          // ← no images, just title + content
          schedules: schedules ?? [],
          artists: (artists ?? []).map((a) => ({
            ...a,
            name: a.artistName,
            role: a.artistDescription,
            photo: a.artistImage ? `${BASE_URL}${a.artistImage}` : null,
          })),
          ticketTypes: ticketCategories ?? [],
          organizer: raw.organizer,
          slug: raw.slug,
        });
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetch();
    return () => { isMounted = false; };
  }, [id]);

  return { event, isLoading, error };
}