import React from 'react';
const { shallow } = require("enzyme")
const { default: GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas con el componente GifGridItem', () => {

    const title = 'Game of thrones';
    const url = 'https://url.com';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe mostrar el componente correctamente', () => {


        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    })

    test('debe de obtener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        //console.log(img.props().src);

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);


    })

    test('debe tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        // console.log(div.props());
        const prop = div.prop('className');
        expect(prop.includes('animate__fadeIn')).toBe(true);
    })
    
    
    
})
