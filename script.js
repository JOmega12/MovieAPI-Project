
//variables
const containerFavorite = document.querySelector('.favorite-container');

const containerCollection = document.querySelector('.collection-container');

const collection = document.querySelectorAll('.collection');

// const boxOfLines = document.querySelector('.box-lines');

const aToZLine = document.querySelectorAll('.a-to-z');

const ascendingCollection = document.getElementById('c-asc');

const descendingCollection = document.getElementById('c-desc');

const ascendingFavCollect = document.getElementById('f-asc');

const descendingFavCollect = document.getElementById('f-desc')

const zToALine = document.querySelectorAll('.z-to-a');

let secureBase = 'https://image.tmdb.org/t/p/';
let imageSize = "original"
//movie apis




let movies = [
   //1
   fetch('https://api.themoviedb.org/3/movie/76341?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/453395?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //2
   fetch('https://api.themoviedb.org/3/movie/238?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/361743?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //3
   fetch('https://api.themoviedb.org/3/movie/122?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/299534?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //4
   fetch('https://api.themoviedb.org/3/movie/138843?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/8681?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //5
   fetch('https://api.themoviedb.org/3/movie/438148?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/508947?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //6
   fetch('https://api.themoviedb.org/3/movie/129?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/496243?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //7
   fetch('https://api.themoviedb.org/3/movie/155?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/1891?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //8
   fetch('https://api.themoviedb.org/3/movie/157336?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/635302?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //9
   fetch('https://api.themoviedb.org/3/movie/99861?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/299536?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //10
   fetch('https://api.themoviedb.org/3/movie/299537?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/10195?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //11
   fetch('https://api.themoviedb.org/3/movie/526896?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/338953?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //12
   fetch('https://api.themoviedb.org/3/movie/616037?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/507086?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //13
   fetch('https://api.themoviedb.org/3/movie/718789?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/438148?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //14
   fetch('https://api.themoviedb.org/3/movie/675353?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/634649?api_key=01644eea1dc43bc65a5768e78715c02e'),
   //15
   fetch('https://api.themoviedb.org/3/movie/568124?api_key=01644eea1dc43bc65a5768e78715c02e'),
   fetch('https://api.themoviedb.org/3/movie/580489?api_key=01644eea1dc43bc65a5768e78715c02e'),

];



//this fetches the data
function movieInput() {
Promise
   .all(movies)
   .then((response)=> {
      return Promise.all(response.map((res) => res.json()))
   })
   .then((data) => {
      // const [movie1, movie2]= data;
      // console.log(data);
      Object.entries(data).map((item) => {
         // console.log(item[1].original_title);
         collectionContainer(item);
      })
      aToZee();
      zeeToA();
      aToZeeFav()
      zeeToAFav()
   })
}

movieInput();
// aToZee(boxOfLines);

//this builds the HTML items from data 
function collectionContainer(item) {
   const {poster_path:img, budget, title}= item[1];
   //building the individual box
   const boxLines = document.createElement('div');
   const boxCards = document.createElement('div');
   const movieImage = document.createElement('img');
   const descriptionBox = document.createElement('div');
   const movieName= document.createElement('p');
   const movieBudget= document.createElement('p');
   const favoriteBox = document.createElement('div');
   const star = document.createElement('i');
   const starDescription = document.createElement('span');
   const unfavoriteBox = document.createElement('div');
   const unfavoriteDescription = document.createElement('span');

   boxLines.setAttribute('class', 'box-lines');
   boxLines.setAttribute('data-title', `${title}`);
   boxCards.setAttribute('class', 'box-card');
   movieImage.setAttribute('src', `${secureBase + imageSize + img}`);
   movieImage.setAttribute('alt', 'Movie Image');
   descriptionBox.setAttribute('class', 'description-box');
   movieName.setAttribute('class', 'movieTitle');
   movieBudget.setAttribute('class', 'movieBudget');
   movieName.innerHTML = title;
   movieBudget.innerHTML = `Budget: ${budget}`;
   favoriteBox.setAttribute('class', 'favorite-box');
   star.setAttribute('class', 'fas fa-star');
   starDescription.innerHTML = 'Add to Favorites';
   unfavoriteBox.setAttribute('class', 'unfavorite-box');
   unfavoriteDescription.innerHTML = 'Unfavorite';
   
   
   unfavoriteBox.appendChild(unfavoriteDescription)
   favoriteBox.appendChild(star);
   favoriteBox.appendChild(starDescription);
   descriptionBox.appendChild(movieName);
   descriptionBox.appendChild(movieBudget);
   descriptionBox.appendChild(favoriteBox);
   descriptionBox.appendChild(unfavoriteBox);

   boxCards.appendChild(movieImage);
   boxCards.appendChild(descriptionBox);
   boxLines.appendChild(boxCards);


   containerCollection.appendChild(boxLines);

   favoriteFilter(favoriteBox);
   unfavoriteCards(unfavoriteBox);

   // aToZee(movieName);
   
}


//adds the card individually
function favoriteFilter(favorites) {
   [favorites].forEach((item) => {
      item.addEventListener('click', function() {
         //item.parentElement === descriptionbox
         //item.parentElement.parentElement === boxCard
         //item.parentElement.parentElement.parentElement === boxLines
         console.log(item.parentElement.parentElement.parentElement.parentElement.parentElement);
         if (item.parentElement.parentElement.parentElement.parentElement.parentElement.className === 'collection') {
            containerFavorite.append(item.parentElement.parentElement.parentElement)
         } 
      })
   })
}

function unfavoriteCards(unfavorite) {
   [unfavorite].forEach((item) => {
      item.addEventListener('click', function() {
         //item.parentElement === descriptionbox
         //item.parentElement.parentElement === boxCard
         //item.parentElement.parentElement.parentElement === boxLines
         console.log(item.parentElement.parentElement.parentElement.parentElement.parentElement);
         if (item.parentElement.parentElement.parentElement.parentElement.parentElement.className === 'collection favorite-collection') {
            containerCollection.append(item.parentElement.parentElement.parentElement)
         }
      })
   })
}

function aToZee() {

   const parentHolder = document.querySelector('.collection-container');

   ascendingCollection.addEventListener('click', function() {

   let way = 'asc';

   console.log(parentHolder.childNodes);

   let arrayItems = [];
   parentHolder.childNodes.forEach((item) => {
      if (item.nodeType === 1) {
         arrayItems.push(item)
      } else {
         return 0;
      }
   })
   if (way === 'asc') {
      arrayItems.sort(function (a, b) { 
         if (a.dataset.title === b.dataset.title) {
            return 0;
         } else if (a.dataset.title > b.dataset.title) {
            return 1;
         } else {
            return -1;
         }
      });
   } else {
      arrayItems.sort(function (a, b) {
         if (a.dataset.title === b.dataset.title) {
            return 0;
         } else if (a.dataset.title < b.dataset.title) {
            return 1;
         } else {
            return -1;
         }
      });
   }

   parentHolder.childNodes.forEach(item => item.remove());
   
   arrayItems.forEach(item => parentHolder.append(item));
   })
}

function zeeToA() {
   const parentHolder = document.querySelector('.collection-container');

   descendingCollection.addEventListener('click', function() {

   let way = 'desc';

   console.log(parentHolder.childNodes);

   let arrayItems = [];
   parentHolder.childNodes.forEach((item) => {
      if (item.nodeType === 1) {
         arrayItems.push(item)
      } else {
         return 0;
      }
   })
   if (way === 'asc') {
      arrayItems.sort(function (a, b) { 
         if (a.dataset.title === b.dataset.title) {
            return 0;
         } else if (a.dataset.title > b.dataset.title) {
            return 1;
         } else {
            return -1;
         }
      });
   } else {
      arrayItems.sort(function (a, b) {
         if (a.dataset.title === b.dataset.title) {
            return 0;
         } else if (a.dataset.title < b.dataset.title) {
            return 1;
         } else {
            return -1;
         }
      });
   }

   parentHolder.childNodes.forEach(item => item.remove());
   
   arrayItems.forEach(item => parentHolder.append(item));

   })
}

function aToZeeFav() {
   const parentHolder = document.querySelector('.favorite-container');

   ascendingFavCollect.addEventListener('click', function() {

   let way = 'asc';

   console.log(parentHolder.childNodes);

   let arrayItems = [];
   parentHolder.childNodes.forEach((item) => {
      if (item.nodeType === 1) {
         arrayItems.push(item)
      } else {
         return 0;
      }
   })
   if (way === 'asc') {
      arrayItems.sort(function (a, b) { 
         if (a.dataset.title === b.dataset.title) {
            return 0;
         } else if (a.dataset.title > b.dataset.title) {
            return 1;
         } else {
            return -1;
         }
      });
   } else {
      arrayItems.sort(function (a, b) {
         if (a.dataset.title === b.dataset.title) {
            return 0;
         } else if (a.dataset.title < b.dataset.title) {
            return 1;
         } else {
            return -1;
         }
      });
   }

   parentHolder.childNodes.forEach(item => item.remove());
   
   arrayItems.forEach(item => parentHolder.append(item));

   })
}

function zeeToAFav() {
   const parentHolder = document.querySelector('.favorite-container');

   descendingFavCollect.addEventListener('click', function() {

   let way = 'desc';

   console.log(parentHolder.childNodes);

   let arrayItems = [];
   parentHolder.childNodes.forEach((item) => {
      if (item.nodeType === 1) {
         arrayItems.push(item)
      } else {
         return 0;
      }
   })
   if (way === 'asc') {
      arrayItems.sort(function (a, b) { 
         if (a.dataset.title === b.dataset.title) {
            return 0;
         } else if (a.dataset.title > b.dataset.title) {
            return 1;
         } else {
            return -1;
         }
      });
   } else {
      arrayItems.sort(function (a, b) {
         if (a.dataset.title === b.dataset.title) {
            return 0;
         } else if (a.dataset.title < b.dataset.title) {
            return 1;
         } else {
            return -1;
         }
      });
   }

   parentHolder.childNodes.forEach(item => item.remove());
   
   arrayItems.forEach(item => parentHolder.append(item));

   })
}