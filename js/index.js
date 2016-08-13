// Externals
import React from 'react';
import { render } from 'react-dom';

// Internals
import doMap from './terrain/terrain';
import Language from './naming-language/language';
import LanguageDescription from './view/language';

// Set up our language
const lang = new Language();
lang.makeRandomLanguage();

// Let the user set a different precision
let power = parseInt( localStorage.getItem( 'precision' ), 10 ) || 14;
if ( power > 20 ) {
	power = 20;
}

// Set our map options
const mapParams = {
	npts: Math.pow( 2, power ),
	ncities: 8,
	nterrs: 3,
	lang: lang,
	fontsizes: {
		region: 40,
		city: 25,
		town: 20
	}
};

const regionName = lang.makeName( 'region' );

document.addEventListener( 'end.terrain', () => {
	d3.select( '#name' ).text( `Map of ${ regionName }` );
	document.querySelector( '.placeholder' ).remove();

	render(
		<LanguageDescription language={ lang } regionName={ regionName } />,
		document.getElementById( 'language' )
	);
}, false );

const finalDiv = d3.select( '#map' );
const finalSVG = finalDiv.insert( 'svg', ':first-child' ).attr( 'width', 600 );
doMap( finalSVG, mapParams );
