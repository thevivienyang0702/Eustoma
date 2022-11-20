// 增加數量

calculate();

$("button.plus").on("click", function(){
    let num = $(this).closest("ol").find("li input.input_num");
    num.val(Number(num.val()) + 1);

    // 小計隨之變動
    calculate();
    // subtotal();

});


// 減少數量(不得少於1)
$("button.minus").on("click", function(){
    let num = $(this).closest("ol").find("li input.input_num");
    let amount = Number(num.val());
    if(amount > 1){
        num.val(amount - 1);
    }
    // 小計隨之變動
    calculate();
    // subtotal();
    
});



function calculate(){
    // 隨著增減數量，各商品小計也會跟著變動
    $("ul.product_list").each(function(){
        let price = $(this).find("span.price_val").text();
        // console.log(this);
        let qty = $(this).find("input.input_num").val();
        //console.log(qty);
        let cost = ( price * qty);
        $(this).find("li span.cost_val").html(cost);
    });

    // 訂單小計要隨商品總金額變動
    let subtotal = Number( $(this).find("span.cost_val").text() );
    // console.log(subtotal);
    $("span.cost_val").each(function(){
        // console.log(this);
        subtotal += parseInt( $(this).text() );
    });
    $("div.subtotal p:last-child").html("NT$" + subtotal);

    // 訂單合計金額要隨之變動
    let total = parseInt(subtotal);
    $("div.total p:last-child").html("NT$" + total);


};



// 移除
$("i.fa-xmark").on("click", function(){
    $(this).closest("ul.product_list").animate({
        "opacity":0}, 1000, "swing", function(){
        $(this).remove();
        calculate();
        });

});
