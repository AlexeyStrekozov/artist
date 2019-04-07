$( document ).ready(function(){
  $( ".header-navigation__button" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
    $( ".header-navigation__minibar" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
  });
});

$(function(){
    $(".phone").mask("+7(999) 999-9999");
  });

