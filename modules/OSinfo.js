var os = require('os');
var colors = require('colors');

var time = require('../modules/time.js');


function getOSinfo() {
	var type = os.type();
	switch(type) {
		case 'Darwin':
			type = 'OSX';
			break;
		case 'Windows_NT':
			type = 'Windows';
			break;
		case 'Linux':
			type = 'Linux';
			break;
		default:
			type = type;
			break;
	}
	
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = time.uptime;
	var userInfo = os.userInfo();
	
	console.log('System: '.grey, type);
	console.log('Release:'.red, release);
	console.log('CPU:'.blue, cpu);
	console.log('Uptime:'.green, uptime);
	console.log('User Name:'.yellow, userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;


