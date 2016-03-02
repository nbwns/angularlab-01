var ponyclubAppModule = angular.module("ponyclubApp",[]);

ponyclubAppModule.controller("PonyListController", function($scope, $http){
    var ponyclub = this;
    /*ponyclub.ponys = [
        {name: "Rainbow Dash", description: "Double rainbow !"},
        {name: "Pinkie Pie", description: "If you love pink you'll love her"}
    ];*/
    
    $http.get('https://node-test-nbwns.c9.io/ponies').success(function(data) {
        ponyclub.ponies = data;
    });
    
    ponyclub.add = function(){
        var newPony = {name: ponyclub.ponyname, description: ponyclub.ponydescription};
         $http.post('https://node-test-nbwns.c9.io/pony', newPony)
         .success(function(data) {
            ponyclub.ponies.push(newPony);
            ponyclub.ponyname = '';        
            ponyclub.ponydescription = '';
        })
        .error(function(){
            alert("error");
        });
    };

});