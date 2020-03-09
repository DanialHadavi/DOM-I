const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//navigation

let anchors = document.querySelectorAll("a");

anchors[0].setAttribute("nav", "nav-item-1");
anchors[0].innerText = "Services";

anchors[1].setAttribute("nav", "nav-item-2");
anchors[1].innerText = "Product";

anchors[2].setAttribute("nav", "nav-item-3");
anchors[2].innerText = "Vision";

anchors[3].setAttribute("nav", "nav-item-4");
anchors[3].innerText = "Features";

anchors[4].setAttribute("nav", "nav-item-5");
anchors[4].innerText = "About";

anchors[5].setAttribute("nav", "nav-item-6");
anchors[5].innerText = "Contact";

anchors.forEach(navs => {
  navs.style.color = "green";
});

//adding two new nav items
const newNavItem = document.createElement("a");
const mainNav = document.querySelector("nav");
newNavItem.innerText = "Marketing";
newNavItem.href = "#";
mainNav.prepend(newNavItem);
newNavItem.style.color = "green";

const newNavItem2 = document.createElement("a");
const mainNav2 = document.querySelector("nav");
newNavItem2.innerText = "Chat";
newNavItem2.href = "#";
mainNav2.append(newNavItem2);
newNavItem2.style.color = "green";

//header

let header1 = document.querySelector("h1");
header1.textContent = siteContent["cta"]["h1"];

let button1 = document.querySelector("button");
button1.textContent = "Get Started";

let logo1 = document.getElementById("cta-img");
logo1.setAttribute("src", siteContent["cta"]["img-src"]);
