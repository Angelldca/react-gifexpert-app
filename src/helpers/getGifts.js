

export const getGifts = async (category) => {
    let gifs;
    await fetch(`https://api.giphy.com/v1/gifs/search?api_key=k2AT96HTNtQ5EBeIYTVyj7ZmXe4tGqsr&q=${ encodeURI(category) }&limit=10&offset=0&rating=g&lang=en`)
        .then(data => data.json())
        .then(({ data }) => {

           gifs = data.map(img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            })
          

        })
        return gifs;
}