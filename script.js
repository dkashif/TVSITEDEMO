const tvShows = [
    { title: "Breaking Bad", genre: "drama", rating: 9.5 },
    { title: "Friends", genre: "comedy", rating: 8.9 },
    { title: "Game of Thrones", genre: "fantasy", rating: 9.3 },
    { title: "The Mandalorian", genre: "sci-fi", rating: 8.7 },
    { title: "Stranger Things", genre: "sci-fi", rating: 8.8 },
    { title: "The Office", genre: "comedy", rating: 8.9 },
    { title: "Sherlock", genre: "drama", rating: 9.1 },
    { title: "The Witcher", genre: "fantasy", rating: 8.2 },
    { title: "Arrow", genre: "action", rating: 7.5 },
    { title: "The Flash", genre: "action", rating: 7.7 }
];

function getRecommendations() {
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const recommendations = tvShows.filter(show => show.genre === genre && show.rating >= rating);

    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    if (recommendations.length > 0) {
        recommendations.forEach(show => {
            const showElement = document.createElement('div');
            showElement.classList.add('show');
            showElement.innerText = `${show.title} (Rating: ${show.rating})`;
            recommendationsDiv.appendChild(showElement);
        });
    } else {
        recommendationsDiv.innerText = 'No recommendations found for the selected genre and rating.';
    }
}
