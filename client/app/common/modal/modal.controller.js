class ModalController {
  constructor() {
    this.show = false;
  }
  showModal() {
    this.show = true;
  }
  closeModal() {
    this.show = false;
  }
}

export default ModalController;
