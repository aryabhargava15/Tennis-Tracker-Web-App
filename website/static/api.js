var button = document.getElementById('button');
button.onclick = getPlayer;

function getPlayer() {
    var playerName = this.getAttribute('data-name')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '#add your api key here',
            'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
        }
    };
    
    fetch('https://ultimate-tennis1.p.rapidapi.com/live_leaderboard/100', options)
        .then(response => response.json())
        .then(obj => {
            const list = obj.data;
            
            list.map((item) => {
                if (playerName == item.Name) {
                    document.querySelector('.players').innerHTML = `<h3 align = "center"> Rank: ${item.Rank} | Current ATP Points: ${item.Points} </h3>`
                }
            })
        })
        .catch(err => console.error(err));
}
