( function( $ ) {
	
	$.fn.hoverfold = function( args ) {

	  $('.view').each(function(index) {
				var $item 	= $( this );
					img		= $item.children( 'img' ).attr( 'src' );
					double = '';
					if ($item.hasClass('double')) {double = 'dbl'}
					struct = '<div class="slice '+ double +'">';
					struct	+= '<div class="slice s1">';
						struct	+='<div class="slice s2">';
							struct	+='<div class="slice s3">';
								struct	+='<div class="slice s4">';
									struct	+='<div class="slice s5">';
									struct	+='</div>';
								struct	+='</div>';
							struct	+='</div>';
						struct	+='</div>';
					struct	+='</div></div>';
					
				var $struct = $( struct );
				
				$item.find( 'img.thumb' ).remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );			
	});

	};
	

} )( jQuery );