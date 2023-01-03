$(function() {
    $.ajax({
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-64B125A0-FC30-4F85-B5E5-32D31EF110C1&format=JSON",
        method: "GET",
        dataType: "JSON",
        // data: post才會用

        success:function(res){
            // 可看資料結構
            console.log(res); 
            // 取得臺北市
            //console.log(res.records.locations[0].locationsName); 
            // 取得中正區
            //console.log(res.records.locations[0].location[4].locationName); 
            // 取得溫度
            //console.log(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value); 
            // 把臺北市塞到html
            $("#city_name").html(res.records.locations[0].locationsName); 
            // 把中正區塞到html
            $("#district").html(res.records.locations[0].location[4].locationName); 
            // 把溫度+"度"的符號塞到html
            $("#temperature").html(res.records.locations[0].location[0].weatherElement[3].time[0].elementValue[0].value+"&#176"); 

            let week = ["MON", "TUE", "WED", "THU", "FRI"];
            const html1 = `<div class="d-flex flex-column block first-block"><small class="text-muted mb-0">`;
            const html2 = `</small><div class="text-center"><img class="symbol-img" src="`;
            const html3 = `"></div><h6><strong>`;
            const html4 = `&#176;</strong></h6></div>`;

            let weather_html = ""; // 空字串for儲存所有迴圈的html
            let j = 0;
            let img = "";
            for(let i = 1; i < 10; i += 2){
                let temperature = res.records.locations[0].location[0].weatherElement[3].time[i].elementValue[0].value;
                if(temperature > 19){
                    img = "https://i.imgur.com/Shrg84B.png";
                }else{
                    img = "https://i.imgur.com/BeWfUuG.png";
                }
                weather_html = weather_html + html1 + week[j] + html2 + img + html3 + temperature + html4;
                j++;
            }

            $("#weekday").html(weather_html);


        },
        error:function(err){
            console.log(err)
        },
    })
})