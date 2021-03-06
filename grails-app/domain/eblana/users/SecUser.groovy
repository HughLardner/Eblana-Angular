package eblana.users

import eblana.character.PlayerCharacter
import grails.rest.Resource
import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
@Resource(readOnly = false, formats = ['json', 'xml'])
class SecUser implements Serializable {

	private static final long serialVersionUID = 1

	transient springSecurityService

	String username
	String password
	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired
	
	String firstName, surname, phoneNumber, email
	String emergancyContact, emergancyContactNumber, medicalInformation, carReg
	
	static hasMany = [character : PlayerCharacter]
	
	@Override
	String toString() {
		if(firstName || surname){
			return "${firstName?:''} ${surname?:''}"
		}else{
			return username
		}
	}

	SecUser(String username, String password) {
		this()
		this.username = username
		this.password = password
	}

	Set<SecRole> getAuthorities() {
		SecUserSecRole.findAllBySecUser(this)*.secRole
	}

	def beforeInsert() {
		encodePassword()
	}

	def beforeUpdate() {
		if (isDirty('password')) {
			encodePassword()
		}
	}

	protected void encodePassword() {
		password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
	}

	static transients = ['springSecurityService']

	static constraints = {
		username blank: false, unique: true
		password blank: false
	}

	static mapping = {
		password column: '`password`'
	}
}
