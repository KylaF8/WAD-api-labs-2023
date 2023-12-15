export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=4e1b91c8ff522c3dcea6831f59fdae1a&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };