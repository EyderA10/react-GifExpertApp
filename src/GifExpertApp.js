import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball']);

    // const handleAdd = () => {

    //     setCategories(['HunterxHunter',...categories]);

    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            <ol>

                {
                    categories.map((category) => {
                       return <GifGrid 
                       key={category}
                       category={category}
                       />
                    })
                }

            </ol>
        </div>
    )
}

export default GifExpertApp;
