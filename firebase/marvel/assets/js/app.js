const public_key = '64e513067bfe65c01dbbda93e79de093'
const private_key = 'cfe53a1d68fc564f42e9569c2090336c5b8cf088'
const characate_url = "https://gateway.marvel.com/v1/public/characters"
var offset = 20;

//registro-inicio
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('.card-login');
    const registerForm = document.querySelector('.card-registre');
    const showRegisterButton = document.getElementById('registre');
    const backToLoginButton = document.getElementById('backToLogin');

    showRegisterButton.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    backToLoginButton.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});


const getData = async (url, offset) => {
    const timestamp = Math.floor(Date.now() / 1000)
    const hash = md5(timestamp + private_key + public_key)

    const response = await fetch(`${url}?ts=${timestamp}&apikey=${public_key}&hash=${hash}&offset=${offset}`);
    const data = response.json();
    return data;
};



function addData(data) {
    const dataContainer = document.getElementById('data')
    dataContainer.innerHTML = "";

    data.forEach(item => {
        dataContainer.innerHTML += `
        <div>
            <h2>${item.name}</h2>
            <img src="${item.thumbnail.path + "." + item.thumbnail.extension}">
            <p>
                ${item.description}
            </p>
        </div>
        `
    });

}
const prevBton = document.getElementById('prev');
const nextBton = document.getElementById('next');

prevBton.addEventListener('click', () =>{
    if(offset > 20){
        offset -=20;
    }
    getData(characate_url, offset)
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results);
    })
})
nextBton.addEventListener('click', () =>{
    if(offset > 20){
        offset +=20;
    }
    getData(characate_url, offset)
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results);
    })
})

getData(characate_url)
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results);
    })

//tarea arreglar los estilos
//barra de navegacion: personajes, comics, creadorres, eventos, series, historias



//para hacer los botones
const buttoajas = document.getElementById
buttoajas.onclick = getData('la url')
    .then 