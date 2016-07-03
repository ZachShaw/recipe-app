import SearchModule from './search'
import SearchController from './search.controller';
import SearchComponent from './search.component';
import SearchTemplate from './search.html';

describe('Search', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SearchModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('getSearchResults', () => {

    it('should be defined', () => {
        let controller = makeController();
        expect(controller).to.have.property('getSearchResults');
    });

    it('should be a function', () => {
        let controller = makeController();
        expect(controller.getSearchResults).to.be.a('function');
    });

    // it('should set promiseLoading to true', () => {
    //     let controller = makeController();
    //     controller.getSearchResults();
    //     expect(controller.promiseLoading).to.be.true;
    // });

    // it('should call recipe service', () => {
    //   let controller = makeController();
    //   controller.getSearchResults();
    // });

  });

  describe('Component', () => {
      // component/directive specs
      let component = SearchComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SearchTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchController);
      });
  });
});
