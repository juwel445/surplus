// global object
const GLOB = {};

// testimonial splider
GLOB.testimonialSplider = function () {
  const container = document.getElementById("testimonialSplide");
  const options = {
    type: "loop",
    arrows: false,
    pagination: false,
    perPage: 3,
    autoplay: true,
    gap: 25,
    mediaQuery: "min",
    destroy: "completely",
    focus: "center",
    breakpoints: {
      576: {
        destroy: false,
        perPage: 1,
      },
      992: {
        perPage: 3,
      },
    },
  };

  // initialized splider
  var splide = new Splide(container, options);

  // mount it to the DOM
  splide.mount();
};

// strategy splider
GLOB.strategySplider = function () {
  const container = document.getElementById("strategySplide");
  const options = {
    type: "loop",
    arrows: false,
    pagination: false,
    autoplay: true,
    gap: 10,
    mediaQuery: "min",
    destroy: "completely",
    breakpoints: {
      576: {
        destroy: false,
        perPage: 3,
      },
      768: {
        perPage: 4,
      },
      992: {
        perPage: 5,
      },
      1200: {
        perPage: 7,
      },
    },
  };

  // initialized splider
  var splide = new Splide(container, options);

  // mount it to the DOM
  splide.mount();
};

// partners splider
GLOB.partnersSplider = function () {
  const container = document.getElementById("partnersSplide");
  const options = {
    type: "loop",
    arrows: false,
    pagination: false,
    autoplay: true,
    gap: 10,
    mediaQuery: "min",
    destroy: "completely",
    breakpoints: {
      576: {
        destroy: false,
        perPage: 3,
      },
      768: {
        perPage: 4,
      },
      992: {
        perPage: 5,
      },
      1200: {
        perPage: 7,
      },
    },
  };

  // initialized splider
  var splide = new Splide(container, options);

  // mount it to the DOM
  splide.mount();
};

// stats calculate
GLOB.statCalculator = function () {
  const statInput = document.getElementById("statAmount");

  function calculate(ele) {
    let slectPrice = ele.parentNode.parentNode.children[0].children[1];
    ele.style.background = `linear-gradient(to right, #403489 0%, #403489 ${
      ((ele.value - ele.min) / (ele.max - ele.min)) * 100
    }%, #DEE2E6 ${
      ((ele.value - ele.min) / (ele.max - ele.min)) * 100
    }%, #DEE2E6 100%)`;
    // Result in percentage
    ele.parentNode.children[0].innerHTML = formatter
      .format(ele.value)
      .replace("$", "");
    calculateProjectionYears(ele.value * 1);
  }
  /*

X = D(1 + r)^y
X = Projection Year Amount 
D = Investment Amount 
r = period rate (30%)
y = number of years

*/
  function calculateProjection(amt, ra, yr) {
    return amt * Math.pow(1 + ra / 100, yr);
  }

  function calculateProjectionYears(amt) {
    let years = [1, 2, 3, 4, 5, 10, 20, 30];
    let eachYrVal = [];
    years.forEach((y, ind) => {
      let val = calculateProjection(amt, 30, y);
      eachYrVal[ind] = val;
    });
    eachYrVal.forEach((vl, ind) => {
      document.getElementById("py" + years[ind]).innerHTML = formatter
        .format(vl)
        .replace("$", "");
    });
  }

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  statInput.addEventListener("input", function () {
    calculate(this);
  });
};

// toggle menu
GLOB.toggleMenu = function () {
  const menuButton = document.getElementById("menu-toggler");
  const menu = document.getElementById("mobile-menu");

  function changeState(event) {
    event.preventDefault();

    if (menu.classList.contains("mobile-menu")) {
      this.classList.remove("active");
      menu.classList.remove("mobile-menu");
    } else {
      this.classList.add("active");
      menu.classList.add("mobile-menu");
    }
  }

  menuButton.addEventListener("click", changeState);
};

// scolled header
GLOB.scrolledHeader = function () {
  const header = document.getElementById("header-main");
  const pos = window.scrollY;

  console.log(pos);

  if (pos > 0) {
    if (!header.classList.contains("scrolled")) {
      header.classList.add("scrolled");
    }
  } else {
    header.classList.remove("scrolled");
  }
};

// document on load
document.addEventListener("DOMContentLoaded", function () {
  GLOB.testimonialSplider();
  GLOB.strategySplider();
  GLOB.partnersSplider();
  GLOB.statCalculator();
  GLOB.toggleMenu();
});

// document on scroll
window.addEventListener("scroll", function () {
  GLOB.scrolledHeader();
});

// document on resize
window.addEventListener("resize", function () {
  GLOB.testimonialSplider();
  GLOB.strategySplider();
  GLOB.partnersSplider();
});
