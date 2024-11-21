// if (localStorage.highscore == undefined) {
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('highscoreName', "empty")
    
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('secondName', "empty")
    
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('thirdName', "empty")
    
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('fourthName', "empty")
    
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('fifthName', "empty")
    
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('sixthName', "empty")
    
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('seventhName', "empty")
    
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('eighthName', "empty")
    
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('ninthName', "empty")
    
//     localStorage.setItem('points0', 0)
//     localStorage.setItem('tenthName', "empty")
//     }

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

let newObject;



export function saveScore () {
    const pointsArray = [];
    const player = {
        name: localStorage.name,
        points: localStorage.points 
       }

    const oldPlayers = JSON.parse(localStorage.getItem('all'));

    if (oldPlayers !== null) {
        oldPlayers.forEach(element => {
    
            pointsArray.push(element);

        })
    }
    
    pointsArray.push(player);

    localStorage.setItem('all', JSON.stringify(pointsArray));

    newObject = JSON.parse(localStorage.getItem('all'));
    console.log(newObject);

    newObject.sort((a,b) => b.points - a.points );
    newObject.splice(7);
    console.log(newObject)

}

export function displayLeaderboard () {

    const arrayLength = newObject.length;

    
    switch (arrayLength) {
        case 7:
            displayYes(7)
            break;
        case 6:
            displayYes(6)
            break;
        case 5:
            displayYes(5)
            break;
        case 4:
            displayYes(4)
            break;
        case 3:
            displayYes(3)
            break;
        case 2:
            displayYes(2)
            break;
        case 1:
            displayYes(1)
            break;
    }


    
    





    function displayYes (value) {
            console.log(value);
            
            p1.textContent = `${newObject[0].name} : ${newObject[0].points}`

            if (value >= 2) {
                p2.textContent = `${newObject[1].name} : ${newObject[1].points}`

            }
            if (value >= 3) {
                p3.textContent = `${newObject[2].name} : ${newObject[2].points}`

            }
            playersList.innerHTML = `
            <p class="top-players">${value >= 4 ? newObject[3].name : "" } : ${value >= 4 ? newObject[3].points : "" } </p>
            <p class="top-players">${value >= 5 ? newObject[4].name : "" } : ${value >= 5 ? newObject[4].points : "" } </p>
            <p class="top-players">${value >= 6 ? newObject[5].name : "" } : ${value >= 6 ? newObject[5].points : "" } </p>
            <p class="top-players">${value >= 7 ? newObject[6].name : "" } : ${value >= 7 ? newObject[6].points : "" } </p>
            `;
            
        

    }


}
