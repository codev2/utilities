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
      {username:'TPMZxDOl',ident:'ray (a delegate for steve)'},
      {username:'SQ5mWHe2',ident:'grav'},
      {username:'tG9dRIJw',ident:'steve'},
      {username:'rZtQppda',ident:'john'},
      {username:'V8l5kNue',ident:'bob'},
      {username:'pOe6u9Oi',ident:'jane'},
      {username:'yynrbS38',ident:'emily'},
      {username:'bj6tg7n2',ident:'phil'},
      {username:'WGQfbCKd',ident:'ringo'},
      {username:'utRh3k2z',ident:'dave'},
      {username:'iQjaVpUh',ident:'nate'},
      {username:'leZnjUsR',ident:'lauren'},
      {username:'kTgrIR46',ident:'bill (no summary)'}
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