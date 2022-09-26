const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '#add your api key here',
		'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
	}
};

fetch('https://ultimate-tennis1.p.rapidapi.com/live_scores', options)
	.then(response => response.json())
    .then(obj => {
        const list = obj.matches;
            
        list.map((item) => {
            const values = Object.values(item)
            const tournament = item.Tournament
            const round = item.Round
            const homeplayer = values[0]
            const awayplayer = values[3]
            const awayScore = values[9]
            const homeScore = values[10]
            let awaySetOne = "0"
            let homeSetOne = "0"
            let awaySetTwo = "0"
            let homeSetTwo = "0"
            let awaySetThree= "0"
            let homeSetThree = "0"
            let awaySetFour = "0"
            let homeSetFour = "0"
            let awaySetFive = "0"
            let homeSetFive = "0"
            if (values[12] == "None") {
                awaySetOne = "0"
            } else {
                awaySetOne = values[12]
            }
            if (values[13] == "None") {
                homeSetOne = "0"
            } else {
                homeSetOne = values[13]
            }
            if (values[14] == "None") {
                awaySetTwo = "0"
            } else {
                awaySetTwo = values[14]
            }
            if (values[15] == "None") {
                homeSetTwo = "0"
            } else {
                homeSetTwo = values[15]
            }
            if (values[16] == "None") {
                awaySetThree = "0"
            } else {
                awaySetThree = values[16]
            }
            if (values[17] == "None") {
                homeSetThree = "0"
            } else {
                homeSetThree = values[17]
            }
            if (values[18] == "None") {
                awaySetFour = "0"
            } else {
                awaySetFour = values[18]
            }
            if (values[19] == "None") {
                homeSetFour = "0"
            } else {
                homeSetFour = values[19]
            }
            if (values[20] == "None") {
                awaySetFive = "0"
            } else {
                awaySetFive = values[20]
            }
            if (values[21] == "None") {
                homeSetFive = "0"
            } else {
                homeSetFive = values[21]
            }
            const game =
            `<div class = "match">
                <div>${tournament}</div>
                <div>${round}</div>
                <div class = "away">${awayplayer}</div> <div class = "away"><h3 class = "sets">${awaySetOne} ${awaySetTwo} ${awaySetThree} | ${awayScore}</h3></div>
                </br>
                <div class = "home">${homeplayer}</div> <div class = "home"><h3 class = "sets">${homeSetOne} ${homeSetTwo} ${homeSetThree} | ${homeScore}</h3></div>
            </div>
            </br>
            </br>`

            if (tournament.includes("US Open") || tournament.includes("Australia")
            || tournament.includes("Wimbledon") || tournament.includes("Rolland")) {
                const game =
                `<div class = "match">
                	<div>${tournament}</div>
                	<div>${round}</div>
                	<div class = "away">${awayplayer}</div> <div class = "away"><h3 class = "sets">${awaySetOne} ${awaySetTwo} ${awaySetThree} ${awaySetFour} ${awaySetFive}| ${awayScore}</h3></div>
                	</br>
                	<div class = "home">${homeplayer}</div> <div class = "home"><h3 class = "sets">${homeSetOne} ${homeSetTwo} ${homeSetThree} ${homeSetFour} ${homeSetFive} | ${homeScore}</h3></div>
            	</div>
            	</br>
            	</br>`
                
            }
                
            
            
            document.querySelector('.games').innerHTML += game
        })
    })
    .catch(err => console.error(err));
