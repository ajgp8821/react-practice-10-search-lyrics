import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Form = ({ setSearchLyric }) => {

    const [ search, setSearch ] = useState({
        artist: '',
        song: '',
    });
    const [ error, setError ] = useState(false);

    const { artist, song } = search;

    // Función a cada input para leer su contenido
    const setState = e => {
        // console.log(e.target.value);
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    // Consultar las apis
    const searchInformation = e => {
        e.preventDefault();

        if (artist.trim() === '' || song.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // Pasar al componente principal
        setSearchLyric(search);

    };

    return (
        <div className="bg-info">
            { error ?
                <Error
                    message="Todos los campos son obligatorios"
                />
            :
                null
            }
            <div className="container">
                <div className="row">   
                    
                    <form
                    onSubmit={searchInformation}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscando Letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={setState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre Canción"
                                            onChange={setState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

Form.propTypes = {
    setSearchLyric: PropTypes.func.isRequired,
}
 
export default Form;
