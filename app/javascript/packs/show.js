var page = location.href;
const API_KEY = gon.hotpepper_key;
var page_substring = page.substring(page.length -1);
// const ranges = document.form1.ranges;
// const num = ranges.selectedIndex;
if(page.match('homes')){
  // 現在地の取得
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  function successCallback(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&lng=' + longitude + '&lat=' + latitude + '&range=' + 5 + '&format=json' + '&count=100'
    // JSONを取得
    fetch(url,{
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      var detail_image = JSON.stringify(json.results.shop[page_substring].photo.pc.l);
      var detail_name = JSON.stringify(json.results.shop[page_substring].name);
      var detail_address = JSON.stringify(json.results.shop[page_substring].address);
      var detail_open = JSON.stringify(json.results.shop[page_substring].open);
      console.log(detail_image);
      document.getElementById('image').innerHTML = '<img src=' + detail_image + '>'
      document.getElementById('name').innerHTML =  '店名:' + detail_name;
      document.getElementById('address').innerHTML = '住所:' + detail_address;
      document.getElementById('open').innerHTML = '営業時間:' + detail_open;
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
  }