
$( ".recipe" ).click(function(){

    var getLinkType, getElType, getElNotType;
  
    // Feature-detect for dataset support
    if( !this.dataset ) { // If IE 10 or lower
      getLinkType = this.getAttribute( "data-item" );
     } else { // For other browsers
       getLinkType = this.dataset.team;
     }
  
    getElType = $( "div[data-food-item~="+getLinkType+"]" );
  
    getElNotType = $( "div[data-food-item!="+getLinkType+"]" );
  
     $( ".food" ).filter( getElNotType ).css( "display", "none" );
     $( ".food" ).filter( getElType ).css( "display", "block" );
  
  });
  
  $( ".recipe-all" ).click(function() {
    $( ".food" ).css( "display", "block" );
  });