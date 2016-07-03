import SearchresultsModule from './searchresults'
import SearchresultsController from './searchresults.controller';
import SearchresultsComponent from './searchresults.component';
import SearchresultsTemplate from './searchresults.html';

describe('Searchresults', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SearchresultsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchresultsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    it('has a name property hideShowMore', () => {
      let controller = makeController();
      expect(controller).to.have.property('hideShowMore');
      expect(controller.hideShowMore).to.be.false;
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SearchresultsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SearchresultsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchresultsController);
      });
  });
});
