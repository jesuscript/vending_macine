/*global Collections, Meteor */

Collections = {};

Collections.change = new Meteor.Collection("change");
Collections.goods = new Meteor.Collection("goods");
Collections.credit = new Meteor.Collection("credit");


if(Meteor.isServer){
    if(!Collections.change.findOne({})) Collections.change.insert({
        _1: {
            number: 0,
            denomination: 1,
            str: "1p"
        },
        _2:{
            number: 0,
            denomination: 2,
            str: "2p"
        },
        _5:{
            number:  0,
            denomination: 5,
            str: "5p"
        },
        _10:{
            number: 0,
            denomination: 10,
            str: "10p"
        },
        _20:{
            number:  0,
            denomination: 20,
            str: "20p"
        },
        _50:{
            number:  0,
            denomination: 50,
            str: "50p"
        },
        _100:{
            number:  0,
            denomination: 100,
            str: "£1"
        },
        _200:{
            number: 0,
            denomination: 200,
            str: "£2"
        }
    });

    if(!Collections.credit.findOne({})) Collections.credit.insert({
        amount: 0
    });
}

