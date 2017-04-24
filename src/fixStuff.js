import Persona from './util/persona.js';
import personas from './util/personas.json';
import compendium from './util/js/full_compendium.js';
import FileSaver from 'file-saver';

const fixedPersonas = {};
Object.keys(personas).forEach(key => {
  const persona = personas[key];
  persona.resistances.curse = compendium[key].curse;
  console.log(persona);
  fixedPersonas[key] = persona;
});
const fileName = 'personas.json';
const text = JSON.stringify(fixedPersonas);
const blob = new Blob([text], { type: 'application/json;charset=utf-8' });
FileSaver.saveAs(blob, fileName);
