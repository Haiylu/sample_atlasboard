module.exports = {
  onRun: function (config, dependencies, jobCallback) {
    issues = [{"issueType": "Test failures", "frequency": 28},
      {"issueType": "Broken build", "frequency": 20},
      {"issueType": "Usability Issue", "frequency": 16},
      {"issueType": "Compilation Error", "frequency": 13},
      {"issueType": "Out of Memory", "frequency": 8},
      {"issueType": "Null Pointer", "frequency": 7},
      {"issueType": "XSS Vulnerability", "frequency": 4}];

    jobCallback(null, {issues: issues, title: config.widgetTitle});
  }
};

/*
widget = {

  onData: function (el, data) {
    if (data.title) {
      $('h2', el).text(data.title);
    }

    var $content = $('.content', el);
    $content.empty();

    if (data.issues.length) {
      data.issues.forEach(function (issue) {
        $content.append(
            "<div class='item-container'>" +
              "<div class='issue'>" + issue.issueType + "</div>" +
              "<div class='count'>" + issue.frequency + "</div>" +
            "</div>"
        );
      })
    }
  }
};







module.exports = {
  onRun: function (config, dependencies, jobCallback) {
    issues = [{"issueType": "Test failures", "frequency": 28},
      {"issueType": "Broken build", "frequency": 20},
      {"issueType": "Usability Issue", "frequency": 16},
      {"issueType": "Compilation Error", "frequency": 13},
      {"issueType": "Out of Memory", "frequency": 8},
      {"issueType": "Null Pointer", "frequency": 7},
      {"issueType": "XSS Vulnerability", "frequency": 4}];

    jobCallback(null, {issues: issues, title: config.widgetTitle});
  }
};




({projects,projects,number_of_done_iterations_to_show, start_time: start_time, created_at: created_at, point_scale:point_scale,current_iteration_number:current_iteration_number})


{"row" : 2, "col" : 1, "width" : 2, "height" : 3, "widget" : "keyvaluelist", "job" : "issue-types",         "config": "issue-types"},



*/