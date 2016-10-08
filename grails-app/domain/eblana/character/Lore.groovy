package eblana.character

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Lore {
	String name
	
	String toString(){
		return name
	}
	
	static mapping = {
		sort "name"
	}
}
