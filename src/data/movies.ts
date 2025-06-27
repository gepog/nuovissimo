import { Movie, ContentRow } from '../types';

// Featured movie for hero section
export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'Stranger Things',
  description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
  genre: ['Sci-Fi', 'Horror', 'Drama'],
  year: 2016,
  rating: 'TV-14',
  duration: '51m',
  thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
  backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
  videoUrl: '/videos/sample-video.mp4',
  trailerUrl: '/videos/sample-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

// Main movies array
export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    genre: ['Drama', 'History', 'Biography'],
    year: 2016,
    rating: 'TV-MA',
    duration: '58m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Money Heist',
    description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2017,
    rating: 'TV-MA',
    duration: '70m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'The Witcher',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    genre: ['Fantasy', 'Adventure', 'Drama'],
    year: 2019,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1034
  },
  {
    id: 'movie-4',
    title: 'Dark',
    description: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
    genre: ['Sci-Fi', 'Mystery', 'Drama'],
    year: 2017,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 923
  },
  {
    id: 'movie-5',
    title: 'Bridgerton',
    description: 'Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.',
    genre: ['Romance', 'Drama', 'Period'],
    year: 2020,
    rating: 'TV-MA',
    duration: '62m',
    thumbnail: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1156
  },
  {
    id: 'movie-6',
    title: 'Ozark',
    description: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2017,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 834
  },
  {
    id: 'movie-7',
    title: 'The Queen\'s Gambit',
    description: 'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.',
    genre: ['Drama', 'Coming-of-Age'],
    year: 2020,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/6111565/pexels-photo-6111565.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/6111565/pexels-photo-6111565.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1289
  },
  {
    id: 'movie-8',
    title: 'Squid Game',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.',
    genre: ['Thriller', 'Drama', 'Action'],
    year: 2021,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1567
  },
  {
    id: 'movie-9',
    title: 'Lupin',
    description: 'Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.',
    genre: ['Crime', 'Drama', 'Mystery'],
    year: 2021,
    rating: 'TV-MA',
    duration: '52m',
    thumbnail: 'https://images.pexels.com/photos/3137809/pexels-photo-3137809.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/3137809/pexels-photo-3137809.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 945
  },
  {
    id: 'movie-10',
    title: 'The Umbrella Academy',
    description: 'A dysfunctional family of superheroes comes together to solve the mystery of their father\'s death, the threat of the apocalypse and more.',
    genre: ['Superhero', 'Comedy', 'Drama'],
    year: 2019,
    rating: 'TV-14',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 723
  },
  {
    id: 'movie-11',
    title: 'Narcos',
    description: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.',
    genre: ['Crime', 'Biography', 'Drama'],
    year: 2015,
    rating: 'TV-MA',
    duration: '57m',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1098
  },
  {
    id: 'movie-12',
    title: 'Black Mirror',
    description: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.',
    genre: ['Sci-Fi', 'Thriller', 'Anthology'],
    year: 2011,
    rating: 'TV-MA',
    duration: '60m',
    thumbnail: 'https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1345
  }
];

// Content rows for different categories
export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      movies[7], // Squid Game
      movies[6], // The Queen's Gambit
      movies[11], // Black Mirror
      movies[4], // Bridgerton
      movies[10], // Narcos
      movies[2], // The Witcher
      movies[0], // The Crown
      movies[8], // Lupin
      movies[3], // Dark
      movies[1], // Money Heist
      movies[5], // Ozark
      movies[9], // The Umbrella Academy
    ]
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: [
      movies[7], // Squid Game
      movies[8], // Lupin
      movies[4], // Bridgerton
      movies[6], // The Queen's Gambit
      movies[2], // The Witcher
      movies[9], // The Umbrella Academy
    ]
  },
  {
    id: 'popular',
    title: 'Popular on PROJECT',
    movies: [
      movies[7], // Squid Game
      movies[11], // Black Mirror
      movies[6], // The Queen's Gambit
      movies[4], // Bridgerton
      movies[10], // Narcos
      movies[2], // The Witcher
      movies[3], // Dark
      movies[8], // Lupin
      movies[0], // The Crown
      movies[5], // Ozark
      movies[1], // Money Heist
      movies[9], // The Umbrella Academy
    ]
  },
  {
    id: 'drama',
    title: 'Drama Series',
    movies: [
      movies[0], // The Crown
      movies[4], // Bridgerton
      movies[6], // The Queen's Gambit
      movies[3], // Dark
      movies[1], // Money Heist
      movies[5], // Ozark
      movies[8], // Lupin
      movies[10], // Narcos
    ]
  },
  {
    id: 'thriller',
    title: 'Thriller & Crime',
    movies: [
      movies[7], // Squid Game
      movies[1], // Money Heist
      movies[5], // Ozark
      movies[8], // Lupin
      movies[10], // Narcos
      movies[11], // Black Mirror
    ]
  },
  {
    id: 'sci-fi',
    title: 'Sci-Fi & Fantasy',
    movies: [
      featuredMovie, // Stranger Things
      movies[2], // The Witcher
      movies[3], // Dark
      movies[11], // Black Mirror
      movies[9], // The Umbrella Academy
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically based on likes
  }
];

// Helper function to get most liked movies
export const getMostLikedMovies = (movieLikes: Record<string, number>) => {
  return movies
    .map(movie => ({
      ...movie,
      likes: movieLikes[movie.id] || movie.likes || 0
    }))
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 12);
};