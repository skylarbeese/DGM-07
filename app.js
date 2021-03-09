const pizza = {
    crust: "thin",
    size: "small",
    topping: "pepperoni",
    buildPizza: function () {
        console.log("build")
        message = `pizza on a ${pizza.crust} with toppings that is ${pizza.size}`
        document.querySelector('.mess-user').textContent = message
    },
    shoppingList: () => {
        let flour = 1 
        if(pizza.crust === "thick") flour *= 2
        if(pizza.crust === "large") flour *= 2
        message = `pizza with ${flour} cups of flour and 1 bag of ${pizza.topping} cooked on a ${pizza.size} pan`
        document.querySelector('.mess-user').textContent = message
    }
}
 document.querySelector("#thin").addEventListener("click", () =>  pizza.crust = "thin" )
 document.querySelector("#thick").addEventListener("click", () =>  pizza.crust = "thick" )

 document.querySelector("#pepperoni").addEventListener("click", () =>  pizza.topping = "pepperoni" )
 document.querySelector("#sausage").addEventListener("click", () =>  pizza.topping = "sausage" )

 document.querySelector("#small").addEventListener("click", () =>  pizza.size = "small" )
 document.querySelector("#large").addEventListener("click", () =>  pizza.size = "large" )

 document.querySelector(".eat").addEventListener("click",  pizza.buildPizza)
 document.querySelector(".shopping").addEventListener("click",  pizza.shoppingList)