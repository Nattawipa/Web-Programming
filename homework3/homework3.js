const API_KEY = "AIzaSyDLRdnFCYofzUQtdoZ9rUoPWRqVq8PgjAs"; //API key

$("document").ready(function () //starter of JQuery
{
        $("#loading").hide(); //hide loading symbol 
        $("#button").click(function () //when button click
        {
                $("#loading").show(); //show loading symbol
                const receive_input = $("#input").val(); //create a variable to receive an input value
                $("#video_list").empty(); //clear previous search list to be empty
                const url_googleapi = `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${receive_input}&type=video&key=${API_KEY}`; //create a variable to keep google_api
                $.get(url_googleapi, function ({ items })  //RESTful web services and keep as object array
                {
                        for (let i = 0; i < items.length; i++) //loop to keep the data for each item list
                        {
                                const title = items[i].snippet.title; //keep title
                                const videoId = items[i].id.videoId; //keep videoID
                                const thumbnails = items[i].snippet.thumbnails; //keep thumbnails
                                $("#video_list").append //append in show result section
                                //show list section consists title, thumbnails, and URL
                                (`<div class="card">
                                        <p>Title: ${title}</p> 
                                        <img src="${thumbnails.medium.url}">
                                        <p>URL: <a href="http://www.youtube.com/embed/${videoId}" target="_blank">www.youtube.com/embed/${videoId} </a></p>
                                   </div>`);
                        }
                        $("#loading").hide(); //hide loading symbol
                });
        });
});
