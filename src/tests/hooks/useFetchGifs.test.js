const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../Hooks/useFetchGifs");

describe('Pruebas en el custom hook', () => {

    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('dragon ball'));
        console.log(result);
        const { data, loading } = result.current;



        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('dragon ball'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    })


})
