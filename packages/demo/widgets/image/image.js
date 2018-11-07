widget = {
  onData: function (el, data) {
    if (data.title) {
      $('h2', el).text(data.title);
    }

    $('.content', el).html(
      "<img class='featured-image' src='" + data.imageSrc + "'/>" + "<h2>" + data.name + '<current_iteration_number>' + "</h2>" + "<h2>" + data.jobTitle + '<jobTitle>' + "</h2>"
              
    );

  }
};



/*


"projects":"projects",
     "api_token":"84acba298ee6cfab48cca43ecfdfdd35", 
     "interval":3600000,
     "project_name": "project_name",
     "number_of_done_iterations_to_show": 12,
     "initial_velocity": 10,
     "start_time": "2018-10-29T07:00:00Z",
     "created_at":"2018-10-31T15:02:15Z",
     "current_iteration_number": 1,
     "point-scale": "0,1,2,3",
     "url":"https://www.pivotaltracker.com/services/v5/projects/2221411"


*/

//"<h2 class='name' '" + data.name + "'/>" +  "<jobTitle class='jobTitle' '" + data.jobTitle + "'/>" 
/*
 "<img class='featured-image' src='" + data.imageSrc + "'/>" +
                            "<h2>" + data.name +"</h2>" +
                           "<h2>" + data.jobTitle + "</h2>"

*/

/*

 "<img class='featured-image' src=' " + data.imageSrc + "<h2>" + data.name + "<name>" +  data.jobTitle"</>"
*/

/*
          "<h2>" + data.name + "<name>" + data.jobTitle + "</cite></h2>"
*/

/*

"project_id": "project_id",
        "project_name": "project_name",
        "name": "name",
        "role": "role",
        "url":"https://www.willowtreeapps.com/api/v1.0/profiles"


*/



/*
var $ = require('cheerio');

module.exports = function(config, dependencies, job_callback) {
    var logger = dependencies.logger;
    var options = {
        url: config.url
    };

    dependencies.request(options, function(err, response, body) {
        if (err || !response || response.statusCode != 200) {
            job_callback('err on http request');
        } else {
            var result = $('.primary_photo img', body).attr('src');
            job_callback(null, {projects: projects, : config.widgetTitle });
        }
    });
};



*/