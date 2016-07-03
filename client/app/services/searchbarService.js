import * as API_CONST from '../constants/api.js';

export default class searchbarService {
    constructor($http) {
      'ngInject';
      this.$http = $http;
    }

    getData() {
        return this.$http
            .get(API_CONST.URL_DEV + API_CONST.URL_RECIPES_ALL)
            .then((result) => {
                // all data post processing needs to happen within the resource
                // components should expect to recieve exactly the data they need
                return result.data;
            })
            .catch((err) => { // Always catch errors
                // any specific error handling that might be required (depends on the call)
                return err.data;
            });
    }
}
