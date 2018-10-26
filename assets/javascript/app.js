// Built by LucyBot. www.lucybot.com

/*$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});*/
$(document).ready(function(){


$("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("Entered Click:");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var searchString = $("#search-form").val();
    console.log("Search String is :"+searchString);
    queryURL += '?' + $.param({
    'api-key': "e1eddc2a9a2346c5b384a98c5d1db2e4",
    'q': searchString
    });

    console.log("The url is "+  queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        
        console.log(response);
      });
});
});    
    
    