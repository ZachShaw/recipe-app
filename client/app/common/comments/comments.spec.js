import commentsModule from './comments'
import commentsController from './comments.controller';
import commentsComponent from './comments.component';
import commentsTemplate from './comments.html';

describe('comments', () => {
  let $rootScope, makeController;

  beforeEach(window.module(commentsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new commentsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('addComment', () => {

      it('should be defined', () => {
          let controller = makeController();
          expect(controller).to.have.property('addComment');
      });

      it('should be a function', () => {
          let controller = makeController();
          expect(controller.addComment).to.be.a('function');
      });

      it('should add an entry into comments array', () => {
          let controller = makeController();
          expect(controller.comments.length).to.equal(0);
          let newComment = 'amazing recipe'
          controller.addComment(newComment);
          expect(controller.comments.length).to.equal(1);
          expect(controller.comments[0]).to.be.an('object');
      });

      it('should add an entry into comments array with text property', () => {
          let controller = makeController();
          let newComment = 'another amazing recipe'
          controller.addComment(newComment);
          expect(controller.comments[0]).to.have.property('text')
            .that.is.a('string');
      });
  })

  describe('Component', () => {
      // component/directive specs
      let component = commentsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(commentsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(commentsController);
      });
  });
});
