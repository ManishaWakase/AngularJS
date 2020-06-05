(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject =['ShoppingListCheckOffService' ];
function ToBuyController(ShoppingListCheckOffService){
 var itemAdd= this;

 itemAdd.toBuyItems= ShoppingListCheckOffService.gettoBuyItems();
 itemAdd.removeItem = function(itemIndex){
  ShoppingListCheckOffService.brought(itemIndex);
};
}
AlreadyBoughtController.$inject['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var showList = this;
showList.broughItems= ShoppingListCheckOffService.getboughtItems();

}

function ShoppingListCheckOffService(){
  var service=this;
  var toBuyItems =[
                  {name: "Cookies",
                   quantity: 5
                  },
                  {name: "Avacodo",
                   quantity: 3
                  },
                  {name: "Ice-cream",
                   quantity: 5
                  },
                  {name: "Pens",
                   quantity: 12
                  },
                  {name: "books 7",
                   quantity: 4
                  },
                  {name: "bottol",
                   quantity: 1
                  },
                  {name: "potatos",
                   quantity: 4
                  },
                  {name: "chillies",
                   quantity: 8
                  },
                  {name: "goods",
                   quantity: 2
                  },
                  {name: "mewnies",
                   quantity: 10
                  },
                  {name: "pop corn",
                   quantity: 17
                  }
                ];

  var broughItems = [];

	service.brought = function(itemIndex) {
    	broughItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
  	};

  	service.getboughtItems = function() {
    	return broughItems;
    };

    service.gettoBuyItems = function() {
      	return toBuyItems;
      };


}

})();
