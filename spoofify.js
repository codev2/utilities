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
      {username:'RayDalio',ident:'Ray Dalio<br/><i>(a delegate for Jennifer Roy)</i>'},
      {username:'EmmaClark',ident:'Emma Clark<br/><i>(god delegate)</i>'},
      {username:'StephanieMartin',ident:'Stephanie Martin<br/><i>(grav)</i>'},
      {username:'WillardBrown',ident:'Willard Brown'},
      {username:'JenniferRoy',ident:'"Jennifer Roy"'},
      {username:'MichelleRoy',ident:'Michelle Roy<br/><i>(no bbc, delegate for Ray)<i>'}
    ];
    

    var div='<div id="spoof" style="padding:10px;background-color:#343434;color:white;">' +
  		'<div style="display:table;width:100%">' + 
			'Spoof as...' + 
			'<div style="background:white; color:black; font-weight:bold; display:table; float:right; width:20px; text-align:center;" onClick="$(\'#spoof\').hide();">' +
			'X' + 
			'</div>' +
			'</div>';
      
    for(var i=0;i<spoofs.length;i++){
      div+='<div style="padding:5px;margin:2px;background:#ABABAB;font-size:2em;" onclick="window.spoof(\'' + spoofs[i].username + '\');">' + spoofs[i].ident + ' : ' + spoofs[i].username + '</div>';
    };
  
    div += '</div>';
    
    $('body').append(div);
  };
  
  $('#spoof').center().show();
})();