const inputs = document.querySelectorAll(".controls");
const arrInputs = Array.from(inputs);

function handleUpdates() {
  const suffers = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffers
  );
}

arrInputs.forEach((input) => input.addEventListener("input", handleUpdates));
