// Mock data — shaped the way a real API response would look.
// Swap this for a fetch() call in src/hooks/useEvents.js once you have a backend.

export const events = [
  {
    id: 'sufi-night-6',
    title: 'SUFI NIGHT 6.0',
    tagline: 'Where Soul Meets Sound',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    location: 'PALM & PINE AHMEDABAD, Sindhubhavan Road, PRL Colony',
    date: '2026-06-20',
    priceLabel: 'From ₹649',
    badge: null,
    featured: true,
    description:
      'An evening of soulful Sufi music under the open sky, featuring live vocalists, percussion, and a setting designed to bring people together through sound. Expect a relaxed, immersive atmosphere with seating, food stalls, and great acoustics. Doors open one hour before showtime, and the lineup runs continuously with a short interval. Food and beverage stalls will be open throughout the evening, and there is a dedicated chill-out zone for those who want a break from the main seating area.',
    guides: [
      { id: 'duration', icon: 'clock', label: 'Duration', value: '3 Hours' },
      { id: 'entry', icon: 'users', label: 'Entry Allowed For', value: '12+ years' },
      { id: 'tickets', icon: 'users', label: 'Tickets Needed For', value: '5+ years' },
      { id: 'parking', icon: 'parking', label: 'Parking', value: 'Available on-site' },
      { id: 'dress', icon: 'shirt', label: 'Dress Code', value: 'Smart casuals' },
    ],
    terms: [
      'Tickets once booked cannot be cancelled, exchanged, or refunded.',
      'Entry is subject to security check. Outside food and beverages are not allowed.',
      'The organizer reserves the right to deny entry or remove any attendee for inappropriate conduct.',
      'Event lineup and timings are subject to change without prior notice.',
      'Valid government ID proof is mandatory for entry.',
    ],
    artists: [
      {
        id: 'artist-1',
        name: 'Rahat Mehfil',
        role: 'Lead Vocalist',
        photo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=300&auto=format&fit=crop',
      },
      {
        id: 'artist-2',
        name: 'Imran Qadri',
        role: 'Tabla',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
      },
      {
        id: 'artist-3',
        name: 'Sana Aziz',
        role: 'Harmonium',
        photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop',
      },
    ],
    ticketTypes: [
      { id: 'general', name: 'General', price: 649, description: 'Standing & shared seating area' },
      { id: 'premium', name: 'Premium', price: 1199, description: 'Front section, reserved seating' },
      { id: 'vip', name: 'VIP', price: 2499, description: 'Front row + meet & greet + welcome drink' },
    ],
  },
  {
    id: 'tweet-up-kubon-kulture',
    title: 'TWEET UP PARTY - KUBON KULTURE',
    tagline: 'Hip Hop | Organic House | Experimental | Funk House | Pop Music',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    location: 'Vince cafe, Karnavati Club Road, near to fun food battalion',
    date: '2026-06-21',
    priceLabel: null,
    badge: 'Invites Only',
    featured: false,
    description:
      'A curated night of genre-bending music spanning hip hop, organic house, experimental, funk house, and pop. This is an invite-only gathering with a tight guest list and a lineup of selectors known for keeping the dance floor moving all night. Expect a relaxed lounge setup early in the evening that builds into a full dance floor as the night progresses.',
    guides: [
      { id: 'duration', icon: 'clock', label: 'Duration', value: '5 Hours' },
      { id: 'entry', icon: 'users', label: 'Entry Allowed For', value: '21+ years' },
      { id: 'tickets', icon: 'users', label: 'Tickets Needed For', value: 'Invite only' },
      { id: 'parking', icon: 'parking', label: 'Parking', value: 'Limited on-site' },
    ],
    terms: [
      'This is an invite-only event. A valid invite code is required at entry.',
      'Entry strictly for 21 years and above. Valid government ID is mandatory.',
      'Management reserves the right of admission.',
      'No outside food, beverages, or recording equipment allowed.',
    ],
    artists: [
      {
        id: 'artist-1',
        name: 'DJ Kubon',
        role: 'Headliner',
        photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop',
      },
      {
        id: 'artist-2',
        name: 'Maya Rhodes',
        role: 'Support Act',
        photo: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=300&auto=format&fit=crop',
      },
    ],
    ticketTypes: [
      { id: 'invite', name: 'Invite Only', price: 0, description: 'Requires a valid invite code' },
    ],
  },
  {
    id: 'bollyjam-2',
    title: 'BOLLYJAM 2.0',
    tagline: '6 PM Onwards',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    location: 'House of Candid (HOC), Sardar Patel Ring Road, beside Dadob...',
    date: '2026-07-18',
    priceLabel: 'From ₹349',
    badge: null,
    featured: true,
    description:
      'The biggest Bollywood party is back. Dance to chartbusters old and new, with a live DJ, themed decor, and a high-energy crowd. Doors open at 6 PM — arrive early to grab the best spot on the floor. Expect a mix of retro and current hits across the night, plus surprise theme rounds.',
    guides: [
      { id: 'duration', icon: 'clock', label: 'Duration', value: '4 Hours' },
      { id: 'entry', icon: 'users', label: 'Entry Allowed For', value: '18+ years' },
      { id: 'tickets', icon: 'users', label: 'Tickets Needed For', value: '5+ years' },
      { id: 'parking', icon: 'parking', label: 'Parking', value: 'Paid, on-site' },
      { id: 'dress', icon: 'shirt', label: 'Dress Code', value: 'Smart casuals only' },
    ],
    terms: [
      'Tickets are non-transferable and non-refundable.',
      'Stag entry may be subject to additional verification at the door.',
      'No flip-flops or shorts permitted.',
      'Management reserves the right of admission.',
    ],
    artists: [
      {
        id: 'artist-1',
        name: 'DJ Vyom',
        role: 'Resident DJ',
        photo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=300&auto=format&fit=crop',
      },
      {
        id: 'artist-2',
        name: 'Riya Kapoor',
        role: 'Host',
        photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop',
      },
    ],
    ticketTypes: [
      { id: 'stag', name: 'Stag Entry', price: 349, description: 'Single entry' },
      { id: 'couple', name: 'Couple Entry', price: 599, description: 'Entry for two' },
      { id: 'group', name: 'Group of 4', price: 999, description: 'Entry for four, best value' },
    ],
  },
  {
    id: 'step-into-the-unseen',
    title: 'STEP INTO THE UNSEEN',
    tagline: 'Key to the Hidden Experience',
    image:
      'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=800&auto=format&fit=crop',
    location: 'CAVE by the Hill',
    date: '2026-06-27',
    priceLabel: 'From ₹999',
    badge: null,
    featured: false,
    description:
      'A one-of-a-kind immersive experience that blends ambient soundscapes, lighting design, and a hidden venue concept. Details are kept under wraps until the day of — come ready for the unexpected. The full experience runs continuously with no fixed seating, encouraging movement through different zones.',
    guides: [
      { id: 'duration', icon: 'clock', label: 'Duration', value: '2 Hours' },
      { id: 'entry', icon: 'users', label: 'Entry Allowed For', value: '16+ years' },
      { id: 'tickets', icon: 'users', label: 'Tickets Needed For', value: '5+ years' },
      { id: 'parking', icon: 'parking', label: 'Parking', value: 'Limited, on-site' },
    ],
    terms: [
      'Venue location is shared 24 hours before the event via SMS/email.',
      'Entry strictly by ticket QR code. Gates close 30 minutes after start time.',
      'Not recommended for those with photosensitivity or claustrophobia.',
      'No refunds once the venue location has been shared.',
    ],
    artists: [
      {
        id: 'artist-1',
        name: 'Echo Verma',
        role: 'Sound Designer',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
      },
    ],
    ticketTypes: [
      { id: 'general', name: 'General', price: 999, description: 'Full experience access' },
      { id: 'early-bird', name: 'Early Bird', price: 799, description: 'Limited slots, early entry' },
    ],
  },
  {
    id: 'sundowner-picnic',
    title: 'SUNDOWNER PICNIC',
    tagline: 'Curated by artistrypointt',
    image:
      'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800&auto=format&fit=crop',
    location: 'Riverside Lawns, Ahmedabad',
    date: '2026-06-22',
    priceLabel: 'From ₹499',
    badge: null,
    featured: true,
    description:
      'Unwind by the river as the sun sets, with curated music, picnic mats, and a chilled-out crowd. Bring your friends, grab a spot on the lawn, and enjoy an evening built around good vibes and golden hour views. Light snacks and a welcome drink are included with every ticket.',
    guides: [
      { id: 'duration', icon: 'clock', label: 'Duration', value: '3 Hours' },
      { id: 'entry', icon: 'users', label: 'Entry Allowed For', value: 'All ages' },
      { id: 'tickets', icon: 'users', label: 'Tickets Needed For', value: '5+ years' },
      { id: 'parking', icon: 'parking', label: 'Parking', value: 'Free, nearby lot' },
    ],
    terms: [
      'Outside food is not permitted, but you may bring your own mat or blanket.',
      'Tickets are non-refundable but transferable up to 24 hours before the event.',
      'Pets are welcome but must be kept on a leash at all times.',
      'Event is weather-dependent; updates will be sent via email if rescheduled.',
    ],
    artists: [
      {
        id: 'artist-1',
        name: 'Artistrypointt Collective',
        role: 'Curators & Live Set',
        photo: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=300&auto=format&fit=crop',
      },
    ],
    ticketTypes: [
      { id: 'general', name: 'General', price: 499, description: 'Lawn access + welcome snack' },
      { id: 'premium', name: 'Premium Mat', price: 899, description: 'Reserved mat closer to the stage' },
    ],
  },
  {
    id: 'ahmedabad-20s-circuit',
    title: 'AHMEDABAD 20s CIRCUIT',
    tagline: 'Fitness Meetup',
    image:
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop',
    location: 'FitZone Arena, SG Highway',
    date: '2026-06-29',
    priceLabel: 'From ₹199',
    badge: null,
    featured: false,
    description:
      'A community fitness meetup for people in their 20s looking to train, connect, and have fun. Expect a mix of group workouts, friendly challenges, and a supportive crowd — all fitness levels welcome. Sessions are led by certified trainers and structured for both beginners and regulars.',
    guides: [
      { id: 'duration', icon: 'clock', label: 'Duration', value: '90 Minutes' },
      { id: 'entry', icon: 'users', label: 'Entry Allowed For', value: '18+ years' },
      { id: 'tickets', icon: 'users', label: 'Tickets Needed For', value: '18+ years' },
      { id: 'parking', icon: 'parking', label: 'Parking', value: 'Free, basement lot' },
    ],
    terms: [
      'Participants are advised to consult a physician before joining if they have pre-existing medical conditions.',
      'Wear appropriate workout attire and footwear.',
      'Monthly pass is valid for 30 days from date of purchase and is non-transferable.',
      'The organizer is not liable for personal injury sustained during sessions.',
    ],
    artists: [
      {
        id: 'artist-1',
        name: 'Coach Aryan Shah',
        role: 'Lead Trainer',
        photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop',
      },
    ],
    ticketTypes: [
      { id: 'general', name: 'General', price: 199, description: 'Single session access' },
      { id: 'monthly', name: 'Monthly Pass', price: 1499, description: 'Unlimited sessions for 30 days' },
    ],
  },
]