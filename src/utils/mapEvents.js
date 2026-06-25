
export const BASE_URL = "http://localhost:5000";

const formatEventDate = (isoDate) => {
    if (!isoDate) return "";
    return new Date(isoDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};

// Maps a raw event object from the API into the flat shape EventCard expects
export const mapEventToCardProps = (event) => {
    if (!event) return null;

    const rawImage = event.media?.heroBannerImage;

    return {
        id: event.id || event._id,
        title: event.eventName,
        tagline: event.shortDescription,
        image: rawImage ? `${BASE_URL}${rawImage}` : null,  // ✅ fix here
        location: event.venue?.venueName,
        date: event.eventStartDate, // EventMeta already runs this through formatDate
        priceLabel: null, // not wired up yet — needs ticket-categories endpoint
        badge: event.isFeatured ? "Featured" : null,
        raw: event,
    };
};