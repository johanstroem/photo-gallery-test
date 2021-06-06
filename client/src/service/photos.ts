export type PhotoId = number

export type Photo = {
  large: string
  medium: string
  small: string
}

export type Person = {
  email: string
  gender: string
  age: number
  name: string
  photo: Photo
}

type PaginatedResponse<T> = {
  info: {
    page: number
    results: number
  }
  results: T[]
}

type PersonsResponse = PaginatedResponse<Person>

export const getPhotos = async (): Promise<PersonsResponse> =>
  fetch('https://randomuser.me/api/?results=50')
    .then((res) => res.json())
    .catch((err) => console.error('Error fetching users', err))
