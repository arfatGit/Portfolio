// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// dark-mode

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//Skills Progress Bar

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementsByClassName("prog")[0];
    var br = document.getElementsByClassName("bar")[0];
    var elem1 = document.getElementsByClassName("prog")[1];
    var br1 = document.getElementsByClassName("bar")[1];
    var elem2 = document.getElementsByClassName("prog")[2];
    var br2 = document.getElementsByClassName("bar")[2];
    var elem3 = document.getElementsByClassName("prog")[3];
    var br3 = document.getElementsByClassName("bar")[3];
    //////////////////////////////////////////////////////
    var elem4 = document.getElementsByClassName("prog")[4];
    var br4 = document.getElementsByClassName("bar")[4];
    var elem5 = document.getElementsByClassName("prog")[5];
    var br5 = document.getElementsByClassName("bar")[5];
    var elem6 = document.getElementsByClassName("prog")[6];
    var br6 = document.getElementsByClassName("bar")[6];
    var elem7 = document.getElementsByClassName("prog")[7];
    var br7 = document.getElementsByClassName("bar")[7];
    var width = 0;
    var width1 = 0;
    var width2 = 0;
    var width3 = 0;
    ///////////////
    var width4 = 0;
    var width5 = 0;
    var width6 = 0;
    var width7 = 0;
    var id = setInterval(frame, 80);
    var id1 = setInterval(frame, 80);
    var id2 = setInterval(frame, 80);
    var id3 = setInterval(frame, 80);
    /////////////////////////////////
    var id4 = setInterval(frame, 80);
    var id5 = setInterval(frame, 80);
    var id6 = setInterval(frame, 80);
    var id7 = setInterval(frame, 80);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        br.style.width = width + "%";
      }
      if (width1 >= 80) {
        clearInterval(id1);
        i = 0;
      } else {
        width1++;
        elem1.style.width = width1 + "%";
        elem1.innerHTML = width1 + "%";
        br1.style.width = width1 + "%";
      }
      if (width2 >= 60) {
        clearInterval(id2);
        i = 0;
      } else {
        width2++;
        elem2.style.width = width2 + "%";
        elem2.innerHTML = width2 + "%";
        br2.style.width = width2 + "%";
      }
      if (width3 >= 70) {
        clearInterval(id3);
        i = 0;
      } else {
        width3++;
        elem3.style.width = width3 + "%";
        elem3.innerHTML = width3 + "%";
        br3.style.width = width3 + "%";
      }
      ///////////////////////////////////
      if (width4 >= 50) {
        clearInterval(id4);
        i = 0;
      } else {
        width4++;
        elem4.style.width = width4 + "%";
        elem4.innerHTML = width4 + "%";
        br4.style.width = width4 + "%";
      }
      if (width5 >= 60) {
        clearInterval(id5);
        i = 0;
      } else {
        width5++;
        elem5.style.width = width5 + "%";
        elem5.innerHTML = width5 + "%";
        br5.style.width = width5 + "%";
      }
      if (width6 >= 50) {
        clearInterval(id6);
        i = 0;
      } else {
        width6++;
        elem6.style.width = width6 + "%";
        elem6.innerHTML = width6 + "%";
        br6.style.width = width6 + "%";
      }
      if (width7 >= 80) {
        clearInterval(id7);
        i = 0;
      } else {
        width7++;
        elem7.style.width = width7 + "%";
        elem7.innerHTML = width7 + "%";
        br7.style.width = width7 + "%";
      }
    }
  }
}

//Carousel Slider Start

let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

//Carousel Slider End

//Show More Article
function arcticles() {
 x = document.getElementById("morearticle");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else if(x.style.display ="visible") {
    x.style.display = "none";
  }
}

