/*global CashOut */

//in a real app would be replaced by a Method.
CashOut = function(){
    var credit = Collections.credit.findOne(),
        change = Collections.change.findOne(),
        coins = _.sortBy(//making sure change is sorted in ascending order
            _.filter(change, function(c){ return c.denomination; }), function(c){
                return c.denomination;
            }
        ),
        amount = credit.amount,
        i=coins.length,
        ret_str = "",
        num_c;

    while((amount>0) && (--i > -1)){
        if(amount >= coins[i].denomination){
            num_c = Math.min(coins[i].number, Math.floor(amount/coins[i].denomination));

            if(num_c){
                amount -= coins[i].denomination * num_c;
                
                ret_str += " " + num_c + "x" + coins[i].str;

                change["_" + coins[i].denomination].number -= num_c;
            }
        }
    };

    Collections.credit.update(credit._id, {$set: {amount: amount}});
    Collections.change.update(change._id, change);

    return "Your change:" + ret_str;
};
