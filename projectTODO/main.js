let valueElement = 0;
let days = document.getElementById("day");
let chekElements = document.getElementById("check");
let clear = document.getElementById("clearAll");
let itemsDelButtons = document.getElementById("deleteButtons");
let allDayList = [];

$(document).ready(function() {
    $("#list").focus();
});

//load information from localStorage
if (localStorage.getItem("allDayList") != undefined) {
    allDayList = JSON.parse(localStorage.getItem("allDayList"));
    loadWorkdayList();
}

//create new day
document.getElementById("newList").onclick = function() { //create new work day
    let newDayObject = {};
    let day = document.getElementById("list").value;
    if (day == "") {
        alert("Input your newList!");
    } else {
        valueElement += 1;
        newDayObject.name = valueElement;
        newDayObject.value = day;
        newDayObject.dayItems = [];
        allDayList.push(newDayObject); // add new day loke object to main  list
        $("#day").append(`<option value="${valueElement}">${day}</option>`); //add element to html
        $("#list").val(""); // clear feeld of day for next new input
        localStorageTo();
        return newDayObject;
    }
};

//find index of day
function indexOfDay() {
    optionIndex = days.options.selectedIndex;
    selectDays = days[optionIndex];
}

//clear items and button for next day
function chooseDay() {
    indexOfDay();
    if (optionIndex === 0) {
        alert("Choose the right workday!");
    } else {
        while (chekElements.firstChild && itemsDelButtons.firstChild) {
            chekElements.removeChild(chekElements.firstChild);
            itemsDelButtons.removeChild(itemsDelButtons.firstChild);
        }
        loader();
        addItems();
    }
}
days.addEventListener("change", chooseDay);


//add items and add delete buttons
function addItems() {
    document.getElementById("buttonAdd").onclick = function() {
        let items = document.getElementById("Items").value;
        if (items == "") {
            alert("Input your item!");
        } else {
            $("#check").append(`<p><label><input type="checkbox" name="" value="${items}">${items}</label></p>`); // add check list
            $("#deleteButtons").append(`<button id = "delete" type="button" name="add">-</button>`); // add buttons for delete checked items
            let it = allDayList[optionIndex - 1].dayItems; // add text items to array in object #1
            it.push(items) // add text items to array in object #2
            $("#Items").val(""); // clear feeld of items for next new input
        }
        localStorageTo();
    };
}


// function remover html tag and value from list
document.getElementById("check").onclick = function() {
    let dayItems = chekElements.querySelectorAll("p"); //find check items
    let labels = chekElements.querySelectorAll("label>input");
    for (let i = 0; i < labels.length; i++) {
        if (labels[i].checked == true) {
            labels[i].disabled = true; //turn off our checkin property
            $(dayItems[i]).css("text-decoration", "line-through"); // our text in checked item is line-through
            indexOfDay();
            itemsDelButtons.onclick = function() { //click our button according checked item
                dayItems[i].remove(); //delete item
                itemsDelButtons.getElementsByTagName("button")[i].remove(); //delete button
                let storedElement = allDayList[optionIndex - 1].dayItems
                storedElement.splice(i, 1);
                localStorageTo();
            };
        }
    }
};


function localStorageTo() {
    localStorage.setItem("allDayList", JSON.stringify(allDayList));
}

//loader information from loadWorkdayList to our internet page
function loadWorkdayList() {
    for (let i = 0; i < allDayList.length; i++) {
        $("#day").append(`<option value="${allDayList[i].value}">${allDayList[i].value}</option>`); //add element to html
    }
}

//loader information from list to our internet page
function loader() {
    let storedElement = allDayList[optionIndex - 1].dayItems;
    if (storedElement != 0) {
        for (var i = 0; i < storedElement.length; i++) {
            $("#check").append(`<p><label><input type="checkbox" name="" value="${storedElement[i]}">${storedElement[i]}</label></p>`); // add check list
            $("#deleteButtons").append(`<button id = "delete" type="button" name="add">-</button>`); // add buttons for delete checked items
            $("#Items").val(""); // clear feeld of items for next new input
        }
    }
}

// cler all......
function clearAll() {
    localStorage.clear("allDayList");
    location.reload();
}
clear.addEventListener("click", clearAll);