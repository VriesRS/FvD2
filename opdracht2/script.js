// de vall animatie starten nadat de eerste animatie is afgelopen

const film = document.querySelector('li');

film.addEventListener('animationend', () => { 
    let film2 = document.querySelector('li:nth-of-type(2)');
    film2.style.animation = 'vallen 2s both';
});


  
// De film uit de eerste lijst over zetten naar de 2de lijst

let list1 = document.getElementById("list1");
let list2 = document.getElementById("list2");

list1.addEventListener("click", function(event) {
  let item = event.target;
  if (item.tagName === "LI") {
    if (item.classList.contains('selected')) {
      let newItem = document.createElement("li");
      newItem.innerHTML = item.innerHTML;
      list2.appendChild(newItem);
      item.parentNode.removeChild(item);
        const popup = document.querySelector('.popup');
        popup.classList.add('active');
    } else {
      item.classList.add('selected');
    }
  }
});

// de class van de eerste animatie ook voor de 2de lijst activeren

let list2Items = document.querySelectorAll("#list2 li");
list2Items.forEach((item) => {
  item.addEventListener("click", function() {
    item.classList.toggle("selected");
  });
});


// Als er iets uit de 2de lijst geselecteerd is deze met enter kunnen verwijderen

document.addEventListener("keypress", function(event) {
    if (event.code === "Enter") {
      let selectedItem = document.querySelector(".selected");
      if (selectedItem) {
        selectedItem.remove();
      }
    }
});


