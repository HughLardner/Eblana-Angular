package eblana.background
import eblana.character.PlayerCharacter
import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class God {
	
	String name
	static hasMany = [playerChracter : PlayerCharacter]
	
}
