// namespace
const movieApp = {};

// variables
const key = '23db1bd216a71e5e4ce8b41563ff87e8';

movieApp.listener = () => {
  $('form').on('submit', function(e){
    e.preventDefault();
    // clear the results after new search
    $('.results').empty();
    const userInput = $('#contentName').val();

    if (isNaN(userInput)){
      alert('Please enter a year in integer form');
      $('form').find('input:text').val('');
    } else {
      movieApp.search(userInput);
    }

  })
}

// Ajax call
movieApp.search = (year) => {
  $.ajax({
    url: `https://api.themoviedb.org/3/discover/movie`,
    dataType: `json`,
    method: `GET`,
    data: {
      api_key: key,
      language: "en-US",
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
      page: "1",
      primary_release_year: `${year}`,
    }
  }).then (function(apiResults){
    movieApp.displayContent(apiResults);
  }).catch (function(error){
    alert(`error: ${error}`);
  })
}

// display function
movieApp.displayContent = (movies) => {
  const moviesArray = movies.results

  moviesArray.forEach((eachMovie)=>{
    $('.results').append(`<div class="movieCard"> 
      <h3>Title: ${eachMovie.title}</h3> 
      <p>Overview: ${eachMovie.overview}</p> 
      <p>Review Average Score: ${eachMovie.vote_average}/10</p> 
    </div>`);
  })
}

// initialize app
movieApp.init = () => {
  movieApp.listener();
}

// Doc ready
$(document).ready(function(){
  movieApp.init();
})