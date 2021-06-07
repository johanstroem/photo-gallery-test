# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Solution
### Description
A simple mobile-first web-application built around the mock user service [randomuser.me](https://randomuser.me/). The app fetches and displays pictures of users together with their information.

### Technical
This mobile-first web application is built with React using TypeScript for static type checking and Styled-Components for layout and styling.
The app features a global state for storing information about the currently viewed users and pagination state. The state is created and managed using Reacts Context API.

## Future development
- Improving the navigation header by:
  - Adding a search input for text filtering users by name.A search input for text filtering users by name.
  - Adding filters for filtering users by properties such as age, gender etc.
- Create cache for previously fetched results to avoid unnecessary requests.
- Adding tests

## Running the project

### Cloning the repository
Create a local copy of this repository by running
`git@github.com:johanstroem/photo-gallery-test.git`

### Installing dependencies
Install the project dependencies by navigation to the `photo-gallery-test` catalog
and run `yarn install`

### Running the development server

`yarn start` Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Building the project

`yarn build` Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
