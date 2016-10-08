package eblana.character

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Spell {
	String pre
	Effect effect
	String post
	Classes classes
	
	String toString(){
		return pre + " " + effect + " " + post
	}
	
	static mapping = {
		sort "effect"
	}
}
