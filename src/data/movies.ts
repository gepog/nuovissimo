import { Movie, ContentRow } from '../types';

// Featured movie for hero section
export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI-Powered Workflow Builder',
  description: 'Transform your text into dynamic multimedia content with our revolutionary AI-powered platform. Create engaging videos, audio, and interactive experiences from simple text prompts.',
  genre: ['Technology', 'Innovation', 'AI'],
  year: 2024,
  rating: 'PG',
  duration: '2h 15m',
  thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_uvijqjytzy8ywizk7lrc_1.png',
  backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_uvijqjytzy8ywizk7lrc_1.png',
  videoUrl: '/videos/sample-video.mp4',
  trailerUrl: '/videos/sample-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

// Main movies array
export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'Revenue Analytics Dashboard',
    description: 'Comprehensive analytics platform showing revenue growth, user engagement metrics, and performance indicators with beautiful visualizations.',
    genre: ['Business', 'Analytics', 'Dashboard'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Visual Import System',
    description: 'Advanced import modal interface showcasing seamless data integration with multiple format support and real-time preview capabilities.',
    genre: ['Technology', 'UI/UX', 'Integration'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'Flow Builder Pro',
    description: 'Professional workflow automation tool featuring drag-and-drop interface with conditional logic and advanced flow management capabilities.',
    genre: ['Automation', 'Workflow', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: '/src/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png',
    backdrop: '/src/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1034
  },
  {
    id: 'movie-4',
    title: 'Advanced Flow Designer',
    description: 'Next-generation flow design interface with intelligent node connections, automated routing, and collaborative editing features.',
    genre: ['Design', 'Collaboration', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: '/src/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 923
  },
  // Additional movies using existing assets for variety
  {
    id: 'movie-5',
    title: 'AI Content Generator',
    description: 'Revolutionary AI-powered content creation platform that transforms simple text inputs into rich multimedia experiences.',
    genre: ['AI', 'Content', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_uvijqjytzy8ywizk7lrc_1.png',
    backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_uvijqjytzy8ywizk7lrc_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1156
  },
  {
    id: 'movie-6',
    title: 'Business Intelligence Suite',
    description: 'Comprehensive business intelligence platform with advanced analytics, reporting, and data visualization capabilities.',
    genre: ['Business', 'Intelligence', 'Analytics'],
    year: 2024,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 834
  }
];

// Content rows for different categories
export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      movies[0], // Revenue Analytics Dashboard
      movies[2], // Flow Builder Pro
      movies[4], // AI Content Generator
      movies[1], // Visual Import System
      movies[3], // Advanced Flow Designer
      movies[5], // Business Intelligence Suite
    ]
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: [
      movies[4], // AI Content Generator
      movies[5], // Business Intelligence Suite
      movies[0], // Revenue Analytics Dashboard
      movies[2], // Flow Builder Pro
    ]
  },
  {
    id: 'popular',
    title: 'Popular on PROJECT',
    movies: [
      movies[2], // Flow Builder Pro (highest likes)
      movies[4], // AI Content Generator
      movies[3], // Advanced Flow Designer
      movies[0], // Revenue Analytics Dashboard
      movies[5], // Business Intelligence Suite
      movies[1], // Visual Import System
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Innovation',
    movies: [
      movies[1], // Visual Import System
      movies[4], // AI Content Generator
      movies[2], // Flow Builder Pro
      movies[3], // Advanced Flow Designer
    ]
  },
  {
    id: 'business',
    title: 'Business Solutions',
    movies: [
      movies[0], // Revenue Analytics Dashboard
      movies[5], // Business Intelligence Suite
      movies[2], // Flow Builder Pro
      movies[3], // Advanced Flow Designer
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