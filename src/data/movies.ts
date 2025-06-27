import { Movie, ContentRow } from '../types';

// Featured movie for hero section
export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'The Dark Knight',
  description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  genre: ['Action', 'Crime', 'Drama'],
  year: 2008,
  rating: 'PG-13',
  duration: '2h 32m',
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
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    year: 2010,
    rating: 'PG-13',
    duration: '2h 28m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    year: 2014,
    rating: 'PG-13',
    duration: '2h 49m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'The Matrix',
    description: 'A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
    genre: ['Action', 'Sci-Fi'],
    year: 1999,
    rating: 'R',
    duration: '2h 16m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1034
  },
  {
    id: 'movie-4',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genre: ['Crime', 'Drama'],
    year: 1994,
    rating: 'R',
    duration: '2h 34m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 923
  },
  {
    id: 'movie-5',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genre: ['Drama'],
    year: 1994,
    rating: 'R',
    duration: '2h 22m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1156
  },
  {
    id: 'movie-6',
    title: 'Goodfellas',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
    genre: ['Biography', 'Crime', 'Drama'],
    year: 1990,
    rating: 'R',
    duration: '2h 26m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 834
  },
  {
    id: 'movie-7',
    title: 'Fight Club',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    genre: ['Drama'],
    year: 1999,
    rating: 'R',
    duration: '2h 19m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 712
  },
  {
    id: 'movie-8',
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man.',
    genre: ['Drama', 'Romance'],
    year: 1994,
    rating: 'PG-13',
    duration: '2h 22m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 945
  },
  {
    id: 'movie-9',
    title: 'The Godfather',
    description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
    genre: ['Crime', 'Drama'],
    year: 1972,
    rating: 'R',
    duration: '2h 55m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1289
  },
  {
    id: 'movie-10',
    title: 'The Lord of the Rings',
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth.',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    year: 2001,
    rating: 'PG-13',
    duration: '2h 58m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1067
  },
  {
    id: 'movie-11',
    title: 'Star Wars',
    description: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy.',
    genre: ['Adventure', 'Fantasy', 'Sci-Fi'],
    year: 1977,
    rating: 'PG',
    duration: '2h 1m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 998
  },
  {
    id: 'movie-12',
    title: 'Casablanca',
    description: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband.',
    genre: ['Drama', 'Romance', 'War'],
    year: 1942,
    rating: 'PG',
    duration: '1h 42m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 678
  }
];

// Content rows for different categories
export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      movies[0], // Inception
      movies[2], // The Matrix
      movies[4], // The Shawshank Redemption
      movies[1], // Interstellar
      movies[3], // Pulp Fiction
      movies[8], // The Godfather
      movies[9], // The Lord of the Rings
      movies[10], // Star Wars
      movies[7], // Forrest Gump
      movies[5], // Goodfellas
      movies[6], // Fight Club
      movies[11], // Casablanca
    ]
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: [
      movies[1], // Interstellar
      movies[0], // Inception
      movies[2], // The Matrix
      movies[3], // Pulp Fiction
      movies[4], // The Shawshank Redemption
      movies[5], // Goodfellas
    ]
  },
  {
    id: 'popular',
    title: 'Popular on PROJECT',
    movies: [
      movies[8], // The Godfather
      movies[4], // The Shawshank Redemption
      movies[9], // The Lord of the Rings
      movies[2], // The Matrix
      movies[10], // Star Wars
      movies[7], // Forrest Gump
      movies[3], // Pulp Fiction
      movies[0], // Inception
      movies[5], // Goodfellas
      movies[1], // Interstellar
      movies[6], // Fight Club
      movies[11], // Casablanca
    ]
  },
  {
    id: 'action',
    title: 'Action & Adventure',
    movies: [
      movies[0], // Inception
      movies[2], // The Matrix
      movies[9], // The Lord of the Rings
      movies[10], // Star Wars
      movies[1], // Interstellar
    ]
  },
  {
    id: 'drama',
    title: 'Drama',
    movies: [
      movies[4], // The Shawshank Redemption
      movies[8], // The Godfather
      movies[3], // Pulp Fiction
      movies[6], // Fight Club
      movies[7], // Forrest Gump
      movies[11], // Casablanca
    ]
  },
  {
    id: 'sci-fi',
    title: 'Sci-Fi',
    movies: [
      movies[0], // Inception
      movies[1], // Interstellar
      movies[2], // The Matrix
      movies[10], // Star Wars
    ]
  },
  {
    id: 'classic',
    title: 'Classic Movies',
    movies: [
      movies[8], // The Godfather
      movies[11], // Casablanca
      movies[4], // The Shawshank Redemption
      movies[3], // Pulp Fiction
      movies[5], // Goodfellas
      movies[6], // Fight Club
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