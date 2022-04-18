export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getRandomColor,
    padNum,
    getDayName,
    getMonthName,
    handleTimestamp,
    // changeTimestamp,
    handleClock,
};

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function padNum(num) {
    return (num > 9) ? num + '' : '0' + num;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// getDayName('12/25/2021', 'he') ->  'יום שבת'
function getDayName(date, locale) {
    date = new Date(date);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}


function getMonthName(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
}


function handleTimestamp(timestamp) {
    const date = new Date(timestamp);

    const dayIdx = date.getDay();
    const shortDay = _getShortDay(dayIdx);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();


    // return shortDay + ' ' + day + '/' + month + '/' + year;
    return shortDay + ' ' + day;

}


function handleClock(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let ampm;
    if (hours >= 12) ampm = 'PM';
    else ampm = 'AM';
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    //  console.log(minutes) 

    return hours + ':' + minutes + ` ${ampm}`;
}


function _getLongDay(dayIdx) {
    switch (dayIdx) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}


function _getShortDay(dayIdx) {
    switch (dayIdx) {
        case 0:
            return 'Sun';
        case 1:
            return 'Mon';
        case 2:
            return 'Tue';
        case 3:
            return 'Wed';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
    }
}