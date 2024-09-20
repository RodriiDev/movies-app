export const fetchData  = async () => {

    const url = 'https://movies-api14.p.rapidapi.com/movies';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1f9c1c3cd3msh31b5cd8178d5716p10ea80jsnb717c67f984e',
            'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if(!response){
            throw new Error(`HTTP Error. Status ${response.status}`)
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data: ',error);
        throw error;    
    }

};