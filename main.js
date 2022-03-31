const catigories = document.querySelectorAll(".categories a");
const catigory = document.querySelector(".categories");
const products = document.querySelectorAll(".product-card");
const search = document.querySelector("#search");
const listIcon = document.querySelector(".list-icon");
// filter products by category
catigories.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    search.value = "";
    let cat = el.innerText;

    catigories.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");

    products.forEach((el) => {
      if (el.dataset.catigory == cat) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });

    if (cat == "All") {
      products.forEach((el) => {
        el.style.display = "block";
      });
    }
  });
});

// search about product by name
search.addEventListener("keyup", (e) => {
  products.forEach((el) => {
    if (
      el
        .querySelector("h3")
        .innerText.toLowerCase()
        .includes(search.value.trim().toLowerCase())
    ) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
});

//menue icon show and hide the list
listIcon.addEventListener("click", (e) => {
  if (catigory.style.display == "none") {
    catigory.style.display = "flex";
  } else {
    catigory.style.display = "none";
  }
});
