import { useState, useEffect } from 'react'

const useFacebookLogin = () => {
  const [response, setResponse] = useState()

  useEffect(() => {
    // SDK 載入完後才會初始化 SDK
    window.fbAsyncInit = function () {
      //初始化 SDK
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: process.env.REACT_APP_FB_APP_VERSION
      });

      //確認登入
      window.FB.getLoginStatus(function (response) {
        console.log(response)
        setResponse(response.status)
      });

      window.FB.AppEvents.logPageView();

    };

    //載入 Facebook SDK 
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, [])


  function getUser() {
    //拿取使用者資料
    window.FB.api(
      '/me',
      'GET',
      { fields: "id,name" },
      function (response) {
        // Insert your code here
        // console.log(response)
      }
    );
  }

  function handleFBLogin() {
    window.FB.login(function (response) {
      setResponse(response.status)
      getUser()
    }, { scope: 'public_profile,email' });
  }

  function handleFBLogout() {
    window.FB.logout(function (response) {
      setResponse(response.status)
    });
  }

  return [response, handleFBLogin, handleFBLogout]
}



export default useFacebookLogin