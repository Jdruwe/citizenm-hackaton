export interface Hotel {
  name: string
  shortDescription: string
  heroImage: string
  mainImage?: string
  location: {
    lat: number
    lon: number
    city: string
    country: string
    continent: string
  }
}
