(function () {
  "use strict";

  $(document).on('submit','form.message-form', function(){
    if ($(this).find('input#message_content').val().length === 0){
      return false;
    }
  });

  $(document).on('ajax:complete','form.message-form', function(){
      $(this).find('input#message_content').val('');
      $('form.message-form').trigger('messageSent');
  });
})();
