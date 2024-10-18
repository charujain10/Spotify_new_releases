# Spotify- New Releases
 A simple web app that uses Spotify's Web API to display the latest music releases. Built as an experimental project to integrate Spotify's APIs with dynamic webpage design. Features new music releases fetched directly from Spotify’s platform and displayed in an interactive and user-friendly layout.

---

## Overview
This project is a simple web application that utilizes the Spotify Web API to display the latest music releases. The application fetches data on newly released albums from Spotify and presents it in an interactive and visually appealing layout.

## Features
- Fetches and displays the latest music releases using Spotify's New Releases API.
- Each album includes album artwork, title, and artist name.
- Simple and user-friendly interface for exploring new music.

## Tech Stack
- **HTML/CSS/JavaScript:** The frontend of the project is built using these technologies to display and style the content.
- **Spotify Web API:** The Spotify API is used to retrieve information about the newest music releases.

## Getting Started

### Prerequisites
- You'll need a [Spotify Developer Account](https://developer.spotify.com/dashboard/login) to obtain `clientId` and `clientSecret` for accessing the Spotify Web API.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Spotify-New-Releases-Explorer.git
    ```
2. Open the `script.js` file and replace the following with your own Spotify credentials:
    ```js
    const clientId = 'your-client-id';
    const clientSecret = 'your-client-secret';
    ```

3. Run the project:
    - Simply open `index.html` in your browser to see the web app in action.

## How It Works
1. The app first sends a request to Spotify's token endpoint to retrieve an access token.
2. Using the access token, it then makes a request to Spotify's `New Releases` API to get the latest album releases.
3. The received data is dynamically displayed on the webpage, showing album cover images, album names, and artist details.

## Example Code

Here is a snippet of the main functionality in the app:

```js
async function getNewReleases() {
    const accessToken = await getAccessToken();

    const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    const data = await response.json();
    return data;
}

async function displayNewReleases() {
    const newReleases = await getNewReleases();
    const newReleasesContainer = document.getElementById('new-releases');

    newReleases.albums.items.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.innerHTML = 
        `<div style="width:300px;height:300px;padding:10px;margin:10px;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:20px;">
        <img style="border:5px solid white;" src="${album.images[0].url}" alt="Album Art" width="120" height="120">
        <h2>${album.name}</h2>
        <p>${album.artists[0].name}</p>
        </div>`;
        newReleasesContainer.appendChild(albumElement);
    });
}
```


## Credits
- Developed by Charu Jain
- Thanks to [Spotify](https://developer.spotify.com/documentation/web-api) for the API.

---
