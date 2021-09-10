
var $container = $('#container');
// Инициализация
$container.masonry({
  columnWidth: 0,
    itemSelector: '.item'
});
var msnry = $container.data('masonry');

// Инициализация Масонри, после загрузки изображений
$container.imagesLoaded( function() {
  $container.masonry();
});