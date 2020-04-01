

  //TASK#1-------------------------------

  let newWin;

    newWin = window.open('', '',"width=300,height=300");

    function resizeNewWin(){
      newWin.resizeTo(500,500);
    }
    setTimeout(resizeNewWin,2000);

    function moveNewWin() {
      newWin.moveTo(200,200);
    }
    setTimeout(moveNewWin,2000);

    function closeNewWin() {
      newWin.close();
    }
    setTimeout(closeNewWin,2000);

  //TASK#2-------------------------------

  let parText;
  let myBut;

    function changeStylePar() {
      parText = document.querySelector('p');
      parText.style.color = "#FF7F00";
      parText.style.fontSize = "20px";
      parText.style.fontFamily = "Comic Sans MS";
    }
  myBut = document.getElementById('MyButton');
  myBut.addEventListener("click",changeStylePar);

  //TASK#3-------------------------------

  let myButtonFirst;
  let myButtonSecond;
  let myButtonThird;
  let myLink;

    function changePageBlue() {
      document.body.style.backgroundColor = "blue";
    }
  myButtonFirst = document.getElementById('MyButton#1');
  myButtonFirst.addEventListener("click",changePageBlue);


    function changePagePink() {
      document.body.style.backgroundColor = "pink";
    }
  myButtonSecond = document.getElementById('MyButton#2');
  myButtonSecond.addEventListener("dblclick",changePagePink);


    function changePageBrown() {
      document.body.style.backgroundColor = "brown";
    }
    function changePageWhite() {
      document.body.style.backgroundColor = "white";
    }
  myButtonThird = document.getElementById('MyButton#3');
  myButtonThird.addEventListener("mousedown",changePageBrown);
  myButtonThird.addEventListener("mouseup",changePageWhite);


    function changeLinkYellow() {
      document.body.style.backgroundColor = "yellow";
    }
  myLink = document.getElementById('MyLink');
  myLink.addEventListener("mouseover",changeLinkYellow);
  myLink.addEventListener("mouseout",changePageWhite);


  //TASK#4-------------------------------

  let buttonDel;
  let allSelect;
  let indexSelect;

  function deleteOption() {
    allSelect = document.querySelector("select").options.selectedIndex;
    indexSelect = document.querySelector("select")[allSelect];
      if(indexSelect) {
        indexSelect.remove();
      }
      else{
        alert("You delete all options.");
      }
  }
  buttonDel = document.getElementById('ButtonDel');
  buttonDel.addEventListener('click',deleteOption);

  //TASK#5-------------------------------

  let button;
  button = document.getElementById("Button");

    function pressButton(){
      button.insertAdjacentHTML('afterend', '<div>I was pressed!</div>');
    }
    button.addEventListener("click",pressButton);

    function mouseoutButton(){
      button.insertAdjacentHTML('afterend', '<div>I was pressed!</div>');
    }
    button.addEventListener("mouseout",mouseoutButton);

    function mouseoverButton() {
      button.insertAdjacentHTML('afterend', '<div>Mouse on me!</div>');
    }
    button.addEventListener("mouseover",mouseoverButton);

  //TASK#6-------------------------------

    let screenWidth;
    let screenHeight;

    function showChangeScreen () {
      screenWidth = document.getElementById("width");
      screenHeight = document.getElementById("height");
      screenWidth.innerHTML = window.innerWidth;
      screenHeight.innerHTML = window.innerHeight;
    }
    window.addEventListener('resize', showChangeScreen);

  //TASK#7-------------------------------


  let citiesOfUsa = ['New-York','Washington','Boston','Chikago'];
  let citiesOfGermany = ['Berlin','Stutgard','Dresden','Munich'];
  let citiesOfUkraine = ['Kiev','Lviv','Chernivci','Odessa'];
  let countries;
  let selectedCountries;
  let cities;
  let element;
  let city;

  cities = document.getElementById('cities');
  countries = document.getElementById('countries');



  function creatorSelect(country) { // creat tag <selector> of cities
    for (element = 0; element < country.length; element++ ){
    city = document.createElement("option");
    city.innerHTML = country[element];
    cities.prepend(city);
    }
  }

  function chooseCitesForCountry() {  // we chhose cities for country
    countriesIndex = countries.options.selectedIndex;
    selectedCountries = countries[countriesIndex];

    while (cities.firstChild) {
      cities.removeChild(cities.firstChild);
    }
    if (countriesIndex === 0) {
      creatorSelect(citiesOfUsa);
    } else if (countriesIndex === 1) {
      creatorSelect(citiesOfGermany);
    }else {
      creatorSelect(citiesOfUkraine);
    }
  }
  countries.addEventListener("click",chooseCitesForCountry);


  function showCountryAndCity() { // we show selected country and city
    let resultCountry = document.querySelector('p');
    let citiesIndex = cities.options.selectedIndex;
    let selectedcitiy = cities[citiesIndex];
    resultCountry.innerHTML = selectedCountries.innerHTML +", " + selectedcitiy.innerHTML;
  }
  cities.addEventListener("click",showCountryAndCity);
