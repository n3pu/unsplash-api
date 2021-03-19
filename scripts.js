function searchPhotos() {
  let clientId = document.getElementById('clientId').value;
  let query = document.getElementById('search').value;
  let url = "https://api.unsplash.com/search/photos?query=";
  const imageDiv = document.getElementById('image_div');
  imageDiv.innerHTML = '';

  let alertBox = document.getElementById('alert');
  alertBox.innerHTML = '';

  axios.get(url+query+"&client_id="+clientId)
    .then(response => {
      for (let i = 0; i < response.data.results.length; i++) {
        let imageBox = document.createElement('div');
        imageBox.className = 'imageBox';
        let imageElement = document.createElement('img');
        let buttonDownload = document.createElement('a');
        buttonDownload.className = 'buttonDownload';
        buttonDownload.href = response.data.results[i].links.download;
        buttonDownload.setAttribute('target', '_blank');
        imageElement.src = response.data.results[i].urls.regular;
        imageElement.className = "image";
        imageBox.append(buttonDownload);
        imageBox.append(imageElement);
        imageDiv.append(imageBox);
      }
    })
    .catch(function(error) {
      let alertEl = document.createElement('h3');
      alertEl.textContent = 'Image not found. Try another term';

      alertBox.append(alertEl);
    });
}

document.getElementById('search').onkeypress = function(e){
  if (!e) e = window.event;
  var keyCode = e.code || e.key;
  if (keyCode == 'Enter'){
    searchPhotos();
  }
}

function openModal() {
  var modal = document.querySelector('.modal');
  
  if(modal.style.display == "none") {
    modal.style.display = "block";
  }
}

function closeModal() {
  var modal = document.querySelector('.modal');

  if(modal.style.display == "block") {
    modal.style.display = "none";
  }
}