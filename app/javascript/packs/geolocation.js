navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
function successCallback(position) {
  console.log('経度:'+ position.coords.longitude)
  console.log('緯度:'+ position.coords.latitude)
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
  document.getElementById("show_result").innerHTML = err_msg;
}