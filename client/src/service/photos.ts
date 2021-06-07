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


export type Pagination = {
  page: number
  results: number
  seed: string
}

type PaginatedResponse<T> = {
  info: Pagination
  results: T[]
}

type PersonsResponse = PaginatedResponse<Person>

const INCLUDED_PROPS = ['dob','email','gender','login','name','picture']
const NUMBER_RESULTS = 50

export const getPhotos = async (page: number): Promise<PersonsResponse> =>
  fetch(`https://randomuser.me/api/?inc=${INCLUDED_PROPS.join(',')}&page=${page}&results=${NUMBER_RESULTS}&seed=zington`)
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
