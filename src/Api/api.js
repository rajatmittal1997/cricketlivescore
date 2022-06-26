const API_KEY = "d394100d-0f75-4ba6-9213-5ed765ca5362";



export const getMatches = () => {
    
    const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;

    return fetch(url)
    .then((response) => (response.json()))
    .catch((error) => console.log('Fetch Error:', error));
};

export const getDetails = (id) => {
    
    const url = `https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&id=${id}`;

    return fetch(url)
    .then((response) => (response.json()))
    .catch((error) => console.log('Fetch Error:', error));
};

  
    

