
$('.laggen-btn').click(function(){
  $('.laggen').toggle();
  $('.laggen-btn .show-text').toggle();
  $('.laggen-btn .hide-text').toggle();
  $('ul.priser').empty();
$.getJSON('js/timpris.json',function(pricelist){

  // loop through an object (the phonelist)
  for(let name in pricelist){

    // name is the key
    // get the value -> phoneNumber
    let cost = pricelist[name];

    // create a li element with the name
    // and add to the ul
    $('ul.priser').append(
      '<li>' + name + ': ' + cost + '</li>'
    );
  }

});

});
