window.addEventListener("DOMContentLoaded", () => {
  const $toggle = document.querySelectorAll(".toggle"),
    $menu = document.querySelector(".navbar");

  $toggle.forEach((element) => {
    element.onclick = () => {
      if ($menu.dataset.hidden === "true") {
        $menu.dataset.hidden = "false";
      } else {
        $menu.dataset.hidden = "true";
      }
    };
  });
});
