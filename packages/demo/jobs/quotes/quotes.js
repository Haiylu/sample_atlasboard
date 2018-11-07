module.exports = {
  onRun: function (config, dependencies, jobCallback) {
    var _ = dependencies.underscore;
    var quotes = _.first(_.shuffle(config.quotes), config.limit || 10);
    jobCallback(null, {quotes: quotes, title: config.widgetTitle});
  }
};

/*
module.exports = {
  onRun: function (config, dependencies, jobCallback) {
    var _ = dependencies.underscore;
    var url = _.first(_.shuffle(config.url), config.limit || 2);
    jobCallback(null, {url: imageSrc , title: config.widgetTitle, name: config.name});

*/