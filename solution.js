////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */
document.querySelector("link").href = "styles.css";

/* 1.2) Set the class of the image to "list-img" */
document.querySelector(".header img").className = "list-img";

/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */
function setInputs() {
        let inputs = document.querySelectorAll("input");
        for (i = 0; i < inputs.length; i++) {
                inputs[i].classname = "btn";

        }

}



////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */
let list = document.querySelector("#grocery-list");


/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */
let user_answer;
        function addItem() {
        user_answer = prompt("what do you want to add?")
        let new_element = document.createElement("li");
        new_element.innerText = user_answer;
        console.log(new_element);
        ul_element.appendChild(new_element)
}




/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by setting the total-area class to just "total-area"
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */
function getTotal() {
        document.querySelector(".total-area").className = "total-area";
        all_list_items = document.querySelectorAll("li");
        const num_items =  all_list_items.length;
        console.log(num_items);
        document.querySelector("#item-count").innertext = num_items;
}



////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

function removeItem() {
        let user_input = prompt("which items do you want to remove?")
        all_list_items = document.querySelectorAll("li"):
        for (let i = 0; i < all_list_items; i++) {
                if (all_list_items[i].textContent === user_input) {
                        all_list_items[i].remove();
                }
        }

}