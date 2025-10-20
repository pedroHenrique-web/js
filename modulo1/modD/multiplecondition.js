var now = new Date();
var dayWeek = now.getDay();
/* getDay()
    0 = sunday
    1 = monday
    2 = tuesday
    3 = wednesday
    4 = thursday
    5 = friday
    6 = saturday
*/ 
switch (dayWeek) {
    case 0:
        console.log('sunday');
        break;
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    default:
        console.log('U are a alien?');
        
        break;
}

