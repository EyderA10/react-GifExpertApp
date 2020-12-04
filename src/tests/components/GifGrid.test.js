import React from 'react';
import { useFetchGifs } from '../../Hooks/useFetchGifs';
const { shallow } = require("enzyme")
const { default: GifGrid } = require("../../components/GifGrid")
jest.mock('../../Hooks/useFetchGifs');

describe('Pruebas con gif grid', () => {

    const category = 'Hola mundo';

    test('Se debe mostrar correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('GifGridItem').length).toBe(0);
    })

    test('debe de mostrar items cuando se carga imagenes useFetch', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://urlc.af.com',
            title: 'titluos'
        },
        {
            id: '123',
            url: 'https://urlc.af.com',
            title: 'titluos'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
    
    
})
