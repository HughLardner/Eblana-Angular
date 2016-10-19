package eblana.character

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class CharacterSpell {
	Spell spell
	String source
	Effect effect1, effect2

	static belongsTo = [character : PlayerCharacter]

	String toString (){
		return spell.toString() + (effect1?' <'+effect1+'>':'') + (effect2?' <'+effect2+'>':'')
	}

	static mapping = { sort "spell" }
}
