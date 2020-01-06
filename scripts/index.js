var apiKey = "api-key=K5yXDyKWAGaa7d3N8d3Z1vBxZvfp3u92";
var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

var articleContainer = $(".articleContainer").clone();

$(document).ready(function() {
    //remove template (doing this for speed not good practice)
    $(".articleContainer").remove();
    
    //add event listener for search button
    $("#searchArticles").on("click", function(event) {
        event.preventDefault();
        clearCurrentArticles();

        //do nothing if there is no search term
        if($("#search-term").val() === "") return;

        if($("#start-year").val() !== "" && $("#end-year").val() !== "") {
            //do queryAll search
            queryAll();
        } else if($("#start-year").val() !== "") {
            //do single start year query
            //added the function call for strtYear only
            withStrtYear();
        } else if($("#end-year").val() !== "") {
            //do single end year query
            ////added the function call for endYear only
            withEndYear();
        } else {
            //do search term query only
            console.log("search term alone");
        }
    });

    $("#clearSearchHistory").on("click", function(event) {
        event.preventDefault();
        clearCurrentArticles(event);
    });


});

function clearCurrentArticles() {
    $(".articleContainer").remove();
}

function queryAll() {
    let searchTerm = $("#search-term").val().trim();
    let numberOfRecords = $("#numberOfRecords").val();
    let startYear = $("#start-year").val().trim();
    let endYear = $("#end-year").val().trim();

    let queryBuilder = `${baseURL}q=${searchTerm}&begin_date=${startYear}1231&end_date=${endYear}0101&${apiKey}`;

    let articles = [];
    $.ajax({
        url: queryBuilder,
        method: 'GET'
    }).then(function(response) {
        //push proper number of articles into articles array
        for(let i=0; i<numberOfRecords; i++) {
            articles.push(response.response.docs[i]);
        }

        renderArticleInfo(articles);
    });
}

//Use this function to render elements to the top articles
function renderArticleInfo(articles) {
    articles.forEach((item, index) => {
        let addArticleInfo = articleContainer.clone();

        addArticleInfo.find(".articleIndicator").text(index+1);
        addArticleInfo.find(".headerText").text(item.headline.main);
        addArticleInfo.find(".dateTime").text(item.pub_date);
        addArticleInfo.find(".mediaType").text(`Media Type: ${item.type_of_material}`);
        addArticleInfo.find(".abstract").text(item.abstract);

        $("#top-articles").append(addArticleInfo);
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


