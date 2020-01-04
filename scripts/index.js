var apiKey = "api-key=K5yXDyKWAGaa7d3N8d3Z1vBxZvfp3u92";
var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

function queryAll() {
    let searchTermPlaceholder = "Obama";
    let numberOfRecords = 5;
    let startYear = "2009";
    let endYear = "2010";

    let queryBuilder = `${baseURL}q=${searchTermPlaceholder}&begin_date=${endYear}&end_date=${startYear}&${apiKey}`;

    $.ajax({
        url: queryBuilder,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
    });
}

console.log('opened');
queryAll();