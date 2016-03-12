(function() {
  var app = angular.module('store-directives',[]);
  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: 'product-description.html',
      controller: function(){

         $("#div1").slideUp(1000).slideDown(1000);

        }
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: 'product-reviews.html',
      controller: function(){

         $("#div3").slideUp(1000).slideDown(1000);

        }
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: 'product-specs.html',
      controller: function(){

         $("#div2").slideUp(1000).slideDown(1000);
          console.log("yes");

        }

    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: 'product-tabs.html',
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: 'product-gallery.html',
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });

})();
