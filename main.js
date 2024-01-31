const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');


openPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
})


closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
})





document.querySelector('.find form').addEventListener('submit', function(event) {
  event.preventDefault();
  var searchValue = document.querySelector('.figure').value.toLowerCase();
  var catNames = document.querySelectorAll('.name');
  var found = false;
  catNames.forEach(function(catName) {
    if (catName.textContent.toLowerCase().includes(searchValue)) {
      var nameText = catName.textContent;
      var nameHtml = '';
      var startIndex = nameText.toLowerCase().indexOf(searchValue);
      var endIndex = startIndex + searchValue.length;
      for (var i = 0; i < nameText.length; i++) {
        if (i === startIndex) {
          nameHtml += '<span style="background-color: pink;">' + nameText.charAt(i);
        } else if (i === endIndex) {
          nameHtml += '</span>' + nameText.charAt(i);
        } else {
          nameHtml += nameText.charAt(i);
        }
      }
      catName.innerHTML = nameHtml;
      found = true;
      catName.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      catName.innerHTML = catName.textContent;
    }
  });
  if (!found) {
    alert('Слово не найдено');
  }
});






document.querySelectorAll('.but').forEach(function(button) {
  button.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)';
  });

  button.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});



