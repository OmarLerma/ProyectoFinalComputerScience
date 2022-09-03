const arraycomic = document.querySelector("#comic-row");
const btnPersonaje = document.querySelector("#btnPersonaje");
const btnComic = document.querySelector("#btnComic");
const btnSerie = document.querySelector("#btnSerie");
const btnEvento = document.querySelector("#btnEvento");
const btnFavorito = document.querySelector("#btnFavorito");
let favoritos = [];

const marvel = {
    personajes: () =>{
        const urlApi = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=18b1611ce99472ac98a6b7175ee15e96&hash=96a84e919ac5b4e0ee022a704b187780';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlApi)
        .then(res => res.json())
        .then((json)=>{
            for(const personaje of json.data.results){
              let urlPersonaje = personaje.urls[0].url;
              contentHTML += `
                    <div class="column is-4-desktop is-6-tablet">
                          <div class="card">
                              <div class="card-image">
                              <figure class="image is-16by9">
                                  <img src = "${personaje.thumbnail.path}.${personaje.thumbnail.extension}" alt="${personaje.name}" class="my-4">
                              </figure>
                              </div>
                              <div class="card-content">
                                  <span class="tag is-danger">Marvel Chraracter</span>
                                  <div class="is-flex is-justify-content-space-between is-align-items-center">
                                      <div class="content mb-0">
                                          <p class="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">${personaje.name}</p>
                                          <p class="mb-0 is-size-7">Aparicones en Comic's : ${personaje.comics.available}</p>
                                          <p class="mb-0 is-size-7">Aparicones en Series : ${personaje.series.available}</p>
                                          <p class="mb-0 is-size-7">Aparicones en Historias : ${personaje.stories.available}</p>
                                          <p class="mb-0 is-size-7">Aparicones en Eventos : ${personaje.events.available}</p>                                          
                                      </div>                                      
                                  </div>
                              </div>
                          </div>
                      </div>`;
              
            }
            container.innerHTML = contentHTML;
        })
    },
    comics: () =>{
        const urlApi = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=18b1611ce99472ac98a6b7175ee15e96&hash=96a84e919ac5b4e0ee022a704b187780';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlApi)
        .then(res => res.json())
        .then((json)=>{
            for(const comic of json.data.results){
              let urlComic = comic.urls[0].url;
              contentHTML += `
                    <div class="column is-4-desktop is-6-tablet">
                          <div class="card">
                              <div class="card-image">
                              <figure class="image is-16by9">
                                  <img src = "${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="my-4">
                              </figure>
                              </div>
                              <div class="card-content">
                                  <span class="tag is-danger">Marvel Comic's</span>
                                  <div class="is-flex is-justify-content-space-between is-align-items-center">
                                      <div class="content mb-0">
                                          <p class="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">${comic.title}</p>
                                          <a href="${comic.urls[0].url}">Leer Comic's</a>
                                          <br>
                                          <button id = "comicFavorito" class="button is-primary mb-2" onclick = "addfav(${comic.id})">Favorito</button>
                                      </div>
                                      <div class="ranking has-text-right">
                                          <span class="icon-text">                                         
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>`;
            }
            container.innerHTML = contentHTML;
        })
    },
    series: () =>{
        const urlApi = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=18b1611ce99472ac98a6b7175ee15e96&hash=96a84e919ac5b4e0ee022a704b187780';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlApi)
        .then(res => res.json())
        .then((json)=>{
            for(const serie of json.data.results){
              let urlSerie = serie.urls[0].url;
                contentHTML += `
                    <div class="column is-4-desktop is-6-tablet">
                          <div class="card">
                              <div class="card-image">
                              <figure class="image is-16by9">
                                  <img src = "${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}" class="my-4">
                              </figure>
                              </div>
                              <div class="card-content">
                                  <span class="tag is-danger">Marvel Series</span>
                                  <div class="is-flex is-justify-content-space-between is-align-items-center">
                                      <div class="content mb-0">
                                          <p class="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">${serie.title}</p>
                                          <a href="${serie.urls[0].url}">Ver Serie</a>
                                      </div>
                                      <div class="ranking has-text-right">
                                          <span class="icon-text">                                         
                                              <span class="icon has-text-warning"><i class="mdi mdi-circle mdi-18px">Fin de Emicion</i></span>                                       
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>`;
            }
            container.innerHTML = contentHTML;
        })
    },
    eventos: () =>{
        const urlApi = 'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=18b1611ce99472ac98a6b7175ee15e96&hash=96a84e919ac5b4e0ee022a704b187780';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';
        fetch(urlApi)
        .then(res => res.json())
        .then((json)=>{
            for(const evento of json.data.results){
              let urlEvento= evento.urls[0].url;
              contentHTML += `
              <div class="column is-4-desktop is-6-tablet">
                    <div class="card">
                        <div class="card-image">
                        <figure class="image is-16by9">
                            <img src = "${evento.thumbnail.path}.${evento.thumbnail.extension}" alt="${evento.title}" class="my-4">
                        </figure>
                        </div>
                        <div class="card-content">
                            <span class="tag is-danger">Marvel Events</span>
                            <div class="is-flex is-justify-content-space-between is-align-items-center">
                                <div class="content mb-0">
                                    <p class="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">${evento.title}</p>
                                    <a href="${evento.urls[0].url}">Ver Evento</a>
                                </div>
                                <div class="ranking has-text-right">
                                    <span class="icon-text">                                         
                                        <span class="icon has-text-warning"><i class="mdi mdi-circle mdi-18px"></i></span>                                       
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
            container.innerHTML = contentHTML;
        })
    },
    favorito: () =>{

        if(!localStorage.getItem('@favoritos')){
            Swal.fire({
                title: "Mensaje",
                text: "Sin Favoritos agregados"
            });
        }
        else{
            let contentHTML = '';
             const urlApi = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=18b1611ce99472ac98a6b7175ee15e96&hash=96a84e919ac5b4e0ee022a704b187780';
             const container = document.querySelector('#marvel-row');

             fetch(urlApi)
             .then(res => res.json())
             .then((json)=>{                
                let favoritoStorage =  localStorage.getItem('@favoritos');
                console.log(favoritoStorage);
                favoritos = favoritoStorage.replace("[","").replace("]","").split(",");
                 let i = 0;
                 for(const comic of json.data.results){                    
                    if(comic.id = favoritos[i])  {
                        console.log("Entro")                 
                   contentHTML += `
                         <div class="column is-4-desktop is-6-tablet">
                               <div class="card">
                                   <div class="card-image">
                                   <figure class="image is-16by9">
                                       <img src = "${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="my-4">
                                   </figure>
                                   </div>
                                   <div class="card-content">
                                       <span class="tag is-danger">Marvel Comic's</span>
                                       <div class="is-flex is-justify-content-space-between is-align-items-center">
                                           <div class="content mb-0">
                                               <p class="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">${comic.title}</p>
                                               <a href="${comic.urls[0].url}">Leer Comic's</a>
                                               <br>
                                           </div>
                                           <div class="ranking has-text-right">
                                               <span class="icon-text">                                         
                                               </span>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>`;
                    }
                           i++
                           
                 }

                 container.innerHTML = contentHTML;
             })
            // for(let i = 0; i > localStorage.getItem('@favoritos').length; i++){            
            // console.log(valor[i])
            // const urlApi = 'https://gateway.marvel.com:443/v1/public/comics/'+valor[i]+'?ts=1&apikey=18b1611ce99472ac98a6b7175ee15e96&hash=96a84e919ac5b4e0ee022a704b187780';
            // const container = document.querySelector('#marvel-row');
            
            // fetch(urlApi)
            // .then(res => res.json())
            // .then((json)=>{
                
            //     for(const comic of json.data.results){
            //       contentHTML += `
            //             <div class="column is-4-desktop is-6-tablet">
            //                   <div class="card">
            //                       <div class="card-image">
            //                       <figure class="image is-16by9">
            //                           <img src = "${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="my-4">
            //                       </figure>
            //                       </div>
            //                       <div class="card-content">
            //                           <span class="tag is-danger">Marvel Comic's</span>
            //                           <div class="is-flex is-justify-content-space-between is-align-items-center">
            //                               <div class="content mb-0">
            //                                   <p class="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">${comic.title}</p>
            //                                   <a href="${comic.urls[0].url}">Leer Comic's</a>
            //                               </div>
            //                               <div class="ranking has-text-right">
            //                                   <span class="icon-text">                                         
            //                                   </span>
            //                               </div>
            //                           </div>
            //                       </div>
            //                   </div>
            //               </div>`;
            //     }
            //     container.innerHTML = contentHTML;
            // })
        // }
        }
     }
}
marvel.personajes();

function cargaComics(){
    marvel.comics();
}

function cargaSeries(){
    marvel.series();
}
function cargaPersonajes(){
    marvel.personajes();
}
function cargaEventos(){
    marvel.eventos();
}
function cargaFavoritos(){
    marvel.favorito();
}

btnPersonaje.addEventListener("click", cargaPersonajes)
btnComic.addEventListener("click", cargaComics)
btnSerie.addEventListener("click", cargaSeries)
btnEvento.addEventListener("click", cargaEventos)
btnFavorito.addEventListener("click", cargaFavoritos)



function addfav(e){
    if(favoritos.indexOf(e) === -1){
        favoritos.push(e);         
    }
    localStorage.setItem('@favoritos', JSON.stringify(favoritos));       
};




