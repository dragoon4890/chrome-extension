const baseURL = "https://localhost:3000/search/love";


export default function fetchApi(){
    fetch(baseURL)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })
}