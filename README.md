<h1 align="center">Welcome to feed-app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## About the app

The application initially displays the shows and allows the user to access to the show details related to the selected show.

![show-list-light](https://user-images.githubusercontent.com/67164680/130362165-a24d1c72-569f-484c-97f8-b1172b9337c9.png)

Additionally, redux was used to manage states and some components were tested.
As an extra, the dark-light theme option and the use of localstorage for data persistence also were added.

![show-list-dark](https://user-images.githubusercontent.com/67164680/130362203-501401ed-2cda-40fc-af62-4b8793a06e53.png)

Just click on the show to go to the details section:

![show-detail-light](https://user-images.githubusercontent.com/67164680/130362234-d6afa8d6-2bfb-436a-91c6-39af816cfd4e.png)

Which also has its dark version:

![show-detail-dark](https://user-images.githubusercontent.com/67164680/130362249-46d49e8f-e270-4d3d-a16e-51d9756e1b23.png)

The button at the right corner makes possible to return to the shows list section, this action is achieved using the Route component from the react-router-dom library.
For styling, the tailwindcss library was used as it makes it easy to implement theme selection throughout the application.

The following cases were taken into consideration,

given a wrong url the following message will be displayed:

![fail-fetch-dark](https://user-images.githubusercontent.com/67164680/130362336-870a6d6a-f5bd-426e-9825-4516afe0022a.png)

When trying to access an undefined route, a Not found message is delivered but you can still go to the show lists using the back to shows button.

![not-found-dark](https://user-images.githubusercontent.com/67164680/130362355-8bcddf9c-f5d8-41b9-a7ba-a3919a2c63ef.png)

All possible cases comes with their own respective dark-light theme option.

The application is made up of three main folders: Components, hooks and store and the UI folder, where there are reusable components.

![folders](https://user-images.githubusercontent.com/67164680/130362433-c974e713-ee1e-4dc4-b616-a4c41ad62fdf.png)

A custom hook were created to modify the theme, enabling refactoring and delegating specific tasks outside the components.
The store folder contains the store management system (redux) which was used to centralize states, update and make them available through the components.
The App.js file makes the call to obtain the information and renders the components.
A possible improvement is to clean the App.js file, so that it only renders a single component (creating a Layout component for example) making it clear that this is its only function following the practice of making a component as specific and simple as possible.


## Author

👤 **Guido Stifani**
