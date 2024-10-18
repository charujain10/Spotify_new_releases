const clientId = '0b51ef82929d4b6095bb94a812309389';
const clientSecret = '41ca793e01214dafb0d691df1e7363ea';

async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
}

async function getNewReleases() {
    const accessToken = await getAccessToken();

    const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    const data = await response.json();
    console.log("This is the data received: ");
    console.log(data);
    return data;
}

async function displayNewReleases() {
    const newReleases = await getNewReleases();
    const newReleasesContainer = document.getElementById('new-releases');

    newReleases.albums.items.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.innerHTML = 
        `<div style="width:300px;height:300px;padding:10px;margin:10px;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:20px;">
        <img style="border:5px solid white;" src="${album.images[0].url}" alt="Girl in a jacket" width="120" height="120">
        <h2 style="height:50px;padding:5px;overflow: hidden;text-overflow: ellipsis;">${album.name}</h2>
        <p>${album.artists[0].name}</p>
        <div style="border:2px solid green;opacity:0.1;background-color:#dfdfdf;width:300px;height:300px;position:absolute"></div>
        </div>`;
        albumElement.className = 'album-card';

        newReleasesContainer.appendChild(albumElement);
    });
}

displayNewReleases();
