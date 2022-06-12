let = $each_news = document.getElementById("each_news");

let ciaData = null;

fetch(
  "https://app.zyte.com/api/v2/datasets/o8pq8fpHkPK/download?format=json"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    ciaData = data;
    news_Bloc = ciaData.map(
      (x, idx) => `
        <div>
            <h5 class="font-weight-bold " data-parent="#each_news">
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
    for (i = 0; i < news_Bloc.length; i++) {
      $each_news.innerHTML += news_Bloc[i];
    }
  })
  .catch((err) => {
    // Do something for an error here
  });