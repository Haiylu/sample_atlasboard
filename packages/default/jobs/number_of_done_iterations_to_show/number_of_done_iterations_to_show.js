/*module.exports = {
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

/*
ftech('https://www.willowtreeapps.com/api/v1.0/profiles')

*/
/*
var name=jsonBody.name;
console.log(name);
var project_type=jsonBody.project_type;
//=jsonBody[random].headshot;
console.log(project_type);
jobCallback(null, {name:name,project_type:project_type,created_at:created_at});
console.log(name);
}
});

//null
//sizes 
//sizes 
}
};
*/
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
let number_of_done_iterations_to_show ='12';
console.log("number_of_done_iterations_to_show");
//let created_at='created_at":"2018-10-31T15:02:15Z"';
//let created_at='created_at';

/*//
/*
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
})
*/

 //"created_at":"2018-10-31T15:02:15Z",

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    var number_of_done_iterations_to_show=info.number_of_done_iterations_to_show;
   //var project=[];
   jobCallback(null, {url: url,number_of_done_iterations_to_show:number_of_done_iterations_to_show});
    /*
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
    */


  }
}
console.log(options);
console.log(callback);
request(options, callback);
  }
};



/*

 url: 'https://www.pivotaltracker.com/services/v5/projects/2221411',
  headers: {
    'X-TrackerToken': '84acba298ee6cfab48cca43ecfdfdd35'
*/
