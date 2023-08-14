try {
    let response = await fetch('https://rickandmortyapi.com/api/character?status=alive')
    let body = await response.json();
    let list = body.results;

    if(list.length > 50){
        list = list.slice(0,50);
    }


    let characterList = document.getElementById('characterList');

    list.map( (item) => {
        let newItem = `
            <li class="item">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <a href="${item.location.url}">${item.location.name}</a>
                <p>${item.species}</p>
                <p>${item.gender}</p>
            </li>
        `

        characterList.innerHTML += newItem;

    });
} catch (error) {
    document.body.innerHTML += `
        <h1>${error}</h1>;
    `;
}
