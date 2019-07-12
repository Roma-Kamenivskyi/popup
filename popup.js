class Popup {
  constructor() {
    this.createModal();
    this.append();

    this.overlay.addEventListener("click", () => {
      this.close();
    });
  }

  open(content) {
    this.modal.innerHTML = content;
    this.display("block");
  }

  close() {
    this.display("none");
  }

  display(value) {
    this.overlay.style.display = value;
    this.modal.style.display = value;
  }

  createModal() {
    this.modal = document.createElement("div");
    this.modal.classList.add("modal");
    this.overlay = document.createElement("div");
    this.overlay.classList.add("overlay");
  }

  append() {
    document.body.appendChild(this.overlay);
    document.body.appendChild(this.modal);
  }
}
