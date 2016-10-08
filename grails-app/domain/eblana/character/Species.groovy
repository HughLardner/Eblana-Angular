package eblana.character

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Species {

	String name
	Boolean visiable
	
	String toString() {
		return name
	}
	
	static mapping = {
		sort "name"
	}

}
