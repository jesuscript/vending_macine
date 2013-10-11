/*global Template */

Template.change.create = function(){
    
};

Template.change.helpers({
    amounts: function(){
        return Collections.change.findOne({});
    }
});

Template.change.events({
    "click .btn": function(e){
        var change = Collections.change.findOne();

        change[$(e.toElement).data("amount")].number++; 

        Collections.change.update(change._id,change);
    }
});

