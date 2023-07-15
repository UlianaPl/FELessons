import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from "axios";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import loupe from "../../img/svg/loupe.svg"

const baseSearchUrl = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'b03d508a9e788070ca877f98f3f8bbba';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SearchPopUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  async function fetchData(search = null) {
    axios.get(baseSearchUrl, {
      params: {
        api_key: apiKey,
        query: search,
      } })
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          setError(error.message);
        })
  }

  useEffect(() => {
    fetchData(search)
  }, []);

  const closeModal = () => {
    setOpen(false);
    setSearch('');
    setMovies([]);
  }

  const handleSearch = (event) => {
    event.preventDefault()
    fetchData(search)
  }

  if (error)  {
    return (
        <div>
          <img src={loupe} alt="search" onClick={handleOpen} />
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <button onClick={closeModal}>x</button>
              <form onChange={handleSearch}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
              </form>
              <div className="error"><h2>{ error }</h2></div>
            </Box>
          </Modal>
        </div>
    )
  } else if (movies) {
    const items = movies.map((movie, index) =>
        <div key={index} className="movie">
          <Link to={"/movie/" + movie.id} onClick={closeModal}><h2>{movie.title}</h2></Link>
        </div>
    );
  return (
      <div>
        <img src={loupe} alt="search" onClick={handleOpen} />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onChange={handleSearch}>
              <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
            </form>
            <div className="search">{ items }</div>
          </Box>
        </Modal>
      </div>
  )}
}

export default SearchPopUp;