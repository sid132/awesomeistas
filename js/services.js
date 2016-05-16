angular.module('starter.services', ['firebase','ngStorage'])

.factory('locData', ['$localStorage',function ($localStorage) {
  
  var locRef =  $localStorage['rage'];
  
  return {
    all:function(){
      return locRef;
    },
    remove: function(chat) {
      locRef.splice(locRef.indexOf(chat), 1);
    },
    bet:function(){
      //return dishRef;
    }
  };
}])

.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    price: 'Rs: 999',
    img: 'img/model10.jpg',
    desc: 'Triangle Pendant Necklace Set'
 
  },{
    id: 1,
    price: 'Rs:899',
    img: 'img/j1.png',
    desc:'Triangle Pendant Necklace Set'
  
  },{
    id: 2,
    price: 'Rs:899',
    img: 'img/model7.jpg',
    desc:'Triangle Pendant Necklace Set'
  
  },{
    id: 3,
    price: 'Rs:899',
    img: 'img/model7.jpg',
    desc:'Triangle Pendant Necklace Set'
  
  }

  ];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
     
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  };
})



.factory('Carts',function(){
var carts = [{
  id: 0,
  img:'/img/crown.jpg',
  details:'Kenneth Cole New York Two-Row Worn Hammered Circle Pendant Necklace , 19"',
  size: 'freesize',
  quantity:'1',
  price:'999'
},{
  id: 1,
  img:'/img/jewel.jpg',
  details:'Kenneth Cole New York Two-Row Worn Hammered Circle Pendant Necklace , 19"',
  size: 'freesize',
  quantity:'1',
  price:'999'
}];

  return {
    all: function() {
      return carts;
    },
    remove: function(cart) {
      carts.splice(carts.indexOf(cart), 1);
    },
    get: function(cartId) {
      for (var i = 0; i < carts.length; i++) {
        if (carts[i].id === parseInt(cartId)) {
          return carts[i];
        }
      }
      return null;
    }
  };


})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'http://41.media.tumblr.com/tumblr_m5bgtum0U01qhn0v1o1_500.jpg'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'http://thewowstyle.com/wp-content/uploads/2015/01/black-and-white-jewelry-lipgloss-model-photography-.jpg'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'http://cache23.fansshare.com/photos/estiginzburg/esti-ginzburg-photo-shoot-by-miller-jewelry-1849351657.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'http://ogrudek.com/content/photos/31/normal/533c11fc-9bdc-47ca-ad20-55de0af017f1.jpg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://s-media-cache-ak0.pinimg.com/originals/f6/ac/3c/f6ac3c076db86c8c1a7dc0ee46adc440.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('Jewels', ['$firebaseArray',function ($firebaseArray) {
  
  var jeweldatas = new Firebase('https://awesomistas.firebaseio.com/jewel/');
  var jeweldata = $firebaseArray(jeweldatas);

  return {

    all:function(){
      return jeweldata;
    },

  };
}]);
