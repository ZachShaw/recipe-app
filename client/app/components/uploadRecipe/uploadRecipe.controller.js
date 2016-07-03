class UploadRecipeController {
  constructor(recipesService, $scope) {
    'ngInject';
    this.recipesService = recipesService;

    this.heading = 'Upload recipe';
    this.formObj = {
      author: 'Mr. Test',
      ingredients: [],
      steps: []
    };

    /*
    //ingredients
    */

    let ingrPlaceholderCopy = 'add ingredient',
    ingr = {
      placeholder: ingrPlaceholderCopy,
      initialObj: {
        placeholder: ingrPlaceholderCopy
      },
      exampleObj: {
        placeholder: 'eg hummus'
      }
    };

    this.ingrEntries = [
      { title: ingr.exampleObj.placeholder },
      { title: ingr.initialObj.placeholder },
      { title: ingr.initialObj.placeholder }
    ];

    this.addIngrEntry = () => {
      this.ingrEntries.push({ title: ingr.initialObj.placeholder });
    }

    /*
    //steps
    */

    let stepPlaceholderCopy = 'do the washing up',
    step = {
      placeholder: stepPlaceholderCopy,
      initialObj: {
        placeholder: stepPlaceholderCopy
      }
    };

    this.stepsEntries = [
      { title: step.initialObj.placeholder },
      { title: step.initialObj.placeholder },
      { title: step.initialObj.placeholder }
    ];

    this.addStepEntry = () => {
      this.stepsEntries.push({ title: step.initialObj.placeholder });
    }

    /*
    //post form
    */

    this.postForm = (formData) => {
      this.promiseLoading = true;
      this.recipesService.createRecipe(formData).then((data) => {
        $scope.vm.promiseLoading = false;
        $scope.vm.promiseSuccess = true;
      }).catch((err) => {
        $scope.vm.promiseLoading = false;
        $scope.vm.promiseError = true;
      });
    }

  }
}

export default UploadRecipeController;
