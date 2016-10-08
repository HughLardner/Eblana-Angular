package eblana.event

import eblana.character.PlayerCharacter
import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Event {
	String name
	Date date
	Integer eventNumber
	Boolean downtimeDone
	Boolean lastEvent
	Boolean currentDowntime = false
	Set<PlayerCharacter> attended = new HashSet<>()
	
	static hasMany = [attended : PlayerCharacter, downtime:Downtime]

	static mapping = {
		sort eventNumber:"asc"
	}
	
	String toString(){
		return "Event " + eventNumber + " : " + name
	}
}