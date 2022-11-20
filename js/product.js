// --------- 商品頁: 點小圖換大圖 ---------

$(function(){
    $("ul.JS-small li img").on("click", function(){
        //console.log(this);
        let num = $(this).attr("id").substr(6);
        $("img.JS-big").attr("src", "./img/product_bigpic" + num +".png");
    });
});


// --------- 商品頁: 點擊+和-可以增減數量 ---------

// 新增數量
$("button.plus").on("click", function(){
    //console.log(this);
    let num = $(this).closest("ul").find("li input.input_num");
    // console.log(num);
    num.val(Number(num.val()) + 1 );
});

// 減少數量，最少數量需為1
$("button.minus").on("click", function(){
    let num = $(this).closest("ul").find("li input.input_num");
    let amount = Number(num.val());
    if(amount > 1){
        num.val(amount - 1);
    }
});


// --------- 商品頁: 點擊尺寸 ---------



$("div.size button").on("click", function(){
    // button換樣式
    $("div.size button").toggleClass("selected");

    // 上方價格隨之變動
    let tab_no = $(this).attr('data-tab');
        // 移除current樣式
    $("div.price_list p").removeClass('current');
        // 讓點選的尺寸的價格加上current樣式
    $("#" + tab_no).addClass('current');   

});