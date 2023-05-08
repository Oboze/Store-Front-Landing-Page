//create product object
let Product = {
    items: [
      {
        productName: "Fancy Radio",
        category: "Electronics",
        price: "30000",
        image: "images/radio.jpg",
      },
      {
        productName: "Think and Grow Rich",
        category: "Books",
        price: "1500",
        image: "images/think.jpg",
      },
      {
        productName: "Super Sofa",
        category: "Furniture",
        price: "230000",
        image: "images/sofa.jpg",
      },
      {
        productName: "Lenovo Laptop",
        category: "Computers",
        price: "65000",
        image: "images/lenovo.jpg",
      },
      {
        productName: "Samsung TV",
        category: "Electronics",
        price: "345000",
        image: "images/tv.jpeg",
      },
      {
        productName: "Trousers",
        category: "Clothing",
        price: "890",
        image: "images/trousers.jpg",
      },
      {
        productName: "Shirt",
        category: "Clothing",
        price: "700",
        image: "images/shirt.jpg",
      },
      {
        productName: "Jumbo Bed",
        category: "Furniture",
        price: "1000000",
        image: "images/bed.jpg",
      },
      {
        productName: "The Subtle Art of Not Giving a F***",
        category: "Books",
        price: "2000",
        image: "images/fuck.jpg",
      },

      {
        productName: "Washing Machine",
        category: "Electronics",
        price: "490000",
        image: "images/washing.jpeg",
      },
    ],
  };


  for (let i of Product.items) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "Kshs " + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };