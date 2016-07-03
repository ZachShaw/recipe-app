import SearchbarModule from './searchbar'
import SearchbarController from './searchbar.controller';
import SearchbarComponent from './searchbar.component';
import SearchbarTemplate from './searchbar.html';

describe('Searchbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SearchbarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchbarController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });


  describe('Controller', () => {

    describe('submitQuery', () => {
      it('should be defined', () => {
          let controller = makeController();
          expect(controller).to.have.property('submitQuery');
      });

      it('should be a function', () => {
          let controller = makeController();
          expect(controller.submitQuery).to.be.a('function');
      });

    });

  });


  describe('Component', () => {
      // component/directive specs
      let component = SearchbarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SearchbarTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchbarController);
      });
  });
});
