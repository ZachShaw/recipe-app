import ModalModule from './modal'
import ModalController from './modal.controller';
import ModalComponent from './modal.component';
import ModalTemplate from './modal.html';

describe('Modal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ModalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {

    describe('show property', () => {

      it('should be defined', () => {
        let controller = makeController();
        expect(controller).to.have.property('show');
      });

      it('should be set to false', () => {
        let controller = makeController();
        expect(controller.show).to.be.false;
      });

    });

    describe('showModal function', () => {

      it('should be defined', () => {
        let controller = makeController();
        expect(controller.showModal).to.be.a('function');
      });

      it('should set show to true', () => {
        let controller = makeController();
        controller.show = false;
        expect(controller.show).to.be.false;
        controller.showModal();
        expect(controller.show).to.be.true;
      });

    });

    describe('closeModal function', () => {

      it('should be defined', () => {
        let controller = makeController();
        expect(controller.closeModal).to.be.a('function');
      });

      it('should set show to false', () => {
        let controller = makeController();
        controller.show = true;
        expect(controller.show).to.be.true;
        controller.closeModal();
        expect(controller.show).to.be.false;
      });

    });


  });

  describe('Component', () => {
      // component/directive specs
      let component = ModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ModalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ModalController);
      });
  });
});
