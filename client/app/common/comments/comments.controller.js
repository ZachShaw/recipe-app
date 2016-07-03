class commentsController {
  constructor($timeout) {
    'ngInject';
    this.$timeout = $timeout;
    // this.userProfile.username = 'Zach S'
    this.comments = [];

    // Post comment to backend
    this.postComment = (data) => {
      this.promiseLoading = true;
      this.$timeout(() => {
        this.promiseLoading = false;
        this.promiseSuccess = true;
      }, 1500);

      console.log('Comment submitted');
    }

    this.addComment = function(comment) {
        this.comments.push({
            // user: this.userProfile.username,
            text: comment
        });
        this.commentText = '';
    };
  }

}

export default commentsController;
