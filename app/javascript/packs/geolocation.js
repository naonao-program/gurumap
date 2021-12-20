var page = location.href;
const API_KEY = gon.hotpepper_key;

window.addEventListener('load',function() {
  const click = document.getElementById('btn')
  click.addEventListener('click', function(){
    document.getElementById('page').innerHTML = '読み込み中…'
    document.getElementById('results').innerHTML = '検索結果'
    const ranges = document.form1.ranges;
    const num = ranges.selectedIndex;
      // 現在地の取得
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    function successCallback(position) {
      var longitude = position.coords.longitude;
      var latitude = position.coords.latitude;
      const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&results_available' + '&lng=' + longitude + '&lat=' + latitude + '&range=' + num  + '&format=json' + '&count=100'
      // JSONを取得
      fetch(url,{
      }).then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById('results_available').innerHTML = json.results.results_available + "件見つかりました距離の近い順に表示しています。";
        var a = '';
        for(var i = 0; i < JSON.stringify(json.results.shop.length); i++){
          a +=  '<li>' + '<a href="homes/' + i + '" id= "text">' + '<img src =' + JSON.stringify(json.results.shop[i].logo_image) + '>' +'店名:'+ JSON.stringify(json.results.shop[i].name) + 'アクセス:' + JSON.stringify(json.results.shop[i].access) + 'ジャンル:' + JSON.stringify(json.results.shop[i].genre.name) + '</a>' +'</li>'
        }
        document.getElementById('page').innerHTML = a;

        // お店が10件以上見つかったらページネーションをする
      if (json.results.results_available > 10) {
        $(function() {
          $('.page').paginathing({//親要素のclassを記述
            perPage: 10,//1ページあたりの表示件数
            prevText:'前へ',//1つ前のページへ移動するボタンのテキスト
            nextText:'次へ',//1つ次のページへ移動するボタンのテキスト
            activeClass: 'navi-active',//現在のページ番号に任意のclassを付与できます
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