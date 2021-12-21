var page = location.href;
const API_KEY = gon.hotpepper_key;

window.addEventListener('load',function() {
  const click = document.getElementById('btn')
  click.addEventListener('click', function(){
    document.getElementById('page').innerHTML = '読み込み中…'
    document.getElementById('results').innerHTML = '検索結果'
    const ranges = document.form1.ranges;
    const num = ranges.selectedIndex;

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    function successCallback(position) {
      var longitude = position.coords.longitude;
      var latitude = position.coords.latitude;
      const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&results_available' + '&lng=' + longitude + '&lat=' + latitude + '&range=' + num  + '&format=json' + '&count=100'

      fetch(url,{
      }).then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById('results_available').innerHTML = json.results.results_available + "件見つかりました！"+ "<br>" + "１０件ずつ表示しています!" + "<br>" + "距離の近い順に表示しています。";
        var a = '';
        for(var i = 0; i < JSON.stringify(json.results.shop.length); i++){
          a +=  '<div class= "card mb-3">' + '<a href="homes/' + i + '" id= "text" class= "card-body">' + '<img src =' + JSON.stringify(json.results.shop[i].logo_image) + '>' +'店名:'+ JSON.stringify(json.results.shop[i].name) + '<br>' + 'アクセス:' + JSON.stringify(json.results.shop[i].access) + '<br>' + 'ジャンル:' + JSON.stringify(json.results.shop[i].genre.name) + '</a>' +'</li>' + '</div>'
        }
        document.getElementById('page').innerHTML = a;

      if (json.results.results_available > 10) {
        $(function() {
          $('.page').paginathing({
            perPage: 10,
            prevText:'前へ',
            nextText:'次へ',
            activeClass: 'navi-active',
          })
        });
      }
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