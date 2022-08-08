var boton = document.getElementById("botton");
var readMore = document.getElementById("leer_boton");
var news = document.getElementById("news");
var titlesNews = ["Es necesario usar cubrebocas para poder seguir cuidando la salud"];
var imageNews = ["ImageContainer/Grupo59.png"];
var datePic = ["ImageContainer/calendario.png"];
var dates = ["2 de Junio, 2022"];
var aS = ["Leer más"];
var paragraphS = ["Duis dictum vestibulum ante vitae ullamcorper. Ristique phasellus llamcorper, odio vitae eleifend ultricies lectus orci congue magnain egestas nulla."];

boton.addEventListener('mouseout', function(){ 
    addElementsGroup();
    console.log("hola de nuevo");
});
boton.addEventListener('mouseout', function(){
    removeElementsGroup();
});

var addElementsGroup = function(){
    titlesNews.forEach(createElementsGroup);
    imageNews.forEach(createElementsGroup);
    datePic.forEach(createElementsGroup);
    dates.forEach(createElementsGroup);
    aS.forEach(createElementsGroup);
    paragraphS.forEach(createElementsGroup);
}

var createElementsGroup = function(){
    var notice = document.createElement('div');
    var img = document.createElement('img');
    var title = document.createElement('h3');
    var date = document.createElement('div');
    var picDate = document.createElement('img');
    var dateT = document.createElement('h6');
    var paragraph = document.createElement('p');
    var botLeer = document.createElement('div');
    var a = document.createElement('a');
    notice.appendChild(img);
    notice.appendChild(title);
    notice.appendChild(date);
    notice.appendChild(paragraph);
    notice.appendChild(botLeer);
    date.appendChild(picDate);
    date.appendChild(dateT);
    botLeer.appendChild(a);
    news.appendChild(notice);
    notice.className = "notice";
    date.className = "date";
    botLeer.className = "leer_boton";
    img.src = imageNews;
    title = titlesNews;
    picDate = datePic;
    dateT = dates;
    a = aS;
    paragraph = paragraphS;
    return notice;
}

readMore.addEventListener('mouseout', function(){

});

var setElementsGroup = function(){
    var noticeContainer = document.createElement('div');
    var titleNew = document.createElement('h2');
    var dateSNew = document.createElement('h6');

}