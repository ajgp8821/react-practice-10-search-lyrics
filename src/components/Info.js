import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ info }) => {
    
    if (Object.keys(info).length === 0) return null;
    // console.log( info )

    const { strBiographyES, strArtistThumb, strGenre, strStyle, strTwitter, strWebsite,
            strLastFMChart, strCountry, strFacebook } = info
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="cadr-text">Género: {strGenre}</p>
                <p className="cadr-text">Estilo: {strStyle}</p>
                <p className="cadr-text">Ciudad: {strCountry}</p>
                <h2 className="cadr-text">Biografía:</h2>
                <p className="cadr-text">{strBiographyES}</p>

                <p className="cadr-text">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                    <a href={`${strWebsite}`} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-laptop text-dark"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

Info.propTypes = {
    info: PropTypes.object.isRequired,
}
 
export default Info;
