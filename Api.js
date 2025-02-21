const url = "https://api.api-ninjas.com/v1/worldtime?city=london";

async function getData() {
    const resp = await fetch(url);
    console.log(resp)
    
} 

getData();