import './global.css'
import { apiGet } from './components/ApiGet'
import { mainHeader } from './components/mainHeader/MainHeader'
import { footerNav } from './components/footerNav/footerNav'

document.querySelector('#app').innerHTML = `
<header>
<h1>Siden min</h1>
</header>

<main>
<section id="eledata"></section>
<div id="ContApi" class="row"></div>
</main>

<footer>
<nav id="navFooter"></nav>
</footer>
`
mainHeader(document.querySelector("#eledata"))
apiGet(document.querySelector('#ContApi'))
footerNav(document.querySelector("#navFooter"))
