export async function fetchMovie(movieName) {

    const URL = `http:www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}&plot=full`
    
    try {
        const res = await fetch(URL);
        if (!res.ok){
            throw new Error(`Falhou: ${res.status}`)
        }
        return res.json(moviePlot.Plot);
    }   catch (error) {
        return error;
    }
}

export async function fatchTranslation(moviePlot) {
    const URL = "0http://localhost:5000/translate";
    const res = await fetch(URL,{
        method: "POST",
        body: JSON.stringify({
            q: moviePlot,
            source: "en",
            target: "pt",
            format: "text"
        }),
        headers: {"Content-Type": "application/json"}
        
    });

    const translateObj = await res.json();
    return translateObj;

}