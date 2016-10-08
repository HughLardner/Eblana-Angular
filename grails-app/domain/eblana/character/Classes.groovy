package eblana.character

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Classes {

	String name
	Integer level
	Classes prerequisite
	
	String toString(){
		return name + " " + level
	}
	

	
}
