
const navEl = document.querySelector(<MyNavLinks></MyNavLinks>);
window.addEventListener("scroll", () => {
  if (window.scroll > 0) {
    navEl.classList.add("scrolled");
  } else {
    navEl.classList.remove("scrolled");
  }
});

export default navEl;
