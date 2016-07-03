import UploadRecipeModule from './uploadRecipe'
import UploadRecipeController from './uploadRecipe.controller';
import UploadRecipeComponent from './uploadRecipe.component';
import UploadRecipeTemplate from './uploadRecipe.html';

describe('UploadRecipe', () => {
  let $rootScope,
      makeController;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UploadRecipeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {

    it('has a heading property', () => {
      let controller = makeController();
      expect(controller).to.have.property('heading');
    });

    describe('initial formObj', () => {

      it('should be defined', () => {
        let controller = makeController();
        controller.formObj.should.be.a('object');
      });

      it('should have empty ingredients array', () => {
        let controller = makeController();
        controller.formObj.should.have.property('ingredients');
        controller.formObj.ingredients.should.be.a('array').with.length(0);
      });

      it('should have empty steps array', () => {
        let controller = makeController();
        controller.formObj.should.have.property('steps');
        controller.formObj.steps.should.be.a('array').with.length(0);
      });

    });

    describe('ingrEntries', () => {

      it('should be defined', () => {
        let controller = makeController();
        expect(controller).to.have.property('ingrEntries');
      });

      it('should be an array', () => {
        let controller = makeController();
        expect(controller.ingrEntries).to.be.a('array');
      });

      it('should have 3 objects', () => {
        let controller = makeController();
        expect(controller.ingrEntries).with.length(3)
      });

      it('should have 3 objects with title property', () => {
        let controller = makeController();
        controller.ingrEntries[0].title.should.be.a('string');
        controller.ingrEntries[1].title.should.be.a('string');
        controller.ingrEntries[2].title.should.be.a('string');
      });

      describe('object specifics', () => {

        it('should have unique title property in the first object', () => {
          let controller = makeController();
          expect(controller.ingrEntries[0].title).to.equal('eg hummus');
        });

        it('should have default placeholder title in all objects except for the first', () => {
          let controller = makeController();
          expect(controller.ingrEntries[1].title).to.equal('add ingredient');
          expect(controller.ingrEntries[2].title).to.equal('add ingredient');
        });

      });

    });

    describe('addIngrEntry', () => {

      it('should be defined', () => {
        let controller = makeController();
        expect(controller).to.have.property('addIngrEntry');
      });

      it('should be an array', () => {
        let controller = makeController();
        expect(controller.addIngrEntry).to.be.a('function');
      });

      it('should add a new object to ingrEntries', () => {
        let controller = makeController();
        expect(controller.ingrEntries.length).to.equal(3);
        controller.addIngrEntry();
        let newObject = controller.ingrEntries[3];
        expect(controller.ingrEntries.length).to.equal(4);
        expect(newObject).to.be.an('object');
        expect(controller.ingrEntries[4]).to.be.undefined;
      });

      it('should add a new object to ingrEntries with a title property', () => {
        let controller = makeController();
        expect(controller.ingrEntries.length).to.equal(3);
        controller.addIngrEntry();
        let newObject = controller.ingrEntries[3];
        expect(controller.ingrEntries.length).to.equal(4);
        expect(newObject.title).to.equal('add ingredient');
      });

    });

    describe('stepsEntries', () => {

      it('should be defined', () => {
        let controller = makeController();
        expect(controller).to.have.property('stepsEntries');
      });

      it('should be an array', () => {
        let controller = makeController();
        expect(controller.stepsEntries).to.be.a('array');
      });

      it('should have 3 objects ', () => {
        let controller = makeController();
        expect(controller.stepsEntries.length).to.equal(3);
      });

      it('should have 3 objects with title property', () => {
        let controller = makeController();
        controller.stepsEntries[0].title.should.be.a('string');
        controller.stepsEntries[1].title.should.be.a('string');
        controller.stepsEntries[2].title.should.be.a('string');
      });

      describe('object specifics', () => {

        it('should have default placeholder title in all objects', () => {
          let controller = makeController();
          expect(controller.stepsEntries[0].title).to.equal('do the washing up');
          expect(controller.stepsEntries[1].title).to.equal('do the washing up');
          expect(controller.stepsEntries[2].title).to.equal('do the washing up');
        });

      });

    });

    describe('addStepEntry', () => {

      it('should be defined', () => {
        let controller = makeController();
        expect(controller).to.have.property('addStepEntry');
      });

      it('should be a function', () => {
        let controller = makeController();
        expect(controller.addStepEntry).to.be.a('function');
      });

      it('should add a new object to stepsEntries', () => {
        let controller = makeController();
        expect(controller.stepsEntries.length).to.equal(3);
        controller.addStepEntry();
        let newObject = controller.stepsEntries[3];
        expect(controller.stepsEntries.length).to.equal(4);
        expect(newObject).to.be.an('object');
        expect(controller.stepsEntries[4]).to.be.undefined;
      });

      it('should add a new object to stepsEntries with a title property', () => {
        let controller = makeController();
        expect(controller.stepsEntries.length).to.equal(3);
        controller.addStepEntry();
        let newObject = controller.stepsEntries[3];
        expect(controller.stepsEntries.length).to.equal(4);
        expect(newObject.title).to.equal('do the washing up');
      });

    });

    describe('postForm', () => {

      it('should be defined', () => {
        let controller = makeController();
        expect(controller).to.have.property('postForm');
      });

      // it('should be a function', () => {
      //   let controller = makeController();
      //   expect(controller.postForm).to.be.a('function');
      // });

      // it('should set promiseLoading to true', () => {
      //   let controller = makeController();
      //   controller.postForm();
      //   expect(controller.promiseLoading).to.be.true;
      // });

    });

  });

  describe('Component', () => {
      // component/directive specs
      let component = UploadRecipeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UploadRecipeTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UploadRecipeController);
      });
  });
});
