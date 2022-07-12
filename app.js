
const tarjetas = document.getElementById('tarjetas');
const url = "https://www.breakingbadapi.com/api/characters"

fetch(url)
    .then((resp) => resp.json())
    .then((data) => printData(data))
    .catch((error) => console.log(error))


const printData = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].name
        const occupation = arr[i].occupation
        const img = arr[i].img
        const nickname = arr[i].nickname
        const status = arr[i].status
        str = str + 
 
    ` <div class="row">
        <div class="col-4 s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="${img}">
              <span class="card-title">Nickname: ${nickname}</span>
            </div>
            <div class="card-content">
              <p>Name: ${name}<br> Ocupation:  ${occupation} <br> Status: ${status}</p>
            </div>
          </div>
        </div>
      </div>`
       
         
    }
    tarjetas.innerHTML=str;
}