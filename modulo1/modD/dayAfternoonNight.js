var now = new Date();
var hour = now.getHours();
var timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'night';

console.log(`it´s ${hour} hours, in the ${timeOfDay}`);

if(hour < 12){
    console.log(`good ${timeOfDay}`);
}else if(hour < 18){
    console.log(`good ${timeOfDay}`);
}else{
    console.log(`good ${timeOfDay}`);
}