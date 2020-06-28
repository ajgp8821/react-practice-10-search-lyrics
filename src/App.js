import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import From from './components/Form';
import Song from './components/Song';
import Info from './components/Info';
import Error from './components/Error';
import Spinner from './components/Spinner';

function App() {

  // Definir el state
  const [ searchLyiric, setSearchLyric ] = useState({});
  const [ lyric, setLiryc ] = useState('');
  const [ info, setInfo ] = useState({});
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (Object.keys(searchLyiric).length === 0 ) return;
    // console.log('setSearchLyric', setSearchLyric)
    const getApiLetter = async () => {
      // console.log('a buscar se ha dicho')
      const { artist, song } = searchLyiric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      // Mostrar el spinner
      setLoading(true);
      // const [ lirycApi, informationApi ] = 
      await Promise.all([
        axios(url),
        axios(url2)
      ]).then((values) => {
        setError(false);
        const lirycApi = values[0];
        const informationApi = values[1];
        setLiryc(lirycApi.data.lyrics);
        setInfo(informationApi.data.artists[0]);
        // console.log(informationApi.data.artists[0]);
      }).catch((err) => {
        setError(true);
        return;
      });

      // ocultar el spinner
      setLoading(false);
    };
    getApiLetter();
  }, [searchLyiric]);

  return (
    <Fragment>
      <From
        setSearchLyric={setSearchLyric}
      />
      { error ?
          <Error
            message="Cancion o Grupo no encontrados"
          />
        :
        loading ?
          <Spinner />
        :
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Info
                info={info}
              />
            </div>
            <div className="col-md-6">
              <Song
                lyric={lyric}
              />
            </div>
          </div>
        </div> }
    </Fragment>
  );
}

export default App;
