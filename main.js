// voglio che la classe hamburger menu al mio click faccia apparire la li lista degli ul
// utilizzo show al primo click per vedere la lista
// utilizzo hide al secondo click per togliere la lista ( non farla vedere)

$('.fas fa-bars').click(function() {
  $('.header-right ').show();
})

$('.fas fa-bars').click(function() {
  $('.header-right ').hide();
})
