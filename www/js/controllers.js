angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('adnCtrl', function($scope) {})

.controller('nutricionalCtrl', function($scope) {})
.controller('infografiaCtrl', function($scope) {})
.controller('memoriaCtrl', function($scope) {
  $(document).ready(function($scope){
  
var checkArray = []; // para verificar si las dos cartas con click son el mismo personaje
var idArray = []; //array para guardar los ids de las cartas que tienen click 
var contador = 0;
var fin = 0; 
var fields = document.querySelectorAll(".atras");


var images = [
"https://sportsworld-admin.xdesign.com.mx/uploads/es/images/proteinas.png",
"https://i1.wp.com/licuadorax.com/wp-content/uploads/2018/06/ejemplos-de-los-carbohidratos.png?resize=336%2C215&ssl=1",
"https://i0.wp.com/mipediatravegetariano.com/wp-content/uploads/2017/06/Unsaturated-fats.png?ssl=1",
"http://www.alur.com.uy/productos/img/miniaturas/azucar_suelto.png",
"https://www.hola.com/imagenes/estar-bien/20180716127026/estas-son-las-frutas-que-necesitas-segun-las-vitaminas-que-te-faltan-cs/0-584-514/vitaminasfrutas-m.jpg?interpolation=lanczos-normal&downsize=0.75xw:*&output-format=progressive-jpeg&output-quality=70",
"https://www.clikisalud.net/wp-content/uploads/2017/11/importancia-calcio-salud-cuerpo.jpg",
"https://biotrendies.com/wp-content/uploads/2016/08/verduras-con-mas-vitamina-c.jpg",
"https://teresasjuicery.com/blog/wp-content/uploads/2016/09/xfruta-por-colores-1200x675.jpg.pagespeed.ic.RGDo1K-Jtz.jpg",
"data:image/jpeg;base64,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",
"https://sportsworld-admin.xdesign.com.mx/uploads/es/images/proteinas.png",
"https://i1.wp.com/licuadorax.com/wp-content/uploads/2018/06/ejemplos-de-los-carbohidratos.png?resize=336%2C215&ssl=1",
"https://i0.wp.com/mipediatravegetariano.com/wp-content/uploads/2017/06/Unsaturated-fats.png?ssl=1",
"http://www.alur.com.uy/productos/img/miniaturas/azucar_suelto.png",
"https://www.hola.com/imagenes/estar-bien/20180716127026/estas-son-las-frutas-que-necesitas-segun-las-vitaminas-que-te-faltan-cs/0-584-514/vitaminasfrutas-m.jpg?interpolation=lanczos-normal&downsize=0.75xw:*&output-format=progressive-jpeg&output-quality=70",
"https://www.clikisalud.net/wp-content/uploads/2017/11/importancia-calcio-salud-cuerpo.jpg",
"https://biotrendies.com/wp-content/uploads/2016/08/verduras-con-mas-vitamina-c.jpg",
"https://teresasjuicery.com/blog/wp-content/uploads/2016/09/xfruta-por-colores-1200x675.jpg.pagespeed.ic.RGDo1K-Jtz.jpg",
"data:image/jpeg;base64,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"
];
// verificacion de los clicks
function clicked() { 
  if ($(this).find(".inner-wrap").hasClass("flipped")) {
    return;
  }
  $(this).find(".inner-wrap").toggleClass("flipped");
  checkArray.push($(this).find("img").attr("src"));
  idArray.push($(this).attr("id"));
  check();
}

$(".carta").on("click", clicked);
  
//reiniciar el juego
function reiniciar() {
  $(".atras").find("img").remove(); //quitar todas las imagenes actuales
  $(".carta .inner-wrap").removeClass("flipped"); // quitar la classe flipped para volver a su estado inicial
  checkArray = []; 
  idArray = [];
  contador = 0; 
  fin = 0;
  iniciarJuego();
}
//para verificar el fin del juego
function verificarFin() {
  if (fin === 18) { //si todas las cartas estan volteadas
    alert("Juego finalizado, lo has logrado en " + contador + " intentos");
    reiniciar();
  }
}
//para random de las imagenes 
function shuffleArray(array) { 
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function iniciarJuego() {

  

  var arr = shuffleArray(images); //array con las imagenes de forma aleatoria
 // append de las imagenes a la clase para la parte de atras de las cartas
  for (var i = 0; i < fields.length; i++) {
    var img = document.createElement("img");
    img.src = arr[i];
    fields[i].appendChild(img);
  }


}

function check() {
  //si los fields se  han hecho dos clicks 
  if (checkArray.length === 2) {
    $(".carta").off("click", clicked); 
    setTimeout(function(){
      //si no hay match
      if (checkArray[0] !== checkArray[1]) { 
        //voltear las dos cartas seleccionadas
        $("#" + idArray[0]).find(".inner-wrap").removeClass("flipped"); 
        $("#" + idArray[1]).find(".inner-wrap").removeClass("flipped"); 
        contador++;
        //vaciar los arrays para la siguiente eleccion
        checkArray = []; 
        idArray = []; 
        //habilitar el click de nuevo
        $(".carta").on("click", clicked);
      } else {

        contador++;
        
        fin += 2; // contador para el final del juego, se agregan dos para el contador de fin
        //vaciar los dos arrays
        checkArray = []; 
        idArray = []; 
        verificarFin(); 
        $(".carta").on("click", clicked); 
      }
      document.querySelector(".counter").innerHTML = contador;
    }, 800);  
  }
}



iniciarJuego();

});
})
.controller('videosCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
