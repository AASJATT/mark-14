var initialPrice= document.querySelector("#initial-price");
var stocksQty = document.querySelector("#stocks-qty");
var currentPrc = document.querySelector("#current-prc");
var submitBtn = document.querySelector("#submit-btn");
var outputDiv = document.querySelector("#output");

function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;
        outputDiv.innerText = `Hey the loss is ${loss} and the loss percent is ${lossPercentage}%`
    }
   else if(current>initial){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        outputDiv.innerText =`Hey the profit is ${profit} and the profit percent is ${profitPercentage}%`
    } else{
        outputDiv.innerText= "No pain no gain and no gain no pain ";
    }
}

function clickHandler(){
    var ip = Number(initialPrice.value) ;
    var qty = Number(stocksQty.value );
    var curr = Number (currentPrc.value) ;

    calculateProfitAndLoss(ip,qty,curr);
}





submitBtn.addEventListener("click", clickHandler);
