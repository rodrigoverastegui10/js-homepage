

const movies = [
    {
        "title": "The Dark Knight",
        "author": "Jonathan Nolan, Christopher Nolan",
        "released": "07/18/2008",
        "genres": ["Action", "Crime", "Drama"]
    },
    {
        "title": "Point Break",
        "author": "W. Peter Iliff",
        "released": "07/12/1991",
        "genres": ["Action", "Crime", "Thriller"]
    },
    {
        "title": "Wall Street",
        "author": "Stanley Weiser, Oliver Stone",
        "released": "12/11/1987",
        "genres": ["Drama"]
    },
    {
        "title": "The Devil's Advocate",
        "author": "Jonathan Lemkin, Tony Gilroy",
        "released": "10/17/1997",
        "genres": ["Drama", "Mystery", "Thriller"]
    },
    {
        "title": "Goodfellas",
        "author": "Nicholas Pileggi, Martin Scorsese",
        "released": "09/19/1990",
        "genres": ["Biography", "Crime", "Drama"]
    }
]

const movieList = document.querySelector('#movies')

movies.forEach(movies => {
    const li = document.createElement('li') // create a new li element
    movieList.append(li) // append the li element to the ol element

    const {title, author, released, genres} = movies

    

    li.innerHTML =  `
    <span class="title">${title}</span>
    <span class="author">${author}</span>
    <span class="released">${released}</span>
    <ul></ul>
`
    const ul = li.querySelector('ul')
    genres.forEach(genre => {
        const genreLi = document.createElement('li')
        genreLi.textContent = genre
        ul.append(genreLi)
    })
})

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let message = "";
if (isMorning) {
    message = "Good morning!";
} else if (isAfternoon) {
    message = "Good afternoon!";
} else if (isEvening) {
    message = "Good evening!";
}

document.getElementById('welcome').textContent = message;


document.addEventListener("DOMContentLoaded", function () {
    const key = "It's a secret to everybody."; 
    
    localStorage.setItem(key, ' Zelda ');
});

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const nextbutton = document.querySelector('#next');
const previousbutton = document.querySelector('#prev');
    nextbutton.addEventListener('click', () =>{
        currentImage = (currentImage +1) % urls.length;
        showImages();
});
    previousbutton.addEventListener('click', () => {
        currentImage = (currentImage -1 + urls.length) % urls.length;
        showImages();
    });


    setInterval(() => {
        // code to run EVERY 5 seconds
        currentImage = (currentImage + 1) % urls.length;
        showImages();
    }, 5000);

    
    

