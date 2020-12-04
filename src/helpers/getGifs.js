export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=OX8IPPgtfT3tsl77EJsEYsZQcnTnj1Gh`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            //images?: si existe que me la muestre
            url: img.images?.downsized_medium.url
        };
    });

    //console.log(gifs);
    return gifs;
    //setImgs

}