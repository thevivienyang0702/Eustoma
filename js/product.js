// 商品頁: 點小圖換大圖

$(function(){
    $("ul.JS-small li img").on("click", function(){
        //console.log(this);
        let num = $(this).attr("id").substr(6);
        $("img.JS-big").attr("src", "./img/product_bigpic" + num +".png");
    });
});


// 商品頁: 點擊+和-可以增減數量

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