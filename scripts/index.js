var apiKey = "api-key=K5yXDyKWAGaa7d3N8d3Z1vBxZvfp3u92";
var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

$(document).ready(function() {
    //add event listener for search button
    $("#searchArticles").on("click", function(event) {
        event.preventDefault();

        //do nothing if there is no search term
        if($("#search-term").val() === "") return;

        if($("#start-year").val() !== "" && $("#end-year").val() !== "") {
            //do queryAll search
            console.log('queryAll');
            queryAll();
        } else if($("#start-year").val() !== "") {
            //do single start year query
            console.log("start year only");
            //added the function call for strtYear only
            withStrtYear();
        } else if($("#end-year").val() !== "") {
            //do single end year query
            console.log("end year only");
            ////added the function call for endYear only
            withEndYear();
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

var searchWord = "trump";
var noofRecords = 3;

//you can pass the input field of years and then concatenate lets say "0101" to strtyear and "1231" to endYear
//because the begin_date and end_date filters in the API accepts only dates in the format yyyymmdd 
// var strtYear = strtYear + "0101"
// var endYear = endYear + "1231"
var strtYear = 20200101; 
var endYear = 20191231; 

function withStrtYear(){
    
    var queryURL = baseURL + "q=" + searchWord + "&begin_date=" + strtYear + "&" + apiKey ;
    
    $.ajax({
    url: queryURL,
    method: "GET"
    })

    .then(function(response) {
        
        console.log(response.response.docs);
        for(var i=0;i<noofRecords;i++){
        console.log(response.response.docs[i]);  
        }
        
    });
}

function withEndYear(){
    
var queryURL = baseURL + "q=" + searchWord + "&end_date=" + endYear + "&" + apiKey ;
    
    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        
        console.log(response.response.docs);
        for(var i=0;i<noofRecords;i++){
        console.log(response.response.docs[i]);  
        }
        
    });
}


