document.querySelector('li').addEventListener('click', selected);


function selected() {
    let books = document.querySelector('li');
    books.classList.toggle('selected');
    console.log("test1")

}



const film = document.querySelector('li');

film.addEventListener('animationend', () => { 
    let film2 = document.querySelector('li:nth-of-type(2)');
    film2.style.animation = 'vallen 2s both';
});


// row1.addEventListener('keypress', function(e) {
//     if (e.target != this){
//         row2.appendChild(e.target.cloneNode(true));
//         e.target.remove();
//     } 
// })


// row2.addEventListener('keypress', function(e) {
//     if (e.target != this){
//         selected.appendChild(e.target.cloneNode(true));
//         e.target.remove();
//     } 
// })



// $('body').on('click', 'li', function() {
//     $(this).toggleClass('selected');
//  });
//  $('#move_left').click(function() {
//      $('.row1').append($('.row2 .selected').removeClass('selected'));
//  })
//  $('#move_right').click(function() {
//      $('.row2').prepend($('.row1 .selected').removeClass('selected'));
//  })




//  let selectedItem = null;

//  function selectItem(item) {
//    if (selectedItem) {
//      selectedItem.classList.remove('selected');
//    }
//    selectedItem = item;
//    selectedItem.classList.add('selected');
//  }

//  function moveLeft() {
//    let list2 = document.getElementById("list2");
//    let selectedItems = list2.querySelectorAll("li.selected");
//    for (let i = 0; i < selectedItems.length; i++) {
//      document.getElementById("list1").appendChild(selectedItems[i]);
//      selectedItems[i].classList.remove('selected');
//    }
//  }

//  function moveRight() {
//    let list1 = document.getElementById("list1");
//    let selectedItems = list1.querySelectorAll("li.selected");
//    for (let i = 0; i < selectedItems.length; i++) {
//      document.getElementById("list2").appendChild(selectedItems[i]);
//      selectedItems[i].classList.remove('selected');
//    }
//  }
// </script>
// </body>
// </html>
// This code defines two unordered lists with items that can be selected by clicking on them. When an item is clicked, it becomes the selected item and its background color changes to indicate that it is selected. The code also defines two buttons that allow you to move selected items from one list to the other. When a button is clicked, the code finds all selected items in the current list, moves them to the other list, and removes their "selected" class.








// FLIP Techniek


function duplicateItem() {
    // Get the first list and the selected item
    const list1 = document.getElementById('list1');
    const selected = list1.querySelector('.selected');
  
    // If no item is selected, return
    if (!selected) {
      return;
    }
  
    // Clone the selected item
    const cloned = selected.cloneNode(true);
  
    // Add the cloned item to the second list
    const list2 = document.getElementById('list2');
    list2.appendChild(cloned);
  }
  
  // Add event listeners to select/deselect items
  const list1 = document.getElementById('list1');
  list1.addEventListener('click', event => {
    // Deselect previously selected item
    const selected = list1.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
  
    // Select the clicked item
    if (event.target.nodeName === 'LI') {
      event.target.classList.add('selected');
    }
  });



  function duplicateItem() {
    // Get the first list and the selected item
    const list1 = document.getElementById('list1');
    const selected = list1.querySelector('.selected');
  
    // If no item is selected, return
    if (!selected) {
      return;
    }
  
    // Clone the selected item
    const cloned = selected.cloneNode(true);
  
    // Add the cloned item to the second list
    const list2 = document.getElementById('list2');
    list2.appendChild(cloned);
  }
  