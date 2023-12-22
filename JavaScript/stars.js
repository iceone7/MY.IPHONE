var ratingContainers = document.querySelectorAll('.rating');

ratingContainers.forEach(function(container) {
  var ratingInputs = container.querySelectorAll('input');

  ratingInputs.forEach(function(input) {
    input.addEventListener('change', function() {
      var rating = this.value;
      console.log('Product Rating:', rating);
    });
  });
});
