
var elForm = document.querySelector(".js-form");
const elPokemonlist = document.querySelector(".js-pokemons-list");
const elPokemonId = elPokemonlist.querySelector(".js-pokemon-id");
const elSearch = document.querySelector(".js-search")




function render(data) {
    elPokemonlist.innerHTML = "";

    for (const poke of data) {
        const newItem = document.createElement("li");
        const newItemId = document.createElement("p")
        const newItemName = document.createElement("strong");
        const newItemNum = document.createElement("span");
        const newItemImg = document.createElement("img");
        const newItemType = document.createElement("p");

        newItemId.textContent = poke.id
        newItemName.textContent = poke.name
        newItemNum.textContent = poke.num
        newItemImg.src = poke.img
        newItemType.textContent = poke.type

        newItem.classList.add("w-25", "border", "bg-secondary", "text-center", "d-flex", "flex-column")

        newItem.appendChild(newItemId)
        newItem.appendChild(newItemName)
        newItem.appendChild(newItemNum)
        newItem.appendChild(newItemImg)
        newItem.appendChild(newItemType)

        elPokemonlist.appendChild(newItem)
    }
};
render(pokemons);

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const searchVal = elSearch.value.trim();
    if (!searchVal) return alert('Qiymat kiritish majburiy !');
    const searchRegex = new RegExp(searchVal, "gi")
    const filterpokemons = pokemons.filter(function (poke) {
        return poke.name.match(searchRegex);
    })
    render(filterpokemons);
})