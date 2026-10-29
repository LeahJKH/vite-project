
import axios from 'axios'


export async function apiGet(element) {

 
    const res = await axios.get('https://ghibliapi.dev/films/');
 
  console.log(res.data);

  let Arraydata = res.data

  Arraydata.forEach(e => {
    
    element.innerHTML += `
    <div>
      <p>${e.title}</p>
      <img src="${e.image}"></img>
    </div>
    `
    });
}
