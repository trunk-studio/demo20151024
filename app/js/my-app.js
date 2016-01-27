var myApp=new Framework7();var $$=Dom7;var view1=myApp.addView('#view-1');var view2=myApp.addView('#view-2',{dynamicNavbar:true});var view3=myApp.addView('#view-3');var view4=myApp.addView('#view-4');

$$('#splash-logo').show();
window.setTimeout(function() {
  $$('#splash-logo').addClass('animated jello');
  window.setTimeout(function() {
    $$('#splash').addClass('animated fadeOut');
    window.setTimeout(function() {
      $$('#splash').hide();
    }, 1500);
  }, 1000);
}, 500);


$$('#btnConnect').on('click', function () {
  window.setTimeout(function() {
    myApp.alert('Scopbee 360 Device Connected', 'Successful', function() {
      $$('#btnConnect').text('Connected');
      $$('#btnConnect').addClass('disabled');

      $$('#imgRadar').removeClass('opacity0');
      $$('#imgRadar').addClass('opacity1');

      $$('#imgRadar').removeClass('rotate0');
      $$('#imgRadar').addClass('rotate1');

      window.setTimeout(function() {
        $$('#imgRadar').removeClass('rotate1');
        $$('#imgRadar').addClass('rotate2');
      }, 1500);
    });

  }, 1500);

});
