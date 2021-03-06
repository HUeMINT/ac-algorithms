//We will be opening a store! 

//Compare and update the inventory stored in an array against a second array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. 

function updateInventory(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
            if (arr2[i][1] === arr1[j][1]){
                arr1[j][0] += arr2[i][0];
            }
        }
    }
    // console.log(arr1);
}

// Example inventory lists
var currentInv = [
    [21, "Jackets"],
    [2, "Dress Shirts"],
    [1, "Pairs of Shoes"],
    [5, "Skirts"]
];

var newInv = [
    [2, "Pairs of Shoes"],
    [3, "Watches"],
    [67, "Jackets"],
    [7, "Pants"]
];

updateInventory(currentInv, newInv);