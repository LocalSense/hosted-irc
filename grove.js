var util = require('util')
  , path = require('path')
  , forever = require('forever');
        
var ircd = new (forever.Monitor)(path.join(__dirname, 'lib/ircd.js/bin/ircd.js'));
ircd.start();
util.puts('running irc server.');

var web = new (forever.Monitor)(path.join(__dirname, 'lib/subway/subway'));
web.start();
util.puts('running client ui.');
