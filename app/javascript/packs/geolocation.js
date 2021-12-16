  function buttonClick(){
    alert('Click');
  }
  window.addEventListener('load',function() {
    const click = document.getElementById('btn')
    click.addEventListener('click', function(){
      const ranges = document.form1.ranges;
      const num = ranges.selectedIndex;
      console.log(num)
        // 現在地の取得
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      function successCallback(position) {
        console.log('経度:'+ position.coords.longitude);
        console.log('緯度:'+ position.coords.latitude);
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
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