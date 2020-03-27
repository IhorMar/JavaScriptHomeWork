//TASK#1-------------------------------

        //Variant#1//

// document.getElementById("test").innerHTML = "Last";

        //Variant#2//

// test.innerHTML = "Last";

        //Variant#3//

 // document.getElementsByTagName('div')[0].innerHTML = "Last";


//TASK#2-------------------------------

// let myImg = document.getElementsByClassName("image")[0];
// myImg.src = "cat.jpg";

//TASK#3-------------------------------

// let divElem = document.getElementById("text");
// for (var i = 0; i < divElem.querySelectorAll("p").length; i++) {
//   result = `Selector text ${i}: ${divElem.querySelectorAll("p")[i].innerHTML}`
//   console.log(result);
// }

//TASK#4-------------------------------
          //Variant#1//
//
// let listr = document.querySelectorAll('li');
//   alert(listr[0].innerHTML);
//   alert(listr[4].innerHTML);
//   alert(listr[1].innerHTML);
//   alert(listr[3].innerHTML);
//   alert(listr[2].innerHTML);

          //Variant#2//

// let listElement = document.getElementById("list");
// alert(document.querySelector("li").innerHTML); //---li 1----
// //-----or------
// alert(listElement.firstChild.nextSibling.innerHTML); //----Li 1----
// alert(listElement.lastChild.previousSibling.innerHTML); //---li 5----
// alert(listElement.firstChild.nextSibling.nextElementSibling.innerHTML); //----li 2----
// alert(listElement.lastChild.previousSibling.previousElementSibling.innerHTML); //----li 4----
// alert(listElement.lastChild.previousSibling.previousElementSibling.previousElementSibling.innerHTML); //----li 3----


//TASK#5-------------------------------

// document.querySelector("h1").style.backgroundColor = "green";
//
// let divSection = document.getElementById("myDiv");
//   divSection.querySelectorAll('p')[0].style.fontWeight = "bold";
//   divSection.querySelectorAll('p')[1].style.color = "red";
//   divSection.querySelectorAll('p')[2].style.textDecoration = "underline";
//   divSection.querySelectorAll('p')[3].style.fontStyle = "italic";
//
//
// let listParagraf = [];
// let ulList = document.getElementById("myList");
// let lists = document.querySelectorAll("li");
//     for (var i = 0; i < lists.length; i++) {
//       listParagraf[i] = lists[i].innerHTML;
//     }
//
//     let newParagraf = document.createElement("p");
//       newParagraf.innerHTML = listParagraf.join(" ");
//         ulList.replaceWith(newParagraf,ulList)
//         ulList.remove();



// document.getElementsByTagName("span")[0].style.visibility = "hidden";


//TASK#6-------------------------------

// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
//
// let message1 = prompt("Enter you first message.");
// let message2 = prompt("Enter you second message.")
//
// input1.value = message1;
// input2.value = message2;
//
// input1.before(input2)


//TASK#7-------------------------------

// let head = document.querySelector("head");
//   let newBody = document.createElement("BODY");
//     head.insertAdjacentElement('afterend', newBody);
//
// let bodyElem = document.querySelector("body");
//   bodyElem.insertAdjacentHTML("afterbegin",'<main class="mainClass check item"></main>');
//
// let mainElem = document.getElementsByClassName("mainClass check item")[0];
//   let newDiv = document.createElement("div");
//     newDiv.id = "myDiv";
//   mainElem.prepend(newDiv);
//
// let div = document.getElementsByTagName("div")[0];
// let newPar = document.createElement("p");
//   newPar.innerHTML = "First paragraph";
//     div.prepend(newPar);
