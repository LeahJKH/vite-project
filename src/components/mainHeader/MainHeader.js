import "./mainHeader.css"

export function mainHeader(element) {

    let bruker = {
        navn: "per",
        alder: 23
    }

    element.innerHTML = `
    <div id="contHeader">
    <h2>Welcome ${bruker.navn}</h2>
    </div>
    `
}