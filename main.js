const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
    const passenger = {
        name: name,
        wallet: wallet,
        isStruggling: isStruggling
    };

    if (seat === 'back') {
        struggleBus.push(passenger)
    }
    else if (seat === 'front') {
        struggleBus.unshift(passenger);
    }
};

const unloadPassenger = (bus, seat) => {
    //remove passenger from bus
    //return passenger object
    if (seat === 'front') {
        return bus.shift();
    }
    else if (seat === 'back') {
        return bus.pop();
    }
};

const allAboard = (bus) => {
    const busFare = 5;
    const validPassengers = [];

    bus.forEach((passenger) => {
        if (passenger.wallet >= busFare) {
            passenger.wallet -= busFare;
            validPassengers.push(passenger);
        };
    });
    return validPassengers;
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const busBuilder = (bus) => {
    let domString = '';
    for (let i = 0; i < bus.length; i++) {
        domString += `<div class="bus-seat">`;
        domString += `<h4>${bus[i].name}</h4>`;
        domString += `<p>${bus[i].wallet}</p>`;
        domString += `<p>${bus[i].isStruggling}</p>`;
        domString +=  `</div>`;
    };
    printToDom('the-bus', domString);
};

const init = () => {
    addPassenger('Michael', 3, true, 'front');
    addPassenger('Zoe', 20, false, 'back');
    addPassenger('Greg', 4, false, 'back');
    addPassenger('Saul', 12, true, 'front');
    addPassenger('Matt', 5, true, 'front');
    addPassenger('Matt B', 15, true, 'front');
    addPassenger('Matt A', 3, true, 'front');
    addPassenger('Matt C', 7, true, 'front');

    const firstPassenger = unloadPassenger(struggleBus, 'front');
    
    const busPeople = allAboard(struggleBus);

    busBuilder(busPeople);
};

init();