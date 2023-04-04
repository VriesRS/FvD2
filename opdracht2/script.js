document.querySelector('div').addEventListener('click', selected);


function selected() {
    let books = document.querySelector('div');
    books.classList.toggle('selected');
    console.log("test1")

    // // Get the div element
    // const myDiv = document.getElementsByClassName('selected');

    // // Create a new img element
    // const myImg = document.createElement('img');

    // // Set the src attribute of the img element
    // myImg.setAttribute('src', '/images/ironmanposter.jpg');

    // // Replace the div element with the new img element
    // myDiv.parentNode.replaceChild(myImg, myDiv);
    // console.log("test2")

}
