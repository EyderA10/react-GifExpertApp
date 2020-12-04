import React, { useState } from 'react';
import PropTypes  from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState(''); // ''

    const handleInputChange = (e) => {
        const value = e.target.value;
        setinputValue(value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
            setinputValue('');
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>{inputValue}</p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
