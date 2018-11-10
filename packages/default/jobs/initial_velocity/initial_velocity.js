



module.exports = {
  onRun: function (config, dependencies, jobCallback) {
 // dependencies.easyRequest.JSON(config.url, function (err, jsonBody, response)
var request = require('request');
var options = {
  url: 'https://www.pivotaltracker.com/services/v5/projects/2221411',
  headers: {
   // 'Content-Type': 'application/json',
    'X-TrackerToken': '84acba298ee6cfab48cca43ecfdfdd35',
  }
};
let url = 'https://www.pivotaltracker.com/services/v5/projects/2221411';
let initial_velocity='10';
/*

let project_type='private';
console.log("project-type");
let name='Test Project';
let created_at='created_at":"2018-10-31T15:02:15Z"';
*/
/*

 "created_at":"2018-10-31T15:02:15Z",
*/

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    var initial_velocity=info.initial_velocity;
   //var project=[];
   jobCallback(null, {url: url,initial_velocity:initial_velocity});
    /*
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
    */


  }
}
console.log(options);
request(options, callback);
  }
};
