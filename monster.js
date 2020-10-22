
class Monster
{
    constructor(numericStats, descriptors, passives, actions, reactions)
    {
        this.numericStats = numericStats;
        this.descriptors = descriptors;
        this.passives = passives;
        this.actions = actions;
        this.reactions = reactions;
    }
        
}
class MonsterDescriptors
{
    constructor(name, size, type, alignment)
    {
        this.name = name;
        this.size = size;
        this.type = type;
        this.alignment = alignment;
    }
}
class MonsterNumericStats
{
    constructor(ac, hp, speeds, abilityScores, savingThrows, cr)
    {
        this.ac = ac;
        this.hp = hp;
        this.speeds = speeds;
        this.abilityScores = abilityScores;
        this.savingThrows = savingThrows;
        this.cr = cr;
    }
        
}
class Speeds
{
    constructor(landSpeed, swimSpeed, flySpeed)
    {
        this.landSpeed = landSpeed;
        this.swimSpeed = swimSpeed;
        this.flySpeed = flySpeed;
    }
}
class AbilityScores
{
    constructor(str, dex, con, int, wis, cha)
    {
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }
}
class SavingThrows
{
    constructor(str, dex, con, int, wis, cha)
    {
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }
}
class MonsterPassives
{
    constructor(senses, skills, immuneResists, languages, specialPassives)
    {
        this.senses = senses;
        this.skills = skills;
        this.immuneResists = immuneResists;
        this.languages = languages;
        this.specialPassives = specialPassives;
    }
        
}
class MonsterImmuneResists
{
    constructor(resistances, immunities, conditionImmunities)
    {
        this.resistances = resistances;
        this.immunities = immunities;
        this.conditionImmunities = conditionImmunities;
    }
}
class SpecialPassives
{
    constructor(names, descriptions, spellCasting)
    {
        this.names = names;
        this.descriptions = descriptions;
        this.spellCasting = spellCasting;
    }
}
class MonsterSpellCasting
{
    constructor(castLevel, castAbility, spellSaveEquation, spellSlots, spells)
    {
        this.castLevel = castLevel;
        this.castAbility = castAbility;
        this.spellSaveEquation = spellSaveEquation;
        this.spellSlots = spellSlots;
        this.spells = spells;
    }
}
class MonsterActions 
{ // all string[] unless otherwise
	constructor(names, descriptions, legendaryActions)
    {
        this.names = names;
        this.descriptions = descriptions;
        this.legendaryActions = legendaryActions;
    }
    
}
class LegendaryActions 
{
	constructor(names, descriptions)
    {
        this.names = names;
        this.descriptions = descriptions;
    }
}
class MonsterReactions 
{ // all string[]
	constructor(names, descriptions)
    {
        this.names = names;
        this.descriptions = descriptions;
    }
}