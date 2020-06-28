import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Song = ({ lyric }) => {

    if (lyric.length === 0) return null;
    // console.log(lyric.length)
    return (
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="lyric">{lyric}</p>
        </Fragment>
    );
}

Song.propTypes = {
    lyric: PropTypes.string.isRequired,
}
 
export default Song;
