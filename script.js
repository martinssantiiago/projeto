function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    /*imagem avatar */

    const img = document.querySelector("#profile img")


    
    if(html.classList.contains('light')) {
        
        img.setAttribute('src', './assets/avatar-lightt.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }


    const alt = document.querySelector("#profile img")


    
    if(html.classList.contains('light')) {
        
        alt.setAttribute('alt', 'foto clara')
    } else {
        alt.setAttribute('alt', 'foto escura')
    }

    

}