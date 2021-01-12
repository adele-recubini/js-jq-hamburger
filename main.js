// voglio che la classe hamburger menu al mio click faccia apparire la li lista degli ul
// utilizzo show  sul selettore  appropiatoal primo click per vedere la lista
// utilizzo hide sul selettore approrpiato in questo caso una x (close) al secondo click per togliere la lista ( non farla vedere)

$('.fas fa-bars').click(function() {
  $('.hamburger-menu>ul>li').show("slow");
})

$('.close').click(function() {
  $('.hamburger-menu>ul>li').hide("fast");
})
