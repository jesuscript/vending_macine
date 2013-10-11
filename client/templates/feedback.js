Template.feedback.created = function(){
    Session.set("feedback", "Greetings");
};

Template.feedback.helpers({
    feedback: function(){
        return Session.get("feedback");
    }
});
