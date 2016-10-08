package eblana.character

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class CharacterFeat {

	Feat feat
	String source
	Effect effect
	Boolean open
	
	static belongsTo = [character : PlayerCharacter]
	
	String toString(){
		return feat
	}
	
	static mapping = {
		sort "feat"
	}
}
