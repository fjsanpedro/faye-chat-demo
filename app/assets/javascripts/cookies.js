(function () {
  'use strict';

  window.userName = userName;
  window.userColor = userColor;
  window.setUserData = setUserData;

  function loggedUser() {
    return Cookies.get('faye_chat_demo_username') ? true : false;
  }

  function setUserData(name, color){
    Cookies.set('faye_chat_demo_username', name, { expires: 365 });
    Cookies.set('faye_chat_demo_color', color, { expires: 365 });
    setMessageFormData();
  }

  function userName(){
    return loggedUser ? Cookies.get('faye_chat_demo_username'): 'NoName';
  }

  function userColor(){
    return loggedUser ? Cookies.get('faye_chat_demo_color') : '#ff0000';
  }

  $(document).ready(function(){
    var button;

    if (!loggedUser()){
      $('#user_modal').modal({
        backdrop: 'static',
        keyboard: true
      });
    }
  });
})();
