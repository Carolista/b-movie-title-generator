const lexicon = {
	descriptors: [
		'Killer',
		'Radioactive',
		'Mutant',
		'Bloodthirsty',
		'Psycho',
		'Toxic',
		'Chain Mail',
		'Neon',
		'Satanic',
		'Slime',
		'Undead',
		'Vampire',
		'Cybernetic',
		'Cannibal',
		'Zombie',
	],
	locations: [
		'Boardwalk',
		'Suburbia',
		'Velvet Beach',
		'Malibu',
		'Camp Bloodwood',
		'Sorority Row',
		'Gallows High',
		'The Roller Rink',
		'Spring Break',
		'The Moonlight Motel',
		'Outer Space',
		'The Sewer',
		'Neon City',
	],
	archetypes: [
		'Bimbos',
		'Strippers',
		'Barbarian Queens',
		'Bikini Babes',
		'Cheerleaders',
		'Vixens',
		'Lifeguards',
		'Wrestlers',
		'Sorority Sisters',
		'Babysitters',
		'Co-Eds',
		'Showgirls',
		'Prom Queens',
	],
	creatures: [
		'Clowns',
		'Werewolves',
		'Goblins',
		'Gargoyles',
		'Critters',
		'Swamp Beasts',
		'Apes',
		'Leeches',
		'Snakes',
		'Spider-Monsters',
		'Gators',
		'Mummies',
		'Gremlins',
	],
	fantasyConcepts: [
		'Séance',
		'Voodoo',
		'Necronomicon',
		'Black Magic',
		'Blood Curse',
		'Alien Abduction',
		'Witchcraft',
		'Astral Projection',
		'Poltergeist',
		'Sorcery',
		'Demonic Possession',
	],
	actions: [
		'Massacre',
		'Revenge',
		'Invasion',
		'Slaughter',
		'Carnage',
		'Bloodfeast',
		'Attack',
		'Showdown',
		'Rampage',
		'Curse',
		'Nightmare',
		'Haunting',
		'Bloodbath',
	],
	monsters: [
		'Mutant',
		'Fiend',
		'Freak',
		'Abomination',
		'Creature',
		'Thing',
		'Entity',
		'Terror',
		'Horror',
		'Demon',
		'Slasher',
		'Phantom',
		'Beast',
	],
	verbs: [
		'Ate',
		'Destroyed',
		'Terrorized',
		'Invaded',
		'Stole',
		'Haunted',
		'Ravaged',
		'Conquered',
		'Crushed',
		'Devoured',
		'Mutilated',
		'Stalked',
		'Annihilated',
	],
	nouns: [
		'Revenge',
		'Return',
		'Curse',
		'Nightmare',
		'Rise',
		'Dawn',
		'Wrath',
		'Terrors',
		'Secrets',
		'Reign',
		'Legacy',
		'Lair',
		'Cult',
		'Tomb',
	],
	origins: [
		'Outer Space',
		'The Deep',
		'Hell',
		'Dimension X',
		'The Atomic Void',
		'The Crypt',
		'Planet Z',
		'The Sewer',
		'The Swamp',
		'Beyond',
		'The Dark',
		'The Lab',
		'The Toxic Dump',
	],
};

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const getRandomSequel = () => {
	const formats = [
		` ${Math.floor(Math.random() * 12) + 2}`,
		` #${Math.floor(Math.random() * 20) + 2}`,
		`: Part ${Math.floor(Math.random() * 5) + 2}`,
	];
	return getRandomElement(formats);
};

const patterns = [
	// [Descriptor] [Archetype]s from [Location]
	data =>
		`${getRandomElement(data.descriptors)} ${getRandomElement(data.archetypes)} from ${getRandomElement(data.locations)}`,

	// [Location] [Archetype]s [Number]
	data =>
		`${getRandomElement(data.locations)} ${getRandomElement(data.archetypes)}${getRandomSequel()}`,

	// [Fantasy Concept] [Archetype]s
	data =>
		`${getRandomElement(data.fantasyConcepts)} ${getRandomElement(data.archetypes)}`,

	// [Descriptor] [Fantasy Concept] [Archetype]s
	data =>
		`${getRandomElement(data.descriptors)} ${getRandomElement(data.fantasyConcepts)} ${getRandomElement(data.archetypes)}`,

	// [Descriptor] [Creature]s from [Origin]
	data =>
		`${getRandomElement(data.descriptors)} ${getRandomElement(data.creatures)} from ${getRandomElement(data.origins)}`,

	// [Noun] of the [Descriptor] [Monster/Archetype]s
	data =>
		`${getRandomElement(data.nouns)} of the ${getRandomElement(data.descriptors)} ${getRandomElement(data.archetypes)}`,

	// [Descriptor] [Archetype] [Action]
	data =>
		`${getRandomElement(data.descriptors)} ${getRandomElement(data.archetypes)} ${getRandomElement(data.actions)}`,

	// The [Monster] That [Verb] [Location]
	data =>
		`The ${getRandomElement(data.monsters)} That ${getRandomElement(data.verbs)} ${getRandomElement(data.locations)}`,

	// [Descriptor] Vixens of [Location]
	data =>
		`${getRandomElement(data.descriptors)} Vixens of ${getRandomElement(data.locations)}`,

	// [Creature]s vs. [Archetype]s
	data =>
		`${getRandomElement(data.descriptors)} ${getRandomElement(data.creatures)} vs. The ${getRandomElement(data.archetypes)}`,
];

export default function generateBTitle(wordBank = lexicon) {
	const randomPattern = getRandomElement(patterns);
	return randomPattern(wordBank);
}
