import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {


    return (
        <div className="card animate__animated animate__fadeIn">
            <img
                src={url}
                alt={title}
            />
            <p className="animate__animated animate__bounce">{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem

/*
1. Enzyme
2.Enzyme to json
3.debe de mostrar el componente correctamente
    *shallow
    *wrapper
    *wrapper.toMatchSnapshots()
*/
