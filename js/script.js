document.getElementById('menu').addEventListener('click', function () {
  console.log(menu);
  document.getElementById('navbar').classList.toggle('show-navbar');
});

lightbox.option({
  wrapAround: true,
  positionFromTop: 0,
  imageFadeDuration: 600,
  albumLabel: 'Imagen %1 de %2',
});
