"use strict";

let system = () => {
    const items = [
        { name: "8-PC Bucket Meal", img: "./Img/BMEAL2.jpg", price: "P805" },
        { name: "Twister Combo", img: "./Img/TWISTERCBO.jpg", price: "P170" },
        { name: "Famous Bowl Meal", img: "./Img/FAMBOWLCBO.jpg", price: "P300" },
        { name: "Bucket of 10", img: "./Img/BUCK10.jpg", price: "P400" },
        { name: "Zinger Combo", img: "./Img/SIGSWCBO.jpg", price: "P500" },
        { name: "2-PC Fully Loaded Meal", img: "./Img/2PCFLBOXCBO.jpg", price: "P600" },
        { name: "Ala King Zinger Steak Meal With Buttered Corn", img: "./Img/AKZSMBCORNCBO.jpg", price: "P700" },
        { name: "Creamy Iced Coffee", img: "./Img/CREAMICEDCOFFEE.jpg", price: "P800" },
        { name: "Large Shots Combo", img: "./Img/SHOTS-LCBO.jpg", price: "P900" },
        { name: "Zinger Sandwich Fully Loaded Meal", img: "./Img/ZNGRSNDWCHFLM.jpg", price: "P1000" },
        { name: "Smoky BBQ Zinger Ala Carte", img: "./Img/SBBQZINGER.jpg", price: "P1100" },
        { name: "Smokey BBQ Zinger Combo", img: "./Img/SBBQZINGERCBO.jpg", price: "P1200" },
        { name: "Coffee float", img: "./Img/CFFEEFLOAT.jpg", price: "P1300" },
        { name: "Zinger stacker", img: "./Img/ZSTACKER.jpg", price: "P1400" },
        { name: "Zinger stacker combo", img: "./Img/ZSTACKERCBO.jpg", price: "P1500" },
        { name: "Holiday Brownie Box", img: "./Img/HOLBRWNYBOX.jpg", price: "P1600" },
        { name: "Bucket of 8pcs chicken + side", img: "./Img/HEHE.jpg", price: "P1700" },
        { name: "Bucket of chicken & Steak + Side", img: "./Img/hihi.jpg", price: "P1800" },
        { name: "Bucket of shots + side", img: "./Img/hoho.jpg", price: "P1900" },
        { name: "Bucket of nuggets + side", img: "./Img/hahahaha.jpg", price: "P2000" },
    ];

    let totalAmount = 0;
    let modal;  

    const createCard = (item) => {
        const card = document.createElement("div");
        card.id = "card";
        card.setAttribute("data-name", item.name);
    
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;
    
        const text = document.createTextNode(item.name);
    
        const price = document.createElement("p");
        price.textContent = item.price;
    
        const button = createAddButton(item);
    
        card.appendChild(img);
        card.appendChild(text);
        card.appendChild(price);  
        card.appendChild(button);
    
        return card;
    };
    
    const createAddButton = (item) => {
        const button = document.createElement("button");
        button.classList.add("addBtn");
        button.textContent = "Add to Order";

        button.addEventListener("click", () => {
            addItemToOrder(item);
        });

        return button;
    };

    const addItemToOrder = (item) => {
        if (!document.getElementById("receipt")) {
            showCart(); 
        }

        const orderDisplay = document.createElement("div");
        orderDisplay.classList.add("orderDetails");

        const name = document.createElement("p");
        name.textContent = `Item: ${item.name}`;

        const orderValue = document.createElement("p");
        orderValue.textContent = `Order Price: ${item.price}`;

        orderDisplay.appendChild(name);
        orderDisplay.appendChild(orderValue);

        let receipt = document.getElementById("receipt");
        receipt.appendChild(orderDisplay);

        const orderNumeric = parseFloat(item.price.replace("P", "").replace(/,/g, ""));
        totalAmount += orderNumeric;
        updateTotalDisplay();
    };

    const updateTotalDisplay = () => {
        const totalElement = document.getElementById("total");
        totalElement.textContent = `Total: P${totalAmount.toFixed(2)}`;
    };

    const clearOrder = () => {
        document.getElementById("receipt").innerHTML = "";
        totalAmount = 0;
        updateTotalDisplay();
    };

    const createTotal = () => {
        const total = document.createElement("div");
        total.classList.add("total");

        const totalPrice = document.createElement("div");
        totalPrice.id = "total";
        totalPrice.textContent = "Total: P0";
        
        total.appendChild(totalPrice);
        return total;
    };

    const createClear = () => {
        const clearParent = document.querySelector(".containerClearShow");
        const clearBtn = document.createElement("button");
        clearBtn.id = "clearBtn";
        clearBtn.textContent = "Clear Order";

        clearBtn.addEventListener("click", clearOrder);
        clearParent.appendChild(clearBtn);
    };

    const showCart = () => {
        if (!modal) {
            const modalOverlay = document.createElement('div');
            modal = document.createElement('div');
            const modalContent = document.createElement('div');
            const closeButton = document.createElement('button');
            
            modalOverlay.classList.add('modal-overlay');
            modal.classList.add('modal');
            modalContent.classList.add('modal-content');
            closeButton.classList.add('close-button');
            closeButton.textContent = 'x';
            
            modal.appendChild(closeButton);
            modal.appendChild(modalContent);
            modalOverlay.appendChild(modal);
            
            document.body.appendChild(modalOverlay);
            
            closeButton.addEventListener('click', closeModal);
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
            
            const total = createTotal();
            const receipt = document.createElement("div");
            receipt.id = "receipt";
    
            modalContent.appendChild(total);
            modalContent.appendChild(receipt);
        }
    };
    
    const openModal = () => {
        showCart();  
        document.querySelector('.modal-overlay').classList.add('open');
    };
    
    function closeModal() {
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('open'); 
        }
    }
    
    const initialize = () => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("new");
    
        items.forEach((item) => {
            const card = createCard(item);
            itemContainer.appendChild(card);
        });
    
        const container = document.querySelector(".container");
        container.appendChild(itemContainer);
    };

    createClear();
    initialize();
    const showCartBtn = document.querySelector(".cartBtn");
    showCartBtn.addEventListener("click", openModal);
};

system();
