package eblana.character

import eblana.items.ItemType;
import eblana.items.Recipe
import grails.converters.*
import grails.rest.*

import org.hibernate.criterion.CriteriaSpecification


class PlayerCharacterController extends RestfulController {
	static responseFormats = ['json', 'xml']
	PlayerCharacterController() {
		super(PlayerCharacter)
	}

	def alive() {
		respond PlayerCharacter.findAllByAlive(true), view: 'index'
	}

	def fetchRecipes(PlayerCharacter playerCharacter){
		def recipes = Recipe.createCriteria().list{
			resultTransformer CriteriaSpecification.ALIAS_TO_ENTITY_MAP
			requiredSkillToCraft{'in'('id',playerCharacter.feat.feat.id)}
			or{
				eq('researchCost',0)
				'in'('id',playerCharacter.recipe.id)
			}
			projections{
				property 'id', 'id'
				property 'airCrystals', 'air'
				property 'earthCrystals', 'earth'
				property 'fireCrystals', 'fire'
				property 'waterCrystals', 'water'
				property 'voidCrystals', 'void'
				property 'blendedCrystals', 'blended'
				property 'anyCrystal', 'any'
				requiredSkillToCraft{ property 'name', 'feat' }
				property 'power1', 'power1'
				property 'power2', 'power2'
				property 'attunementTime', 'attunementTime'
				property 'slot', 'slot'
				property 'researchCost', 'researchCost'
				itemType {property 'name', 'itemType'}
				
			}
		}
		recipes.each{
			if(it.researchCost >0){
				it.feat+=' (Researched)'
			}
			it.remove('researchCost')
		}
		render recipes as JSON

	}
}
