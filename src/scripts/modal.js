function Modal() {

  // in future updates, instructions will be factored into click-thru
  // panels with more visual storytelling.

  this.instructions = document.getElementById("modal-shown");
}

Modal.prototype.closeModal = function closeModal() {
  this.instructions.id = "modal-hidden";
};

Modal.prototype.showModal = function showModal(){
  this.instructions.id = "modal-shown";
};

module.exports = Modal;