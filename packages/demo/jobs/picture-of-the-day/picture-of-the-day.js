module.exports = {
  onRun: function (config, dependencies, jobCallback) {
  dependencies.easyRequest.JSON(config.url, function (err, jsonBody, response)
  {
    console.log("complete");
    //config.url
      if (err) {
        var errMsg = err || "ERROR: Couldn't access the web page at " + config.url;
        jobCallback(errMsg);
      } else {
        console.log("Hi");
//string [random](name,jobTitle,headshot)=new string[153];
console.log(jsonBody);
//var random=jsonBody.length-1;
console.log("complete");
//var jsonBody=[random];
//var jsonBody=Math.floor(Math.random()* (num-1))+1;

var random = getRandomInt(0, jsonBody.length - 1);
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
ftech('https://www.willowtreeapps.com/api/v1.0/profiles')

*/
var name=jsonBody[random].firstName + " " + jsonBody[random].lastName;
console.log(name);
var jobTitle=jsonBody[random].jobTitle;
var headshot=jsonBody[random].headshot;
console.log(headshot.url);
jobCallback(null, {imageSrc: headshot.url, name: name, jobTitle: jobTitle});
console.log(headshot);
}
});

//null
//sizes 
//sizes 
}
};
/*   */
/*
function shuffle(jsonBody)
function shuffle(jsonBody) {
    for (let i = jsonBody.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return jsonBody;
}


*/


/*
 "projects": {
        "interval": 3600000,
        "project_id": "project_id",
        "project_name": "project_name",
        "name": "name",
        "role": "role",
        "url":"https://www.pivotaltracker.com/services/v5/projects/{2184602}"



*/
 //{"row" : 4, "col" : 3, "width" : 2, "height" : 3, "widget" : "projects",      "job" : "projects",             "config": "projects"},



 /*
module.exports = {
  onRun: function (config, dependencies, jobCallback) {
var request = require('request');
var options = {
  url: 'https://www.pivotaltracker.com/services/v5/projects/2221411',
  headers: {
    'X-TrackerToken': '84acba298ee6cfab48cca43ecfdfdd35'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");

   jobCallback(null, {projects,projects,number_of_done_iterations_to_show, start_time: start_time, created_at: created_at, point_scale:point_scale,current_iteration_number:current_iteration_number});
    console.log(projects)
  } 
}
console.log("callback");

request(options,callback)
  }
}


 */