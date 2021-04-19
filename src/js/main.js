// Menu Responsive
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

// Plans Section
const btnArrowLeft = document.getElementById("btn-arrow-left");
const btnArrowRight = document.getElementById("btn-arrow-right");
const btnSelect = document.querySelectorAll(".btn-select");
const arrBtnSelect = [...btnSelect];
const cardItems = document.querySelectorAll(".card-item");
const arrCardItems = [...cardItems];
const cardsContainer = document.getElementById("cards-container");
let firstChild = arrCardItems[0];
let secondChild = arrCardItems[1];
let thirdChild = arrCardItems[2];

// Comments Section
const btnCommentArrowLeft = document.getElementById("btn-comment-arrow-left");
const btnCommentArrowRight = document.getElementById("btn-comment-arrow-right");
const commentsElements = document.querySelectorAll(".comment-item");
const arrComments = [...commentsElements];
const showElements = document.querySelectorAll(".show-item");
const arrShowElements = [...showElements];

// Menu Responsive
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Plans Section
for (btnElement of arrBtnSelect) {
  btnElement.addEventListener("click", eventBtnSelect);
}

function eventBtnSelect() {
  let parentItem = this.parentElement;
  if(parentItem.getAttribute("data-select") === "selected") {
    parentItem.classList.toggle("select");
  }
  if(parentItem.getAttribute("data-select") === "") {
    parentItem.classList.toggle("select");
    arrBtnSelect.forEach((e) => {
      if(e.parentElement.getAttribute("data-select") === "selected") {
        e.parentElement.classList.remove("select");
        e.parentElement.setAttribute("data-select", "");
      }
    });
    parentItem.setAttribute("data-select", "selected");
  }
}

for (cardElement of arrCardItems) {
  cardElement.addEventListener("transitionstart", () => {
    btnArrowLeft.setAttribute("disabled", "disabled");
    btnArrowRight.setAttribute("disabled", "disabled");
  });
  cardElement.addEventListener("transitionend", () => {
    btnArrowLeft.removeAttribute("disabled");
    btnArrowRight.removeAttribute("disabled");
  });
}
btnArrowRight.onclick = () => move(1);
btnArrowLeft.onclick = () => move(2);

if(document.body.clientWidth <= 1023) {
  firstChild.style.left = `calc(50% - ${firstChild.clientWidth / 2}px)`;
}

function move(value) {
  let firstInfoItem = arrCardItems[0].getAttribute("data-card-info");
  if (value === 1) {
    switch (firstInfoItem) {
      case "0":
        firstChild.style.left = "-100%";
        secondChild.style.left = `calc(50% - ${secondChild.clientWidth / 2}px)`;
        firstChild.setAttribute("data-card-info", "1");
        btnArrowLeft.classList.toggle("visible");
        break;
      case "1":
        secondChild.style.left = "-100%";
        thirdChild.style.left = `calc(50% - ${thirdChild.clientWidth / 2}px)`;
        firstChild.setAttribute("data-card-info", "2");
        btnArrowRight.classList.toggle("visible");
        break;
    }
  }
  if (value === 2) {
    switch (firstInfoItem) {
      case "1":
        secondChild.style.left = "100%";
        firstChild.style.left = `calc(50% - ${firstChild.clientWidth / 2}px)`;
        firstChild.setAttribute("data-card-info", "0");
        btnArrowLeft.classList.toggle("visible");
        break;
      case "2":
        thirdChild.style.left = "100%";
        secondChild.style.left = `calc(50% - ${secondChild.clientWidth / 2}px)`;
        firstChild.setAttribute("data-card-info", "1");
        btnArrowRight.classList.toggle("visible");
        break;
    }
  }
}

if (cardsContainer.clientWidth >= 1024) {
  for (cardElement of arrCardItems) {
    cardElement.classList.remove("active");
  }
}

// Comments Section
if(document.body.clientWidth <= 1023) {
  arrComments[0].style.left = `calc(50% - ${arrComments[0].clientWidth / 2}px)`;
}
btnCommentArrowLeft.onclick = () => moveComments(1, arrComments, arrShowElements);
btnCommentArrowRight.onclick = () => moveComments(2, arrComments, arrShowElements);

arrComments.forEach(e => {
  e.addEventListener("transitionstart", () => {
    btnCommentArrowLeft.setAttribute("disabled", "disabled");
    btnCommentArrowRight.setAttribute("disabled", "disabled");
  });
  e.addEventListener("transitionend", () => {
    btnCommentArrowLeft.removeAttribute("disabled");
    btnCommentArrowRight.removeAttribute("disabled");
  });
})

function moveComments(value, array, arrayShow) {
  let firstInfoItem = array[0].getAttribute("data-comment-info");
  if(value === 1) {
    switch (firstInfoItem) {
      case "1":
        array[1].style.left = "100%";
        array[0].setAttribute("data-comment-info", "0");
        array[0].style.left = `calc(50% - ${array[1].clientWidth / 2}px)`;
        btnCommentArrowLeft.style.display = "none";
        arrayShow[1].classList.toggle("active");
        arrayShow[0].classList.toggle("active");
        break;
        
      case "2":
        array[2].style.left = "100%";
        array[0].setAttribute("data-comment-info", "1");
        array[1].style.left = `calc(50% - ${array[1].clientWidth / 2}px)`;
        btnCommentArrowRight.style.display = "block";
        arrayShow[2].classList.toggle("active");
        arrayShow[1].classList.toggle("active");
        break;
      }
    }
    if(value === 2) {
      switch (firstInfoItem) {
        case "0":
          array[0].style.left = "-100%";
          array[0].setAttribute("data-comment-info", "1");
          array[1].style.left = `calc(50% - ${array[1].clientWidth / 2}px)`;
          btnCommentArrowLeft.style.display = "initial";
          arrayShow[0].classList.toggle("active");
          arrayShow[1].classList.toggle("active");
        break;
      case "1":
        array[1].style.left = "-100%";
        array[0].setAttribute("data-comment-info", "2");
        array[2].style.left = `calc(50% - ${array[2].clientWidth / 2}px)`;
        btnCommentArrowRight.style.display = "none";
        arrayShow[1].classList.toggle("active");
        arrayShow[2].classList.toggle("active");
        break;
    }
  }
}