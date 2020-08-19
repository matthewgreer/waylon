const renderModal = () => {
  const modal = document.getElementById('modal');

    img.onclick = function (e) {
      console.log(e);
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  

  const closeButton = document.getElementById("close")[0];

  closeButton.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }
}