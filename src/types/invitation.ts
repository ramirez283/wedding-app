export type Theme = 'elegant' | 'minimal' | 'bohemian' | 'floral' | 'playful'

export interface ItineraryItem {
  time: string
  event: string
}

export interface Song {
  title: string
  artist: string
  spotifyUrl?: string
}

export interface Invitation {
  id: string
  couple: {
    bride: string
    groom: string
  }
  date: string
  time: string
  location: {
    name: string
    address: string
    coordinates: [number, number]
  }
  couplePhoto: string
  photos: string[]
  dressCode: string
  giftRegistry: string
  itinerary: ItineraryItem[]
  song: Song
  message: string
  theme: Theme
}
