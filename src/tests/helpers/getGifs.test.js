
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs', () => {

    test('debe de traer 10 elementos', async () => {
        
        const gifs = await getGifs('game of thrones');
        
        expect(gifs.length).toBe(10);
    })

    test('debe de traer 10 elementoss', async () => {
        
        const gifs = await getGifs('');
        console.log(gifs);
        //expect(gifs.length).toBe(10);
    })

})
