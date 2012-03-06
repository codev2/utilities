(function() {
  $.fn.center = $.fn.center || function () {
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
  };
  
  if($('#spoof').length == 0) {
    window.spoof = window.spoof || function(as) {
      window.location = (window.location + "").split("?")[0] + "?spoof=" + as;
    };
    
    var spoofs=[
      {username:'RayDalio',ident:'Ray Dalio<br/><i style="font-size:0.7em">(a delegate for Jennifer Roy)</i>'},
      {username:'EmmaClark',ident:'Emma Clark<br/><i style="font-size:0.7em">(god delegate)</i>'},
      {username:'StephanieMartin',ident:'Stephanie Martin<br/><i style="font-size:0.7em">(grav)</i>'},
      {username:'WillardBrown',ident:'Willard Brown'},
      {username:'JenniferRoy',ident:'Jennifer Roy'},
      {username:'MichelleRoy',ident:'Michelle Roy<br/><i style="font-size:0.7em">(no bbc, delegate for Ray)</i>'}
    ];
    

    var div='<div id="spoof" style="padding:20px;background-color:#CCC;color:white;">' +
  		'<div style="display:table;width:100%">' + 
			'<b>Spoof as...</b>' + 
			'<div style="background:white; color:black; font-weight:bold; display:table; float:right; width:20px; text-align:center;" onClick="$(\'#spoof\').hide();">' +
			'X' + 
			'</div>' +
			'</div>';
      
    for(var i=0;i<spoofs.length;i++){
      div+='<div style="height:3em;padding:10px;margin:5px;background:#003366;color:#FFCC00;font-size:2em;vertical-align:middle;text-align:center;" onclick="window.spoof(\'' + spoofs[i].username + '\');">' + spoofs[i].ident + '</div>';
    };
  
    div += '</div>';
    
    $('body').append(div);
  };
  
  $('#spoof').center().show();
})();