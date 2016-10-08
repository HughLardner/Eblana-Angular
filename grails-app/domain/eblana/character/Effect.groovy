package eblana.character

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Effect {
	String name, type, description
	
	String toString(){
		return name
	}
	
	static mapping = {
		sort "name"
		description type:"text"
		
	}
}
