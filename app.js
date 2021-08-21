// Start Memory Section 
function extraMemoryCost(price){
    const memoryCost=document.getElementById("memory-cost");
memoryCost.innerText=price;
updateTitalPrice()
}

document.getElementById("8GB-Memory").addEventListener("click", function(){
extraMemoryCost(0);
})

document.getElementById("16GB-Memory").addEventListener("click", function(){
extraMemoryCost(180);
})



// Start Storage Section 
function extraStorageCost(price){
    const storageCost=document.getElementById("storage-cost");
storageCost.innerText=price;
updateTitalPrice()
}

document.getElementById("256-storage").addEventListener("click", function(){
extraStorageCost(0);
})

document.getElementById("512-storage").addEventListener("click", function(){
extraStorageCost(100);
})

document.getElementById("1tb-storage").addEventListener("click", function(){
    extraStorageCost(180);
})


// Start Delivary Section 
function extraDelivaryCost(price){
        const delivaryCost=document.getElementById("Delivery-charge");
    delivaryCost.innerText=price;
    updateTitalPrice()
}

document.getElementById("25-aug").addEventListener("click",function(){
    extraDelivaryCost(0)
})
document.getElementById("21-aug").addEventListener("click",function(){
    extraDelivaryCost(20)
})


// Start Total price Section 
function updateTitalPrice(){
    const bestPrice=document.getElementById("best-price");
    const bestPriceInner=parseInt(bestPrice.innerText);

    const memoryPrice=document.getElementById("memory-cost");
    const memoryPriceInner=parseInt(memoryPrice.innerText);

    const storagePrice=document.getElementById("storage-cost");
    const storagePriceInner=parseInt(storagePrice.innerText);

    const delivaryCost=document.getElementById("Delivery-charge");
    const delivaryCostInner=parseInt(delivaryCost.innerText);

    const totalPrice=document.getElementById("total");
    totalPrice.innerText=bestPriceInner+memoryPriceInner+storagePriceInner+delivaryCostInner;
    
}






