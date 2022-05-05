function initTabNav() {
  const allImagem = document.querySelectorAll(".js-tabmenu li");
  const allTexto = document.querySelectorAll(".js-tabcontent section");

  if (allImagem.length && allTexto.length) {
    allTexto[0].classList.add("Ativo");
  }

  function itemEscolhido(index) {
    allTexto.forEach((section) => {
      section.classList.remove("Ativo");
    });
    allTexto[index].classList.add("Ativo");
  }

  allImagem.forEach((umaImagem, index) => {
    umaImagem.addEventListener("click", () => {
      itemEscolhido(index);
    });
  });
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();
