const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((p) => {
      p.classList.remove("open");
      p.classList.remove("open-active");
    });
    panel.classList.toggle("open");
  });
});
panels.forEach((panel) => {
  panel.addEventListener("transitionend", (e) => {
    if (e.propertyName.includes("flex")) {
      if (panel.classList.contains("open")) {
        panel.classList.add("open-active");
      }
    }
  });
});
