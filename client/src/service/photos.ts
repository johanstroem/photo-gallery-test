export type PhotoId = number

export type Photo = {
  large: string
  medium: string
  small: string
}

export type Person = {
  id: string
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
  fetch('https://randomuser.me/api/?inc=dob,email,gender,login,name,picture&results=50')
    .then((res) => res.json())
    .then((res) => mapResponseObject(res))
    // .catch((err) => console.error('Error fetching users', err))

const mapResponseObject = (res: {
  info: any // eslint-disable-line @typescript-eslint/no-explicit-any
  results: any[] // eslint-disable-line @typescript-eslint/no-explicit-any
}): PersonsResponse => ({
  info: res.info,
  results: res.results.map((a) => ({
    id: a.login.uuid,
    age: a.dob.age,
    email: a.email,
    gender: a.gender,
    name: `${a.name.first} ${a.name.last}`,
    photo: {
      large: a.picture.large,
      medium: a.picture.medium,
      small: a.picture.thumbnail,
    },
  })),
})
