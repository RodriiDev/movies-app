export const fetchData  = async () => {

    const url = 'https://imdb8.p.rapidapi.com/v2/search?searchTerm=deadpool&type=NAME&first=10&country=US&language=en-US';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1f9c1c3cd3msh31b5cd8178d5716p10ea80jsnb717c67f984e',
		    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if(!response){
            throw new Error(`HTTP Error. Status ${response.status}`)
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

};