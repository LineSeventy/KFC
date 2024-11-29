"use strict";

let system = () => {
    let cards = document.querySelectorAll("#card");  
    let orderValue = ["P805", "P170", "P300", "P400", "P500", "P600", "P700", "P800", "P900", "P1000", "P1100", "P1200", "P1300", "P1400", "P1500", "P1600", "P1700", "P1800", "P1900", "P2000"];  

    let totalAmount = 0;  

 
    cards.forEach((card, index) => {
        let button = document.createElement("button");
        card.appendChild(button);
        button.classList.add("addBtn");
        button.textContent = "Add to Order";


        let cardName = card.getAttribute("data-name");
        let order = orderValue[index];  
        let orderNumeric = parseFloat(order.replace("P", "").replace(",", ""));


        button.addEventListener("click", () => {

            let orderDisplay = document.createElement("div");
            orderDisplay.classList.add("orderDetails");


            let nameElement = document.createElement("p");
            nameElement.textContent = `Item: ${cardName}`;

            let orderValueElement = document.createElement("p");
            orderValueElement.textContent = `Order Value: ${order}`;


            orderDisplay.appendChild(nameElement);
            orderDisplay.appendChild(orderValueElement);


            document.getElementById("receipt").appendChild(orderDisplay);


            totalAmount += orderNumeric;
            document.getElementById("total").textContent = `Total: P${totalAmount.toFixed(2)}`;
        });
    });


    document.getElementById("clearBtn").addEventListener("click", () => {
        let receiptSection = document.getElementById("receipt");
        receiptSection.innerHTML = "";
        totalAmount = 0;  
        document.getElementById("total").textContent = "Total: P0"; 
    });
}



system();