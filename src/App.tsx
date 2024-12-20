import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './RootLayout/RootLayout'
import Home from './pages/home/Home'
import DetailMovie from './pages/detailMovie/DetailMovie'
import { useEffect, useState } from 'react'
import IMovie from './interfaces/IMovie'

function App() {
  const [moviesList, setMoviesList] = useState<IMovie[]>([])
  const [search, setSearch] = useState<string>("")
  console.log("API Key:", import.meta.env.VITE_API_KEY);
  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };

      const baseURL = "https://api.themoviedb.org/3/";
      const endpoint = !search
        ? "movie/top_rated?"
        : `search/movie?query=${encodeURIComponent(search)}&`;
      const url = `${baseURL}${endpoint}language=en-US&page=1`;
      console.log(url)
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data)
        if (data.results && Array.isArray(data.results)) {
          setMoviesList(data.results);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const timeout = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timeout);
  }, [search])


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout search={search} setSearch={setSearch} />}>
        <Route index element={<Home moviesList={moviesList} setMoviesList={setMoviesList}/>} />
        <Route path="movie/:id" element = {<DetailMovie moviesList={moviesList}/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
