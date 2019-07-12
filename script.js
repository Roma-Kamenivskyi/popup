(() => {
  // variables
  const FIRST = document.querySelector(".first-modal");
  const SECOND = document.querySelector(".second-modal");
  const THIRD = document.querySelector(".third-modal");
  const FOURTH = document.querySelector(".fourth-modal");

  let modal = new Popup();

  // initialization
  let initModals = () => {
    firstModal();
    secondModal();
    thirdModal();
    fourthModal();
  };

  initModals();

  // functions
  function firstModal() {
    FIRST.addEventListener("click", function(e) {
      e.preventDefault();
      modal.open(`
        <img src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'>
        <h1>Its working!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt?</p>
      `);

      document.querySelector(".audio").play();
    });
  }

  function secondModal() {
    let form = document.querySelector(".form-wrap");

    SECOND.addEventListener("click", function(e) {
      e.preventDefault();
      modal.open(form.innerHTML);
    });
  }

  function thirdModal() {
    THIRD.addEventListener("click", function(e) {
      e.preventDefault();
      modal.open(
        `<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/PGnNVW5n-3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      );
    });
  }

  function fourthModal() {
    FOURTH.addEventListener("click", function(e) {
      e.preventDefault();
      modal.open(
        `<p>It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. </p>`
      );
    });
  }
})();
