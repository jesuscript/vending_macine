Template.credit.helpers({
    amount: function(){
        var credit = Collections.credit.findOne();

        return credit ? credit.amount : 0;
    }
});

Template.credit.events({
    "click .add-credit": function(e,tmpl){
        var amount = $(tmpl.find(".credit-amount")).val(),
            credit = Collections.credit.findOne();
        

        if(amount.length && ((amount = parseInt(amount,10)) > 0)){
            Collections.credit.update(credit._id, {$inc:{amount: amount}});
        }
    },
    "click .cash-out": function(){
        Session.set("feedback", "Cashed out. " + CashOut());
    }
});
