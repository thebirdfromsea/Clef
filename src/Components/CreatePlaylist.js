export default function CreatePlaylist(accessToken,name,desc) {




    fetch(`https://api.spotify.com/v1/users/${this.props.user}/playlists`, {

        body: `{\"name\":${name},\"description\":${desc},\"public\":false}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        method: 'POST'
    }).then(response => response.json())
}
            
       
       
          



