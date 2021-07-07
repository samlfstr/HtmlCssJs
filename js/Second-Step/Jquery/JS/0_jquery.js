// jquery
    let url = 'http://localhost:63342/contact-form-script.min.js/js/Second-Step/Jquery/user.json';
let successCallBack = function(response) {
    // the response is already an object
    console.log(response);
};

let options = {
        method: 'GET',
        async: true,
        cache: false,
        success : successCallBack
    };

    // $.get(url);

    $.ajax(url,options);

    /*
      $.ajax(url,
        {
          method: 'GET'
          success : function (response){
            console.log (response);
          }
        }
      );
    */

