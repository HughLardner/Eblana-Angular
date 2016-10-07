package eblana.character


import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*

@Secured([('ROLE_ADMIN')])
class PlayerCharacterController extends RestfulController {
    static responseFormats = ['json', 'xml']
    PlayerCharacterController() {
        super(PlayerCharacter)
    }
	
	def alive() {
		respond PlayerCharacter.findAllByAlive(true), view: 'index'
	}
}
