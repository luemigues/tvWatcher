# TV Watcher

## Demo link:

Access my site at https://tv-watcher.netlify.app/

## About The App

TV Watcher is a React built application that uses the TV Maze API as a resource. With TV Watcher you can search for your favorite shows and store them as favorites on the client. You can then see the upcoming episode from your favorite shows.

## Technologies & Resources

- ReactJS
- Redux
- Redux-persist
- Styled-components
- Styled-icons

## Setup

1.  Clone the Github repository and move to the local repository through the command line.
2.  Install packages, create and serve build.

```bash
npm install
npm run build
npm install -g serve
serve build
```

## Approach

The main architecture for the application was based in structuring reusable components with separation between presentational components, which have the main objective of rendering the logic gathered and passed by the container components. This allows for presentational components to be reused by other components processing a different logic but with the same visual outcome, as can be observed with the use of the TV Show card and display through the TV Show search results and Favorite sections.

With Redux as a headliner for state management, it allowed for state persistence in the local storage for saving favorites, as well as sharing the data store easily through the different components.

For designing the components, I used Styled Components, a package that allows styling through the combination of CSS and template literals, allowing more flexibility into passing dynamic properties through the component props. I also used this approach as it facilitates the use of global styling variables, which could later be used for theming or simply re-styling the app.

In regards to the UX and UI, TV Watcher was designed in favor of facilitating the user’s experience and serving the data with a simplistic yet stylish approach.

Through the development of the application, my initial intention was to use Axios as a resource for fetching resources from the Tv Maze API. Yet, having to handle a large response from gathering the full show schedule, I decided to make a switch to Fetch API for external calls, as it allowed me to cache the results on the site, something that needs to be handled through a separate package with Axios. Considering this application only handles simple GET requests to an API, it seemed reasonable to leave Axios behind.

In respect of the steps followed for the development, my approach was to first investigate the TV Maze API, to get knowledge of the resources and data available for display. As of that, I proceeded to sketch some wireframes and eventually a visual mockup of the different sections and functionalities the application would contain.

Once the mockup was ready, this helped design the architecture, what components would be needed, which ones would present the data and which would manage state. With that, I established the main states that would be needed to be stored and shared through the components.

All in all, TV Watcher was developed with the idea of having a simple and performant application that can be continued to be built over time.
