const characters = [
  {
    "id": 1,
    "name": "Luke Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 2,
    "name": "C-3PO",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    "homeworld": "tatooine"
  },
  {
    "id": 3,
    "name": "R2-D2",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    "homeworld": "naboo"
  },
  {
    "id": 4,
    "name": "Darth Vader",
    "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 5,
    "name": "Leia Organa",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    "homeworld": "alderaan"
  },
  {
    "id": 6,
    "name": "Owen Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 7,
    "name": "Beru Whitesun lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 8,
    "name": "R5-D4",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    "homeworld": "tatooine"
  },
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    "homeworld": "tatooine"
  },
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    "homeworld": "stewjon"
  },
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    "homeworld": "tatooine"
  },
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    "homeworld": "eriadu"
  },
  {
    "id": 13,
    "name": "Chewbacca",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    "homeworld": "kashyyyk"
  },
  {
    "id": 14,
    "name": "Han Solo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    "homeworld": "corellia"
  },
  {
    "id": 15,
    "name": "Greedo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    "homeworld": "Rodia"
  },
  {
    "id": 16,
    "name": "Jabba Desilijic Tiure",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    "homeworld": "tatooine"
  },
  {
    "id": 18,
    "name": "Wedge Antilles",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    "homeworld": "corellia"
  },
  {
    "id": 19,
    "name": "Jek Tono Porkins",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    "homeworld": "bestine"
  },
  {
    "id": 20,
    "name": "Yoda",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
  },
  {
    "id": 21,
    "name": "Palpatine",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    "homeworld": "naboo"
  }
]

const content_wrapper = document.getElementById("content");
const render_c = document.getElementById("render");
render_c.onclick = renderCharacters;


// STAR WARS ÖDEV 2

const filter_container = document.getElementById("filter_container");

const homeworldsRaw = [];

//işlenmemiş array'e karakterlerin anavatanını atıyoruz.
//aynı zamanda anavatanı yazmayan birine "other" yazıyoruz

for (let i = 0; characters.length > i; i++) {
  homeworldsRaw.push(characters[i].homeworld ?? "other");
}

//şimdi de aynı olan anavatanlar silinip yeni değişken oluşturuyoruz.

const homeworldsUnique = [...new Set(homeworldsRaw)];

//burada da büyük harf olanları küçüğe çeviriyoruz

const homeworldsLowerCase = homeworldsUnique.map((uniqueHomeworld) => 
uniqueHomeworld.toLowerCase()
);
const homeworlds = homeworldsLowerCase;

// şimdi her bir anavatanı döngüye sokup içlerine radio input ekleyeceğiz

for (const homeworld of homeworlds) {
  const radio_element = `
  <div class="form-check">
  <input value="${homeworld}" class="form-check-input" type="radio" name="homeworld" id="filter-${homeworld}">
  <label class="form-check-label" for="filter-${homeworld}">
  ${homeworld}
  </label>
</div>`;    //name'in içindeki homeworld'un w harfi büyük olduğu için filtreleme çalışmamış.

filter_container.innerHTML += radio_element;
}

let filterValue = null;
let rad = document.homeworlds_filter.homeworld;
for (var i = 0; rad.length > i; i++) {
  rad[i].addEventListener("change", function () {
    filterValue = this.value;
    renderCharacters();
  });
}

//STAR WARS ÖDEV 1


function renderCharacters() {
  const row_element = document.createElement("div");
  row_element.classList.add("row");

  content_wrapper.innerHTML = "";
  for (const character of characters) {
    if (
      filterValue === null ||
      (character.homeworld ?? "other").toLowerCase() === filterValue
    ) {
    const CharacterCard = `
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
       <div class="card">
          <img src="${character.pic}" class="card-img-top" alt="${character.name}">
          <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">${character.homeworld}</p>
         </div>
      </div>
    </div>`;
    row_element.innerHTML = row_element.innerHTML + CharacterCard;
    }
    
    render_c.innerHTML = "Karakterleri Gizle";
    render_c.style.backgroundColor = "red"
    render_c.onclick = removeCharacters; 
    }
 
content_wrapper.appendChild(row_element);
  }


function removeCharacters() {
  content_wrapper.innerHTML = "";
  render_c.onclick = renderCharacters;
  render_c.style.backgroundColor = "green";
  render_c.style.color = "white";
  render_c.innerText = "Karakterleri Göster"
} 