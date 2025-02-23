const url = "https://api.api-ninjas.com/v1/worldtime?city=london";

async function getData() {
    const resp = await fetch(url);
    const  data = await resp.json
    console.log(data)
    
} 

getData();