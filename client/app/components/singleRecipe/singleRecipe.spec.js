import SingleRecipeModule from './singleRecipe'
import SingleRecipeController from './singleRecipe.controller';
import SingleRecipeComponent from './singleRecipe.component';
import SingleRecipeTemplate from './singleRecipe.html';

//todo: how to mock recipe state resolve? (!)

describe('SingleRecipe', () => {
  let $rootScope,
      makeController;

  beforeEach(window.module(SingleRecipeModule.name));

  beforeEach(inject((_$rootScope_) => {
    makeController = () => {
      return new SingleRecipeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // it('has a heading property', () => {
    //   let controller = makeController();
    //   expect(controller).to.have.property('heading');
    //   expect(controller).to.be.a('string');
    // });
    // it('has assigned recipe title to the heading', () => {
    //   let controller = makeController();
    //   expect(controller.heading).to.equal(controller.recipe.title);
    // });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SingleRecipeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SingleRecipeTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SingleRecipeController);
      });
  });
});
