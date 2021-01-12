// voglio che la classe hamburger menu al mio click faccia apparire la li lista degli ul
// utilizzo show  sul selettore giusto come primo click per vedere la lista
// utilizzo hide sul selettore in questo caso una x (close) al secondo click per togliere la lista ( non farla vedere)
// inserisco show e hide per dire che voglio una comparla lenta nel primo caso e veloce nel secondo
//
$('.header-right').click(function() {
  $('.hamburger-menu').show("slow");
})

//

$('.close').click(function() {
  $('.hamburger-menu').hide("fast");
})

// BONUS fadeIn e fadeOut

$('.header-right').click(function() {
  $('.hamburger-menu').fadeIn("slow");
})

//

$('.close').click(function() {
  $('.hamburger-menu').fadeOut("fast");
})
