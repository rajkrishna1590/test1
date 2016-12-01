// process.argv.forEach(function(val, index, array) {
//     if (index > 1) {
//         if (val) {
//             var arg = val.split('=');
//             process.env[arg[0]] = arg[1];
//         }
//     }
// });

//Openshift file Don't change this
//require('@risingstack/trace');
// your application's code
var ipaddress = process.env.RCC_NODEJS_IP || "localhost";
var port = process.env.RCC_NODEJS_PORT || 3000;
var AppServer = require('./Server/main')(ipaddress, port);

// var timer_ipaddress = process.env.RCC_TIMER_NODEJS_IP || "0.0.0.0";
// var timer_port = process.env.RCC_TIMER_NODEJS_PORT || 8087;
// var timerServer = require('./TimerServer/timerServer')(timer_ipaddress, timer_port);