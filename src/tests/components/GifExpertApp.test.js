import React from 'react';
const { shallow } = require("enzyme")
const { default: GifExpertApp } = require("../../GifExpertApp")

describe('Pruebas con el componente GifExpertApp', () => {
    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['Dragon ball', 'game of thrones'];
        const wrapper = shallow(<GifExpertApp  defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    

})
