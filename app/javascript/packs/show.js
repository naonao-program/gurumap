var page = location.href;
var page = page.toString();
const API_KEY = gon.hotpepper_key;
var page_substring = page.substring(page.indexOf('homes/') + 6);
if(page.match('homes')){

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  function successCallback(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&lng=' + longitude + '&lat=' + latitude + '&range=' + 5 + '&format=json' + '&count=100'

    fetch(url,{
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      var detail_image = JSON.stringify(json.results.shop[page_substring].photo.pc.l);
      var detail_name = JSON.stringify(json.results.shop[page_substring].name);
      var detail_address = JSON.stringify(json.results.shop[page_substring].address);
      var detail_open = JSON.stringify(json.results.shop[page_substring].open);
      var detail_access = JSON.stringify(json.results.shop[page_substring].access);
      var detail_private_room = JSON.stringify(json.results.shop[page_substring].private_room);
      var detail_parking = JSON.stringify(json.results.shop[page_substring].parking);
      
      document.getElementById('image').innerHTML = '<img src=' + detail_image + '>'
      document.getElementById('name').innerHTML =  '店名:' + detail_name;
      document.getElementById('address').innerHTML = '住所:' + detail_address;
      document.getElementById('open').innerHTML = '営業時間:' + detail_open;
      document.getElementById('access').innerHTML = 'アクセス:' + detail_access;
      document.getElementById('private_room').innerHTML = '個室:' + detail_private_room;
      document.getElementById('parking').innerHTML = '駐車場:' + detail_parking;
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