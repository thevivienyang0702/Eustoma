$(function(){
    $("ul.JS-small li img").on("click", function(){
        //console.log(this);
        let num = $(this).attr("id").substr(6);
        $("img.JS-big").attr("src", "./img/product_bigpic" + num +".png");
    });
});