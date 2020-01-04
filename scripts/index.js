var apiKey = "K5yXDyKWAGaa7d3N8d3Z1vBxZvfp3u92";
var searchWord = "trump";
var noofRecords = 3;

//you can pass the input field of years and then concatenate lets say "0101" to strtyear and "1231" to endYear
//because the begin_date and end_date filters in the API accepts only dates in the format yyyymmdd 
// var strtYear = strtYear + "0101"
// var endYear = endYear + "1231"
var strtYear = 20200101; 
var endYear = 20191231; 

withStrtYear();
withEndYear();

function withStrtYear(){
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchWord + "&begin_date=" 
        + strtYear + "&api-key=" + apiKey ;
    
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
    
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchWord + 
                "&end_date=" + endYear + "&api-key=" + apiKey ;
    
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

