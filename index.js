const moment = require ('moment');
const chalk = require ('chalk');


var secDay = (((parseInt(moment().format('H')))*60*60) + ((parseInt(moment().format('m')))*60) + parseInt(moment().format('s')));
console.log(secDay);



console.log('It is ' + chalk.blue(moment().format('dddd,MMMM Do, YYYY, h:mm:ss a')))
console.log('It is the ' + chalk.magenta(moment().format('DDDo'))+' day of the year')
console.log('It is '+ chalk.cyan(secDay)+' seconds into the day')
if(moment().isDST() =="true"){
  console.log('It '+ chalk.green('is')+ ' during Daylight Savings Time');
}
else{
  console.log('It '+ chalk.green('is not')+ ' during Daylight Savings Time');
}
if(moment().isLeapYear() =="true"){
  console.log('It '+ chalk.green('is')+ ' a Leap Year');
}
else{
  console.log('It '+ chalk.green('is not')+ ' a Leap Year');
}
