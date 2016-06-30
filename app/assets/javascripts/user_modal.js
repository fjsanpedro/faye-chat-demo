(function () {

  $(document).on('hide.bs.modal','#user_modal', function(e){
   if($('input#user_name').val().length === 0) {
     $('input#user_name').focus();
     e.preventDefault();
     e.stopImmediatePropagation();
     return false;
   }else{
     setUserData($('input#user_name').val(), $('input[type=color]').val());
   }
 });

 $(document).on('submit','form#user-form', function(){
   return false;
 });

})();
