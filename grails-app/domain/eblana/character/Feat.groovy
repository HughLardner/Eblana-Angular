package eblana.character

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Feat {
	String name, description
	Species prereqSpecies 
	Feat prereqFeat
	Classes prereqClass 
	Boolean takeMoreThenOnce, visiable
	String type
	Integer level, body, armour, mana, itemsCrafted
	Boolean sustainable
	
	
	String toString(){
		return name
	}
	
	static mapping = {
		sort "name"
		description type:"text"
	}
	
}
