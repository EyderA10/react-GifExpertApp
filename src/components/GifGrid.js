import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
 import GifGridItem from './GifGridItem';
 import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {


    const { data, loading } = useFetchGifs( category );
   
    return (
        <div>
            <h3 className="animate__animated animate__delay-2s 2s">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando Gifs..</p>}

            <div className="card-grid">

                {
                    data.map(({ title, url, id }) => {

                        return <GifGridItem
                            key={id}
                            title={title}
                            url={url}
                            id={id}
                        />

                    })
                }


            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
