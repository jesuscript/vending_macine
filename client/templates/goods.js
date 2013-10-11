Template.goods.helpers({
    items: function(){
        return Collections.goods.find({});
    }
});

Template.goods.events({
    "click .add": function(e, tmpl){
        var name = $(tmpl.find("input.name")).val(),
            price = $(tmpl.find("input.price")).val();

        if(name.length && price.length && (parseInt(price,10)>0)){
            Collections.goods.insert({
                name: name,
                price: price
            });
        }
    },
    "click .buy": function(e, tmpl){
        var $p = $(e.toElement).parents("tr"),
            id = $p.data("id"),
            name = $p.find(".name").data("name"),
            price = parseInt($p.find(".price").data("price"),10),
            credit = Collections.credit.findOne();

        console.log(id);
        
        if(price > credit.amount){
            Session.set("feedback", "Not enough credit!");
        }else{
            Collections.goods.remove(id);
            Collections.credit.update(credit._id, {$inc: {amount: -price}});
            Session.set("feedback", "Bought "+name+" for "+ price + ". " + CashOut());
        }
    }
});
