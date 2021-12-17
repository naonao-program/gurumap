
  window.addEventListener('load',function() {
    const click = document.getElementById('btn')
    click.addEventListener('click', function(){
      const ranges = document.form1.ranges;
      const num = ranges.selectedIndex;
      const API_KEY = gon.hotpepper_key;
        // 現在地の取得
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      function successCallback(position) {
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&lng=' + longitude + '&lat=' + latitude + '&range' + num + '&order=4'

        
        // 取得
        // var request = new XMLHttpRequest();
        // request.open('GET', url, true);
        // request.responseType = 'json';
        // request.onload = function () {
        //   var data = this.response;
        //   console.log(data);
        // }
        // // リクエストをURLに送信
        // request.send();
        
        fetch(url,{
        }).then(function(response) {
          return response.text();
        }).then(function(text) {
          
          console.log(text);
          document.getElementById('page').innerHTML = text
        });
      }
      function errorCallback(error) {
        var err_msg = "";
        switch(error.code)
        {
          case 1:
            err_msg = "位置情報の利用が許可されていません";
            break;
          case 2:
            err_msg = "デバイスの位置が判定できません";
            break;
          case 3:
            err_msg = "タイムアウトしました";
            break;
        }
        console.log(err_msg);
      }
    })
  });