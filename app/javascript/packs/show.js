var page = location.href;
var page = page.toString();
const API_KEY = gon.hotpepper_key;
var page_substring = page.substring(page.indexOf('homes/') + 6);
window.addEventListener("load",function(){
  document.getElementById("image").innerHTML =  '読み込み中'
})
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
      var detail_name = JSON.stringify(json.results.shop[page_substring].name).replace(/"/g,"");
      var detail_address = JSON.stringify(json.results.shop[page_substring].address).replace(/"/g,"");
      var detail_open = JSON.stringify(json.results.shop[page_substring].open).replace(/"/g,"");
      var detail_access = JSON.stringify(json.results.shop[page_substring].access).replace(/"/g,"");
      var detail_private_room = JSON.stringify(json.results.shop[page_substring].private_room).replace(/"/g,"");
      var detail_parking = JSON.stringify(json.results.shop[page_substring].parking).replace(/"/g,"");
      
      document.getElementById('image').innerHTML = '<img src=' + detail_image + '>'
      document.getElementById('name').innerHTML = '<div class="fas fa-store"></div>' + '店名:' + detail_name;
      document.getElementById('address').innerHTML = '<div class="fas fa-subway"></div>' + '住所:' + detail_address;
      document.getElementById('open').innerHTML = '<div class="fas fa-clock"></div>' + '営業時間:' + detail_open;
      document.getElementById('access').innerHTML = '<div class="fas fa-map-marker-alt"></div>' + 'アクセス:' + detail_access;
      document.getElementById('private_room').innerHTML = '<div class="fas fa-person-booth"></div>' + '個室:' + detail_private_room;
      document.getElementById('parking').innerHTML = '<div class="fas fa-parking"></div>' + '駐車場:' + detail_parking;
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