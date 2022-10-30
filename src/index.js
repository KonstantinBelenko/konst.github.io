let hamb = (document.getElementById("hamb-menu").onclick = function () {
  document.getElementById("hamb-svg").classList.toggle("opened");
  document.getElementById("menu").classList.toggle("opened");
});

let menuItems = document.querySelectorAll(".menu-item");
let pages = document.querySelectorAll(".page");

pages.forEach((page) => {
  if (page.classList.contains("active")) {
    page.classList.remove("active");
  }
  let link = window.location.pathname;
  if (link === page.getAttribute("link")) {
    page.classList.add("active");
  }
});

addEventListener("popstate", (event) => {
  pages.forEach((page) => {
    if (page.classList.contains("active")) {
      page.classList.remove("active");
    }
    let link = window.location.pathname;
    if (link === page.getAttribute("link")) {
      page.classList.add("active");
    }
  });
});

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    document.getElementById("hamb-svg").classList.toggle("opened");
    document.getElementById("menu").classList.toggle("opened");
    document.querySelectorAll(".active")[0].classList.remove("active");
    pages[index].classList.add("active");

    let nextURL =
      window.location.protocol +
      "//" +
      window.location.host +
      item.getAttribute("to");
    let nextState = { page: item.getAttribute("to") };
    let nextTitle = "LA ROSE 432";
    window.history.pushState(nextState, nextTitle, nextURL);
  });
});

console.log(window.location.href);
