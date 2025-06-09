class Item{
    constructor(name,price,stock){
        this.name=name;
        this.price= price;
        this.stock=stock;
    }
}

const inventory = [
    new Item("chips",50,3),
    new Item("candy",30,5),
    new Item("cookies",20,5)
]

function vend(itemName,moneyPaid){
    for(item of inventory){
        if(item.name===itemName){
            if(item.stock>0){
                if(moneyPaid>=item.price){
                    item.stock--;
                    const change = moneyPaid - item.price;
                    console.log(`Vended item is: ${item.name}.Your change is:${change}`)
                }
                else{
                    console.log("not enough money");
                }
            } else {
                console.log("out of stock")
            }
            return;
        }
        console.log("Item not found");
    }
}

vend("chips",55)