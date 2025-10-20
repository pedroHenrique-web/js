//nested conditions
var age = 66;

console.log(`u are ${age} years old`);

if( age == 16 || age >= 67){
    console.log('optional vote');
}else if(age >= 18){
    console.log('mandatory vote');
}else{
    console.log('not vote');
}
