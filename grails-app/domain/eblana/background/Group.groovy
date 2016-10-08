package eblana.background

import eblana.character.PlayerCharacter

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Group {
	String name
	
	static mapping = {
		table 'Character_Group'
	}
	static hasMany = [playerChracter : PlayerCharacter]
}
