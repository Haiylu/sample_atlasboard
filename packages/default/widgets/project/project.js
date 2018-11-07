widget = {
  //runs when we receive data from the job
  onData: function (el, data) {

    //The parameters our job passed through are in the data object
    //el is our widget element, so our actions should all be relative to that
    //var chart=new Barchart(data);
    /*
picture of the day.js 
// API call 
//pass data


    */
    if (data.title) {
      $('h2', el).text(data.title);
    }

    $('.content', el).html(data.name);

 
  
  }
};
