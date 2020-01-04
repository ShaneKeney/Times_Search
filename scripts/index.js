var apiKey = "api-key=K5yXDyKWAGaa7d3N8d3Z1vBxZvfp3u92";
var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

$(document).ready(function() {
    //add event listener for search button
    $("#searchArticles").on("click", function(event) {
        event.preventDefault();

        //do nothing if there is no search term
        if($("#search-term").val() === "") return;

        if($("#start-year").val() && $("#end-year").val()) {
            //do queryAll search
            console.log('queryAll');
            queryAll();
        } else if($("#start-year").val()) {
            //do single start year query
            console.log("start year only");
        } else if($("#end-year").val()) {
            //do single end year query
            console.log("start end only");
        } else {
            //do search term query only
            console.log("search term alone");
        }
    });
});

function queryAll() {
    let searchTermPlaceholder = "Obama";
    let numberOfRecords = 5;
    let startYear = "2009";
    let endYear = "2010";

    let queryBuilder = `${baseURL}q=${searchTermPlaceholder}&begin_date=${startYear}1231&end_date=${endYear}0101&${apiKey}`;

    $.ajax({
        url: queryBuilder,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
    });
}