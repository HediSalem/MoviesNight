import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDQ1YWE3MWE5NDM2MWY3ODliNWMzMWM2MjMyZTU2MiIsInN1YiI6IjY0ZjI0MzAxNzdkMjNiMDEyZThhOTY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bxP2YzlPGQvHyO0Rotr1qGU0wfEil6TKnu6JpXBICpQ",
  },
});

export const thisWeeksMovies = async () => {
  try {
    const response = await instance.get(
      "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const topRatedMovies = async () => {
  try {
    const response = await instance.get(
      "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const upcomingMovies = async () => {
  try {
    const response = await instance.get(
      "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2023&release_date.lte=2023"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await instance.get(`/3/movie/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieCreditsById = async (id) => {
  try {
    const response = await instance.get(`/3/movie/${id}/credits`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getVideosById = async (id) => {
  try {
    const response = await instance.get(`/3/movie/${id}/videos`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await instance.get(`/3/search/movie?query=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchActor = async (query) => {
  try {
    const response = await instance.get(`/3/search/person?query=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
