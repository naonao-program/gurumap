
  window.addEventListener('load',function() {
    const click = document.getElementById('btn')
    click.addEventListener('click', function(){
      const ranges = document.form1.ranges;
      const num = ranges.selectedIndex;
      const API_KEY = '64c59eed4873e844'
        // 現在地の取得
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      function successCallback(position) {
        console.log('経度:'+ position.coords.longitude);
        console.log('緯度:'+ position.coords.latitude);
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        console.log(num);
        const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&lng=' + longitude + '&lat=' + latitude + '&range' + num + '&order=4'

        fetch(url).then(function(response) {
          return response.text();
        }).then(function(text) {
          console.log(text);
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