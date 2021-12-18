
  window.addEventListener('load',function() {
    const click = document.getElementById('btn')
    click.addEventListener('click', function(){
      document.getElementById('results').innerHTML = '検索結果'
      const ranges = document.form1.ranges;
      const num = ranges.selectedIndex;
      const API_KEY = gon.hotpepper_key;
        // 現在地の取得
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      function successCallback(position) {
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&lng=' + longitude + '&lat=' + latitude + '&range=' + num + '&order=4' + '&format=json' + '&count=100'

        fetch(url,{
        }).then(function(response) {
          return response.json();
        }).then(function(json) {
          var a = '';
          for(var i = 0; i < JSON.stringify(json.results.shop.length); i++){
            a +=  '<li>' + '<a>' + '<img src =' + JSON.stringify(json.results.shop[i].logo_image) + '>' +'店名'+ JSON.stringify(json.results.shop[i].name) + 'アクセス' + JSON.stringify(json.results.shop[i].access) + '</a>' +'</li>'
          }
          document.getElementById('page').innerHTML = a;
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
        document.getElementById('page').innerHTML = err_msg;
      }
    })
  });