var ponyclubAppModule = angular.module("ponyclubApp",[]);

ponyclubAppModule.controller("PonyListController", function(){
    var ponyclub = this;
    ponyclub.ponys = [
        {name: "Rainbow Dash", description: "Double rainbow !"},
        {name: "Pinkie Pie", description: "If you love pink you'll love her"}
    ];
    
    ponyclub.add = function(){
        var newPony = {name: ponyclub.ponyname, description: ponyclub.ponydescription};
        ponyclub.ponys.push(newPony);
        ponyclub.ponyname = '';        
        ponyclub.ponydescription = '';
    };

});