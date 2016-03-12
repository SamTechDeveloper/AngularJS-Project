
 var app = angular.module('gemStore', ['store-directives','ui.router']);

    app.controller('StoreController', function($scope , $http){
            $scope.storeproducts = [];

            $http.get('storeproducts.json').success(function(data){
            $scope.storeproducts = data;


            });

  });

  app.controller('ReviewController', function(){

    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

