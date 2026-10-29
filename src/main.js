import './style.css'
import { apiGet } from './ApiGet'

document.querySelector('#app').innerHTML = `
<main>
<div id="ContApi"></div>
</main>

<footer>

</footer>

`

apiGet(document.querySelector('#ContApi'))
