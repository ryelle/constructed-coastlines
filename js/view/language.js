import React, { Component } from 'react';

class LanguageDescription extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { language, regionName } = this.props;
		const morphemes = language.morphemes;

		const allMorphemes = morphemes[ '' ].map( ( item, i ) => {
			return ( <li key={ i }>{ item }</li> );
		} );

		const alphabetList = language.getAlphabet().split( ' ' ).map( ( item, i ) => {
			return ( <li key={ i }>{ item }</li> );
		} );

		const wordForPeople = language.makeName( 'people' );

		return (
			<div className="">
				<h2>Language Features</h2>

				<h3>Morphemes</h3>
				<ul className="block-list all-morphemes">{ allMorphemes }</ul>

				<p><strong>Genitive (of):</strong> { morphemes.of[ 0 ] }</p>
				<p><strong>Definite (the):</strong> { morphemes.the[ 0 ] }</p>

				<h3>Alphabet</h3>
				<ul className="block-list all-morphemes">{ alphabetList }</ul>

				<h3>People</h3>
				<p>The people of { regionName } are called <em>{ wordForPeople }</em></p>
			</div>
		);
	}
}

export default LanguageDescription;
