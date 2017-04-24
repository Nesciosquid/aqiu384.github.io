import compendium from './js/full_compendium.js';
import normal_recipes from './js/normal_recipes.js';
import reverse_fusions from './js/reverse_fusion_chart.js';
import min_compendium from './js/min_compendium.js';
import double_element_recipes from './js/double_element_recipes.js';
import { translatePersona } from './translate.js';
import personas from './personas.json';
import { getSkillByName } from './skill.js';

const filterUndefined = (entryValue) => {
  if (entryValue === '-') {
    return undefined;
  } else return entryValue;
}

export default class Persona {
  constructor(personaObject) {
    this.name = personaObject.name;
    this.arcana =  personaObject.arcana;
    this.level =  personaObject.level;
    this.stats =  personaObject.stats;
    if (this.stats.ts) {
      this.stats.st = this.stats.ts;
      delete this.stats.ts;
    }
    this.resistances =  personaObject.resistances;
    this.skills =  personaObject.skills;
    this.personality =  personaObject.personality;
    this.negotiations =  personaObject.negotiations;
    this.drop = personaObject.drop;
    this.item = personaObject.item;
  }

  static fromName(personaName) {
    return new Persona(personas[personaName]);
  }

  getSkills() {
    return Object.keys(this.skills).map(getSkillByName);
  }

  getFusions(target_persona) {
    var arcana = this.arcana;
    var level = this.level;
    var arcana_ranking = normal_recipes[arcana];

    var min = arcana_ranking[arcana_ranking.length - 2];
    var mid = 99;
    var max = 99;
    var next_max = 99;

    for (var i = 1; i < arcana_ranking.length - 1; i++) {
      if (arcana_ranking[i] == level) {
        var min = arcana_ranking[i - 1];
        var mid = arcana_ranking[i];
        var max = arcana_ranking[i + 1];

        if (i < arcana_ranking.length - 2) {
          next_max = arcana_ranking[i + 2];
        }

        break;
      }
    }

		var target_recipe = normal_recipes[target_persona];
		var min_level = min == 0 ? 2 : 2 * min - 2;
		var max_level = mid == 99 ? 200 : 2 * mid - 2;

		var target_combos = reverse_fusions[arcana];
		var final_recipes;

		final_recipes = [];

		for (var i = 0; i < target_combos.length; i++) {
			var ingredients = target_combos[i].split(" x ");
			var first_tribe = min_compendium[ingredients[0]];
			var second_tribe = min_compendium[ingredients[1]];

			for (var first_persona in first_tribe) {
				for (var second_persona in second_tribe) {
					var new_persona = first_tribe[first_persona] + second_tribe[second_persona];
					if (min_level < new_persona &&
						new_persona <= max_level)
					{
						final_recipes.push([first_persona, second_persona]);
					}
				}
			}
		}

    var target_arcana = min_compendium[arcana];
    var ingredients = Object.keys(target_arcana);
    ingredients.splice(ingredients.indexOf(target_persona), 1);
    ingredients.sort();

    if (max != 99) {
      var next_persona = "";

      for (var persona in target_arcana) {
        if (target_arcana[persona] == max) {
            next_persona = persona;
        }
      }

      ingredients.splice(ingredients.indexOf(next_persona), 1);

      min_level = 2 * level - 2;
      max_level = next_max == 99 ? 200 : 2 * next_max - 2;

      for (var i = 0; i < ingredients.length; i++) {
        var new_persona = target_arcana[ingredients[i]] + max;
        if (min_level <= new_persona &&
            new_persona < max_level)
        {
            final_recipes.push([ingredients[i], next_persona]);
        }
      }
    }

    min_level = 2 * level - 2;
    max_level = max == 99 ? 200 : 2 * max - 2;

    for (var i = 0; i < ingredients.length; i++) {
      for (var j = i + 1; j < ingredients.length; j++) {
        var new_persona = target_arcana[ingredients[i]] + target_arcana[ingredients[j]];
        if (min_level <= new_persona &&
            new_persona < max_level)
        {
            final_recipes.push([ingredients[i], ingredients[j]]);
        }
      }
    }

    if (target_persona in double_element_recipes) {
      final_recipes = final_recipes.concat(double_element_recipes[target_persona]);
    }

    return final_recipes.map(recipe => recipe.map(name => Persona.fromName(name)));
  }
}
