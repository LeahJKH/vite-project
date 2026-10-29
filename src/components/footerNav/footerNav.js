export function footerNav(element) {
    let navigations = [ 
    {
        path: "https://www.google.com",
        name: "google",
    },
    {
        path: "www.youtube.com",
        name: "youtube",
    }
    ]

    navigations.forEach(nav => {
        const btn = document.createElement("button")
        btn.textContent = nav.name

        btn.addEventListener("click", ()=> {
            console.log("klikket")
            location.href = nav.path
        })
        element.append(btn)
    })
}