import skills from './skills.json';

export const getSkillByName = (skillName) => {
  return skills[skillName];
}
