/*jshint node:true*/
'use strict';

module.exports = humans;

function humans() {
  // See http://humanstxt.org/Standard.html for more information about
  // humans.txt format

  var team = [
    'Santiago Ferreira (@san650 at Twitter and Github)',
    'Diego Acosta (@acostami at Twitter and Github)',
    'Samanta de Barros (@sdebarros at Github)',
    'Daniel Gomez de Souza (@eldano at Twitter and Github)'
  ];

  var thanks = [
    'WyeWorks (@wyeworks at Twitter)'
  ];

  var site = [
    'Standards: HTML5, CSS3, ES2015',
    'Components: EmberJS, node',
    'Software: VIM, ember-cli'
  ];

  var note = 'This app was made with ♥';

  return {
    team: team,
    thanks: thanks,
    site: site,
    note: note
  };
}
