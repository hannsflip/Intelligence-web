let = $accordion = document.getElementById("accordion");

let ciaData = null;

fetch(
  "../assets/cia.json"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    ciaData = data;
    cards = ciaData.map(
      (x, idx) => `
        <div>
            <h5 class="font-weight-bold " data-parent="#accordion">
                ${x.title}
            </h5>
            <div class=" font-weight-normal card-body">
                ${x.body.substring(0,250)}
                <br>
                <br>
                <a href=${x.url}>Ver más</a>
            </div>
            
        </div>
    `
    );
    for (i = 0; i < cards.length; i++) {
      $accordion.innerHTML += cards[i];
    }
  })
  .catch((err) => {
    // Do something for an error here
  });