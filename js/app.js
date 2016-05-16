angular.module('ionicApp', ['ionic','starter.controllers', 'starter.services','ionMdInput','ionic.swoosh.cards','ngCordova'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();

    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
  .state('menu', {
    url: "/menu",
    templateUrl: "templates/menu.html",
    controller:"MenuCtrl"
  })

  .state('menu.tabs', {
    url: "/tabs",
    views: {
      'menu' :{
        templateUrl: "templates/tabs.html"
      }
    }
  })

.state('menu.tabs.myorders', {
    url: "/myorders",
    views: {
      'home-tab': {
        templateUrl: "templates/myorders.html",
        controller:"myordersCtrl"
      }
    }
  })



  .state('menu.tabs.home', {
    url: "/home",
    views: {
      'home-tab': {
        templateUrl: "templates/home.html",
        controller:"homeCtrl"
      }
    }
  })

  .state('menu.tabs.search', {
    url: "/search",
    views: {
      'search-tab': {
        templateUrl: "templates/search.html",
        controller:"ChatsCtrl"
      }
    }
  })

    .state('menu.tabs.contactus', {
    url: "/contactus",
    views: {
      'home-tab': {
        templateUrl: "templates/contactus.html",
        controller:"contactusCtrl"
      }
    }
  })

 
.state('menu.tabs.cart', {
    url: "/cart",
    views: {
      'cart-tab': {
        templateUrl: "templates/cart.html",
        controller:"cartCtrl"
      }
    }
  })

.state('menu.tabs.favourite', {
    url: "/favourite",
    views: {
      'favourite-tab': {
        templateUrl: "templates/favourite.html",
        controller:"favouriteCtrl"
      }
    }
  })

.state('menu.tabs.subscription', {
    url: "/subscription",
    views: {
      'home-tab': {
        templateUrl: "templates/subscription.html",
        controller:"subscriptionCtrl"
      }
    }
  })

.state('menu.tabs.items', {
    url: "/items",
    views: {
      'home-tab': {
        templateUrl: "templates/items.html",
        controller:"itemsCtrl"
      }
    }
  })

.state('menu.tabs.item-detail', {
    url: "/item-detail",
    views: {
      'home-tab': {
        templateUrl: "templates/item-detail.html",
        controller:"item-detailCtrl"
      }
    }
  })

.state('login',{
    url:'/login',
    templateUrl: 'templates/login.html',
    controller:'SigninCtrl'
  });
  
  $urlRouterProvider.otherwise("/login");
})