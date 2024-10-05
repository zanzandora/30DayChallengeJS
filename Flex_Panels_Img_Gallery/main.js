const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // Kiểm tra nếu panel hiện tại đã có lớp 'open' thì giữ nguyên, không làm gì cả
    if (panel.classList.contains("open")) {
      return;
    }
    // Xóa lớp 'open' và 'open-active' khỏi tất cả các panel khác
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
