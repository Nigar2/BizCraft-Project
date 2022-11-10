
function liveSearch() {
    let cards = document.querySelectorAll('.static_card')
    let searchinput = document.getElementById("search").value;
   
    for (var i = 0; i < cards.length; i++) {
 
      if(cards[i].innerText.toLowerCase()
        .includes(searchinput.toLowerCase())) {

          cards[i].classList.remove("is-hidden");
      } else {
        cards[i].classList.add("is-hidden");
      }
    }
  }