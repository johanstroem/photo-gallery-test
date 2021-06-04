export type PhotoId = number

// TODO: Fix correct typing of randomUser response object
export type Photo = {
  id: PhotoId
  name: string
}

type PaginatedResponse<T> = {
  info: {
    page: number
    results: number
  }
  results: T[] 
}

type PhotosResponse = PaginatedResponse<Photo>

export const getPhotos = async (): Promise<PhotosResponse> => 
  fetch('https://randomuser.me/api/?results=50')
    .then((res) => res.json())
    .catch((err) => console.error('Error fetching users', err))

