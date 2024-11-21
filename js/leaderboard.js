if (localStorage.highscore == undefined) {
    localStorage.setItem('highscore', 0)
    localStorage.setItem('highscoreName', "empty")
    
    localStorage.setItem('second', 0)
    localStorage.setItem('secondName', "empty")
    
    localStorage.setItem('third', 0)
    localStorage.setItem('thirdName', "empty")
    
    localStorage.setItem('fourth', 0)
    localStorage.setItem('fourthName', "empty")
    
    localStorage.setItem('fifth', 0)
    localStorage.setItem('fifthName', "empty")
    
    localStorage.setItem('sixth', 0)
    localStorage.setItem('sixthName', "empty")
    
    localStorage.setItem('seventh', 0)
    localStorage.setItem('seventhName', "empty")
    
    localStorage.setItem('eighth', 0)
    localStorage.setItem('eighthName', "empty")
    
    localStorage.setItem('ninth', 0)
    localStorage.setItem('ninthName', "empty")
    
    localStorage.setItem('tenth', 0)
    localStorage.setItem('tenthName', "empty")
    }

const firstPlace = document.querySelector('.first');
const secondPlace = document.querySelector('.second');
const thirdPlace = document.querySelector('.third');
const playersList = document.querySelector('.players-List');

const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

firstPlace.append(p1);
secondPlace.append(p2);
thirdPlace.append(p3);



export function saveScore () {

    const player = {
        name: localStorage.name,
        points: localStorage.points
    }
    const pointsArray = [];


    for (let i = 0; i < 7; i++) {

        const previousPlayer = {
            name: `${localStorage.name[i]}`,
            points: `${localStorage.points[i]}`
        }
        pointsArray.push(previousPlayer);
    }
    
    pointsArray.push(player);


    pointsArray.sort((a,b) => b.points - a.points );
    pointsArray.splice(7);

    for (let i = 0; i < pointsArray.length; i++) {

        localStorage.setItem(`points${i}`, pointsArray[i].points);
        localStorage.setItem(`name${i}`, pointsArray[i].name);

    }


}

export function displayLeaderboard () {

    p1.textContent = `${localStorage.name0} : ${localStorage.points0}`
    p2.textContent = `${localStorage.name1} : ${localStorage.points1}`
    p3.textContent = `${localStorage.name2} : ${localStorage.points2}`


    playersList.innerHTML = `
                            <p class="top-players">${localStorage.name3} : ${localStorage.points3} </p>
                            <p class="top-players">${localStorage.name4} : ${localStorage.points4} </p>
                            <p class="top-players">${localStorage.name5} : ${localStorage.points5} </p>
                            <p class="top-players">${localStorage.name6} : ${localStorage.points6} </p>
                            `;




}
