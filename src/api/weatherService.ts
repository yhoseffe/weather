import axios from "axios"

export const getSuggestedPlaces = async (query: string) => {
return await axios.get(`http://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${query}`)


}

// http://api.weatherapi.com/v1/search.json?key= 5d72a254c4894adca22121545211608&q=inabanga