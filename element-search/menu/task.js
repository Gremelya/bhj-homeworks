document.querySelector(".menu_main").onclick = (event) => {
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.classList.toggle("menu_active");
      return false;
    }
  };
