import HeroModule from './hero'
import HeroController from './hero.controller';
import HeroComponent from './hero.component';
import HeroTemplate from './hero.html';

describe('Hero', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HeroModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HeroController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HeroComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HeroTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HeroController);
      });
  });
});
