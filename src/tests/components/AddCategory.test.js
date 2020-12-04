import React from 'react';
import AddCategory from '../../components/AddCategory';
const { shallow } = require("enzyme")


describe('Pruebas en addcategory', () => {

    const setCategories = jest.fn();
    let wrapeer;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapeer = shallow(<AddCategory setCategories= {setCategories}/>);

    })

    test('debe de mostrarse correctamente', () => {

        expect(wrapeer).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapeer.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: {value}});

        expect(wrapeer.find('p').text().trim()).toBe(value);
    })

    test('no debe de postear el onsubmit', () => {
        
        wrapeer.find('form').simulate('submit', { preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();
        //toHaveBeenCalledTimes(2) se llama 2 veces
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        //1. simular el inputchange
        const input = wrapeer.find('input');
        const value = 'Goku';
        input.simulate('change', {target: {value}});
        
        //2. simular el submit
        wrapeer.find('form').simulate('submit', {preventDefault(){}});
        //3. se debe de haber llamado el setCategories
        expect(setCategories).toHaveBeenCalled();
        //4.el valor del input debe de estar ''
        expect(input.prop('value')).toBe('');
        
    })
    
    
})
