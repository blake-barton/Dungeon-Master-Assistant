function runMagicTables(table, count, dieValue)
{
    var rollNum = diceRoller(count, dieValue);

    //define all magic item table arrays here
    var magicA = ["Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Potion of Healing", "Potion of Healing",
        "Spell scroll (cantrip)", "Spell scroll (cantrip)",
        "Spell scroll (cantrip)", "Spell scroll (cantrip)",
        "Spell scroll (cantrip)", "Spell scroll (cantrip)",
        "Spell scroll (cantrip)", "Spell scroll (cantrip)",
        "Spell scroll (cantrip)", "Spell scroll (cantrip)",
        "Potion of climbing", "Potion of climbing",
        "Potion of climbing", "Potion of climbing",
        "Potion of climbing", "Potion of climbing",
        "Potion of climbing", "Potion of climbing",
        "Potion of climbing", "Potion of climbing",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (1st level)", "Spell scroll (1st level)",
        "Spell scroll (2nd level)", "Spell scroll (2nd level)",
        "Spell scroll (2nd level)", "Spell scroll (2nd level)",
        "Potion of greater healing", "Potion of greater healing",
        "Potion of greater healing", "Potion of greater healing",
        "Bag of holding", "Driftglobe"];
    var magicB = ["Potion of greater healing", "Potion of greater healing", "Potion of greater healing",
        "Potion of greater healing", "Potion of greater healing", "Potion of greater healing",
        "Potion of greater healing", "Potion of greater healing", "Potion of greater healing",
        "Potion of greater healing", "Potion of greater healing", "Potion of greater healing",
        "Potion of greater healing", "Potion of greater healing", "Potion of greater healing",
        "Potion of fire breath", "Potion of fire breath",
        "Potion of fire breath", "Potion of fire breath",
        "Potion of fire breath", "Potion of fire breath",
        "Potion of fire breath",
        "Potion of resistance", "Potion of resistance",
        "Potion of resistance", "Potion of resistance",
        "Potion of resistance", "Potion of resistance",
        "Potion of resistance",
        "Ammunition, +1", "Ammunition, +1",
        "Ammunition, +1", "Ammunition, +1",
        "Ammunition, +1", "Potion of animal friendship",
        "Potion of animal friendship", "Potion of animal friendship",
        "Potion of animal friendship", "Potion of animal friendship",
        "Potion of hill giant strength", "Potion of hill giant strength",
        "Potion of hill giant strength", "Potion of hill giant strength",
        "Potion of hill giant strength", "Potion of growth",
        "Potion of growth", "Potion of growth",
        "Potion of growth", "Potion of growth",
        "Potion of water breathing", "Potion of water breathing",
        "Potion of water breathing", "Potion of water breathing",
        "Potion of water breathing", "Spell scroll (2nd level)",
        "Spell scroll (2nd level)", "Spell scroll (2nd level)",
        "Spell scroll (2nd level)", "Spell scroll (2nd level)",
        "Spell scroll (3rd level)", "Spell scroll (3rd level)",
        "Spell scroll (3rd level)", "Spell scroll (3rd level)",
        "Spell scroll (3rd level)", "Bag of holding",
        "Bag of holding", "Bag of holding",
        "Keoghtom's ointment", "Keoghtom's ointment",
        "Keoghtom's ointment", "Oil of slipperiness",
        "Oil of slipperiness", "Oil of slipperiness",
        "Dust of disappearance", "Dust of disappearance",
        "Dust of dryness", "Dust of dryness",
        "Dust of sneezing and choking", "Dust of sneezing and choking",
        "Elemental gem", "Elemental gem",
        "Philter of love", "Philter of love",
        "Alchemy jug",
        "Cap of water breathing",
        "Cloak of the manta ray",
        "Driftglobe",
        "Goggles of night",
        "Helm of comprehending languages",
        "Immovable rod",
        "Lantern of revealing",
        "Mariner's armor",
        "Mithral armor",
        "Potion of poison",
        "Ring of swimming",
        "Robe of useful items",
        "Rope of climbing",
        "Saddle of the cavalier",
        "Wand of magic detection",
        "Wand of secrets"];
    var magicC = ["Potion of Superior Healing", "Potion of Superior Healing", "Potion of Superior Healing", "Potion of Superior Healing", "Potion of Superior Healing", "Potion of Superior Healing",
        "Potion of Superior Healing", "Potion of Superior Healing", "Potion of Superior Healing", "Potion of Superior Healing", "Potion of Superior Healing", "Potion of Superior Healing",
        "Potion of Superior Healing", "Potion of Superior Healing", "Potion of Superior Healing", "Spell Scroll (4th level)", "Spell Scroll (4th level)", "Spell Scroll (4th level)",
        "Spell Scroll (4th level)", "Spell Scroll (4th level)", "Spell Scroll (4th level)", "Spell Scroll (4th level)", "Ammunition, +2", "Ammunition, +2", "Ammunition, +2",
        "Ammunition, +2", "Ammunition, +2", "Potion of Clairvoyance", "Potion of Clairvoyance", "Potion of Clairvoyance", "Potion of Clairvoyance", "Potion of Clairvoyance",
        "Potion of Diminution", "Potion of Diminution", "Potion of Diminution", "Potion of Diminution", "Potion of Diminution", "Potion of Gaseous Form", "Potion of Gaseous Form",
        "Potion of Gaseous Form", "Potion of Gaseous Form", "Potion of Gaseous Form", "Potion of Frost Giant Strength", "Potion of Frost Giant Strength", "Potion of Frost Giant Strength",
        "Potion of Frost Giant Strength", "Potion of Frost Giant Strength", "Potion of Stone Giant Strength", "Potion of Stone Giant Strength", "Potion of Stone Giant Strength",
        "Potion of Stone Giant Strength", "Potion of Stone Giant Strength", "Potion of Heroism", "Potion of Heroism", "Potion of Heroism", "Potion of Heroism", "Potion of Heroism",
        "Potion of Invulnerability", "Potion of Invulnerability", "Potion of Invulnerability", "Potion of Invulnerability", "Potion of Invulnerability", "Potion of Mind Reading",
        "Potion of Mind Reading", "Potion of Mind Reading", "Potion of Mind Reading", "Potion of Mind Reading", "Spell Scroll (5th level)", "Spell Scroll (5th level)", "Spell Scroll (5th level)",
        "Spell Scroll (5th level)", "Spell Scroll (5th level)", "Elixir of Health", "Elixir of Health", "Elixir of Health", "Oil of Etherealness", "Oil of Etherealness",
        "Oil of Etherealness", "Potion of Fire Giant Strength", "Potion of Fire Giant Strength", "Potion of Fire Giant Strength", "Quaal's Feather Token", "Quaal's Feather Token",
        "Quaal's Feather Token", "Scroll of Protection", "Scroll of Protection", "Scroll of Protection", "Bag of Beans", "Bag of Beans", "Bead of Force", "Bead of Force",
        "Chime of Opening", "Decanter of Endless Water", "Eyes of Minute Seeing", "Folding Boat", "Heward's Handy Haversack", "Horseshoes of Speed", "Necklace of Fireballs",
        "Periapt of Health", "Sending Stones"];
    var magicD = ["Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing",
        "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing",
        "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing",
        "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Invisibility", "Potion of Invisibility", "Potion of Invisibility", "Potion of Invisibility",
        "Potion of Invisibility", "Potion of Invisibility", "Potion of Invisibility", "Potion of Invisibility", "Potion of Invisibility", "Potion of Invisibility",
        "Potion of Speed", "Potion of Speed", "Potion of Speed", "Potion of Speed", "Potion of Speed", "Potion of Speed", "Potion of Speed", "Potion of Speed", "Potion of Speed",
        "Potion of Speed", "Spell Scroll (6th level)", "Spell Scroll (6th level)", "Spell Scroll (6th level)", "Spell Scroll (6th level)", "Spell Scroll (6th level)",
        "Spell Scroll (6th level)", "Spell Scroll (6th level)", "Spell Scroll (6th level)", "Spell Scroll (6th level)", "Spell Scroll (6th level)", "Spell Scroll (7th level)",
        "Spell Scroll (7th level)", "Spell Scroll (7th level)", "Spell Scroll (7th level)", "Spell Scroll (7th level)", "Spell Scroll (7th level)", "Spell Scroll (7th level)",
        "Ammunition, +3", "Ammunition, +3", "Ammunition, +3", "Ammunition, +3", "Ammunition, +3", "Oil of Sharpness", "Oil of Sharpness", "Oil of Sharpness", "Oil of Sharpness",
        "Oil of Sharpness", "Potion of Flying", "Potion of Flying", "Potion of Flying", "Potion of Flying", "Potion of Flying", "Potion of Cloud Giant Strength", "Potion of Cloud Giant Strength",
        "Potion of Cloud Giant Strength", "Potion of Cloud Giant Strength", "Potion of Cloud Giant Strength", "Potion of Longevity", "Potion of Longevity", "Potion of Longevity",
        "Potion of Longevity", "Potion of Longevity", "Potion of Vitality", "Potion of Vitality", "Potion of Vitality", "Potion of Vitality", "Potion of Vitality", "Spell Scroll (8th Level)",
        "Spell Scroll (8th Level)", "Spell Scroll (8th Level)", "Spell Scroll (8th Level)", "Spell Scroll (8th Level)", "Horseshoes of a Zephyr", "Horseshoes of a Zephyr",
        "Horseshoes of a Zephyr", "Nolzur's Marvelous Pigments", "Nolzur's Marvelous Pigments", "Nolzur's Marvelous Pigments", "Bag of Devouring", "Portable Hole"];
    var magicE = ["Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)",
        "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)",
        "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)",
        "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)",
        "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)",
        "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)", "Spell scroll (8th level)",
        "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength",
        "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength",
        "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength",
        "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength",
        "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength",
        "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength", "Potion of Storm Giant Strength",
        "Potion of Storm Giant Strength", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing",
        "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing",
        "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing", "Potion of Supreme Healing",
        "Potion of Supreme Healing", "Spell scroll (9th level)", "Spell scroll (9th level)", "Spell scroll (9th level)", "Spell scroll (9th level)",
        "Spell scroll (9th level)", "Spell scroll (9th level)", "Spell scroll (9th level)", "Spell scroll (9th level)", "Spell scroll (9th level)",
        "Spell scroll (9th level)", "Spell scroll (9th level)", "Spell scroll (9th level)", "Spell scroll (9th level)", "Spell scroll (9th level)",
        "Spell scroll (9th level)", "Universal Solvent", "Universal Solvent", "Universal Solvent", "Universal Solvent", "Universal Solvent",
        "Universal Solvent", "Universal Solvent", "Universal Solvent", "Arrow of Slaying", "Arrow of Slaying", "Arrow of Slaying", "Arrow of Slaying",
        "Arrow of Slaying", "Sovereign Glue", "Sovereign Glue"];
    var magicF = ["Weapon, +1", "Weapon, +1", "Weapon, +1", "Weapon, +1", "Weapon, +1", "Weapon, +1", "Weapon, +1", "Weapon, +1", "Weapon, +1", "Weapon, +1", "Weapon, +1", "Weapon, +1",
        "Weapon, +1", "Weapon, +1", "Weapon, +1", "Shield, +1", "Shield, +1", "Shield, +1", "Sentinel Shield", "Sentinel Shield", "Sentinel Shield", "Amulet of Proof against Detection and Location",
        "Amulet of Proof against Detection and Location", "Boots of Elvenkind", "Boots of Elvenkind", "Boots of Striding and Springing", "Boots of Striding and Springing",
        "Bracers of Archery", "Bracers of Archery", "Brooch of shielding", "Brooch of shielding", "Broom of Flying", "Broom of Flying", "Cloak of Elvenkind", "Cloak of Elvenkind",
        "Cloak of Protection", "Cloak of Protection", "Gauntlets of Ogre Power", "Gauntlets of Ogre Power", "Hat of Disguise", "Hat of Disguise", "Javelin of Lightning",
        "Javelin of Lightning", "Pearl of Power", "Pearl of Power", "Rod of the Pact Keeper, +1", "Rod of the Pact Keeper, +1", "Slippers of Spider Climbing", "Slippers of Spider Climbing",
        "Staff of the Adder", "Staff of the Adder", "Staff of the Python", "Staff of the Python", "Sword of Vengeance", "Sword of Vengeance", "Trident of Fish Command",
        "Trident of Fish Command", "Wand of Magic Missiles", "Wand of Magic Missiles", "Wand of the War Mage, +1", "Wand of the War Mage, +1", "Wand of Web", "Wand of Web",
        "Weapon of Warning", "Weapon of Warning", "Adamantine Armor (chain mail)", "Adamantine Armor (chain shirt)", "Adamantine Armor (scale mail)", "Bag of Tricks (gray)",
        "Bag of Tricks (rust)", "Bag of Tricks (tan)", "Boots of the Winterlands", "Circlet of Blasting", "Deck of Illusions", "Eversmoking Bottle", "Eyes of Charming",
        "Eyes of the Eagle", "Figurine of Wondrous Power (Silver Raven)", "Gem of Brightness", "Gloves of Missile Snaring", "Gloves of Swimming and Climbing", "Gloves of Thievery",
        "Headband of Intellect", "Helm of Telepathy", "Instrument of the Bards (Doss Lute)", "Instrument of the Bards (Fochlucan Bandore)", "Instrument of the Bards (Mac-Fuimidh cittern)",
        "Medallion of Thoughts", "Necklace of Adaptation", "Periapt of Wound Closure", "Pipes of Haunting", "Pipes of the Sewers", "Ring of Jumping", "Ring of Mind Shielding",
        "Ring of Warmth", "Ring of Water Walking", "Quiver of Ehlonna", "Stone of Good Luck", "Wind Fan", "Winged Boots"];
    var magicG = ["Weapon, +2", "Weapon, +2", "Weapon, +2", "Weapon, +2", "Weapon, +2", "Weapon, +2", "Weapon, +2", "Weapon, +2", "Weapon, +2", "Weapon, +2",
        "Weapon, +2", "", "", "", "Adamantine Armor (Breastplate)", "Adamantine Armor (Splint)", "Amulet of Health", "Armor of Vulnerability",
        "Arrow-catching Shield", "Belt of Dwarvenkind", "Belt of Hill Giant Strength", "Berserker Axe", "Boots of Levitation", "Boots of Speed",
        "Bowl of Commanding Water Elementals", "Bracers of Defense", "Brazier of Commanding Fire Elementals", "Cape of the Mountebank", "Censer of Controlling Air Elementals",
        "Armor, +1 Chain Mail", "Armor of Resistance (Chain Mail)", "Armor of Resistance (Chain Shirt)", "Armor, +1 Chain Shirt", "Cloak of Displacement",
        "Cloak of the Bat", "Cube of Force", "Daern's Instant Fortress", "Dagger of Venom", "Dimensional Shackles", "Dragon Slayer", "Elvin Chain",
        "Flame Tongue", "Gem of Seeing", "Giant Slayer", "Clamoured Studded Leather", "Helm of Teleportation", "Horn of Blasting", "Horn of Valhalla (silver or brass)",
        "Instrument of the bards (Canaithmandolin)", "Instrument of the bards (Cii Lyre)", "Loun Stone (Awareness)", "Loun Stone (Protection)",
        "Loun Stone (Reserve)", "Loun Stone (Sustenance)", "Iron Bands of Bilarro", "Armor, +1 Leather", "Armor of Resistance (Leather)",
        "Mace of Disruption", "Mace of Smiting", "Mace of Terror", "Mantle of Spell Resistance", "Necklace of Prayer Beads", "Periapt of Proof Against Poison",
        "Ring of Animal Influence", "Ring of Evasion", "Ring of Feather Falling", "Ring of Free Action", "Ring of Protection", "Ring of Resistance",
        "Ring of Spell Storing", "Ring of the Ram", "Ring of X-ray Vision", "Robe of Eyes", "Rod of Rulership", "Rod of the Pact Keeper, +2", "Robe of Entanglement",
        "Armor, +1 Scale Mail", "Armor of Resistance (Scale Mail)", "Shield, +2", "Shield of Missile Attraction", "Staff of Charming", "Staff of Healing",
        "Staff of Swarming Insects", "Staff of the Woodlands", "Staff of Withering", "Stone of Controlling Earth Elementals", "Sun Blade",
        "Sword of Life Stealing", "Sword of Wounding", "Tentacle Rod", "Vicious Weapon", "Wand of Binding", "Wand of Enemy Detection", "Wand of Fear",
        "Wand of Fireballs", "Wand of Lightning Bolts", "Wand of Paralysis", "Wand of the War Mage, +2", "Wand of Wonder", "Wings of Flying"];
    var magicGSub = ["Bronze Griffon", "Ebony Fly", "Golden Lions", "Ivory Goats", "Marble Elephant", "Onyx Dog", "Onyx Dog", "Serpentine Owl"];
    var magicH = ["Weapon, +3", "Weapon, +3", "Weapon, +3", "Weapon, +3", "Weapon, +3", "Weapon, +3", "Weapon, +3", "Weapon, +3", "Weapon, +3", "Weapon, +3", "Amulet of the planes", "Amulet of the planes",
        "Carpet of flying", "Carpet of flying", "Crystal ball", "Crystal ball", "Ring of regeneration", "Ring of regeneration", "Ring of shooting stars", "Ring of shooting stars", "Ring of telekinesis",
        "Ring of telekinesis", "Robe of scintillating colors", "Robe of scintillating colors", "Robe of stars", "Robe of stars", "Rod of absorption", "Rod of absorption", "Rod of alertness", "Rod of alertness",
        "Rod of security", "Rod of security", "Rod of the pact keeper, +3", "Rod of the pact keeper, +3", "Scimitar of speed", "Scimitar of speed", "Shield, +3", "Shield, +3", "Staff of fire", "Staff of fire",
        "Staff of frost", "Staff of frost", "Staff of power", "Staff of power", "Staff of striking", "Staff of striking", "Staff of thunder and lightning", "Staff of thunder and lightning", "Sword of sharpnes",
        "Sword of sharpnes", "Wand of polymorph", "Wand of polymorph", "Wand of the war mage, + 3", "Wand of the war mage, + 3", "Adamantine armor (half plate)", "Animated shield", "Belt of fire giant strength",
        "Belt of frost (or stone) giant strength", "Armor, + 1 breastplate", "Armor of resistance (breastplate)", "Candle of invocation", "Armor, +2 chain mail", "Armor, +2 chain shirt", "Cloak of arachnida",
        "Dancing sword", "Demon armor", "Dragon scale mail", "Dwarven plate", "Dwarven thrower", "Efreeti bottle", "Figurine of wondrous power (obsidian steed)", "Frost brand", "Helm of brilliance", "Horn ofValhalla (bronze)",
        "Instrument of the bards (Anstruthharp)", "loun stone (absorption)", "loun stone (agility)", "loun stone (fortitude)", "loun stone (insight)", "loun stone (intellect)", "loun stone (leadership)", "loun stone (strength)",
        "Armor, +2 leather", "Manual of bodily health", "Manual of gainful exercise", "Manual of golems", "Manual of quickness of action", "Mirror of life trapping", "Nine lives stealer", "Oathbow", "Armor, +2 scale mail", "Spellguard shield",
        "Armor, + 1 splint", "Armor of resistance (splint)", "Armor, + 1 studded leather", "Armor of resistance (studded leather)", "Tome of clear thought", "Tome of leadership and influence", "Tome of understanding"];

    var magicI = ["Defender", "Defender", "Defender", "Defender", "Defender", "Hammer of thunderbolts", "Hammer of thunderbolts", "Hammer of thunderbolts", "Hammer of thunderbolts", "Hammer of thunderbolts",
        "Luck Blade", "Luck Blade", "Luck Blade", "Luck Blade", "Luck Blade", "Sword of answering", "Sword of answering", "Sword of answering", "Sword of answering", "Sword of answering", "Holy avenger", "Holy avenger",
        "Holy avenger", "Ring of djinni summoning", "Ring of djinni summoning", "Ring of djinni summoning", "Ring of invisibility", "Ring of invisibility", "Ring of invisibility", "Ring of spell turning",
        "Ring of spell turning", "Ring of spell turning", "Rod of lordly might", "Rod of lordly might", "Rod of lordly might", "Staff of the Magi", "Staff of the Magi", "Staff of the Magi", "	Vorpal sword", "	Vorpal sword", "	Vorpal sword", "	Belt of cloud giant strength",
        "Belt of cloud giant strength", "Armor, +2 breastplate", "Armor, +2 breastplate", "Armor, +3 chain mail", "Armor, +3 chain mail", "Armor, +3 chain shirt", "Armor, +3 chain shirt", "Cloak of invisibility",
        "Cloak of invisibility", "Crystal ball (legendary version)", "Crystal ball (legendary version)", "Armor, + 1 half plate", "Armor, + 1 half plate", "	Iron flask", "	Iron flask", "Armor, +3 leather",
        "Armor, +3 leather", "Armor, +1 plate", "Armor, +1 plate", "Robe of the archmagi", "Robe of the archmagi", "Rod of resurrection", "Rod of resurrection", "	Armor, +1 scale mail", "	Armor, +1 scale mail",
        "Scarab of protection", "Scarab of protection", "Armor, +2 splint", "Armor, +2 splint", "Armor, +2 studded leather", "Armor, +2 studded leather", "Well of many worlds", "Well of many worlds",
        " ", "Apparatus of Kwalish", "Armor of invulnerability", "Belt of storm giant strength", "Cubic gate", "Deck of many things", "Efreeti chain", "Armor of resistance (half plate)", "Horn of Valhalla (iron)",
        "Instrument of the bards (OIIamh harp)", "loun stone (greater absorption)", "loun stone (mastery)", "loun stone (regeneration)", "Plate armor of etherealness", "Plate armor of resistance",
        "Ring of air elemental command", "Ring of earthelemental command", "Ring of fire elemental command", "Ring of three wishes", "Ring of water elemental command", "Sphere of annihilation",
        "Talisman of pure good", "Talisman of the sphere", "Talisman of ultimate evil", "Tome of the stilled tongue"];
    var magicISub = ["Armor, +2 half plate", "Armor, +2 half plate", "Armor, +2 plate", "Armor, +2 plate", "Armor, +3 studded leather", "Armor, +3 studded leather", "Armor, +3 breastplate", "Armor, +3 breastplate", "Armor, +3 splint", "Armor, +3 splint", "Armor, +3 half plate", "Armor, +3 plate"];

    if (table == "a")
    {
        return tableA(magicA, rollNum);
    }
    else if (table == "b")
    {
        return tableB(magicB, rollNum);
    }
    else if (table == "c")
    {
        return tableC(magicC, rollNum);
    }
    else if (table == "d")
    {
        return tableD(magicD, rollNum);
    }
    else if (table == "e")
    {
        return tableE(magicE, rollNum);
    }
    else if (table == "f")
    {
        return tableF(magicF, rollNum);
    }
    else if (table == "g")
    {
        return tableG(magicG, magicGSub, rollNum);
    }
    else if (table == "h")
    {
        return tableH(magicH, rollNum);
    }
    else if (table == "i")
    {
        return tableI(magicI, magicISub, rollNum);
    }

}

//Start all functions for each table; each function should return a string with magic item/items
function tableA(magicA, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicA[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableB(magicB, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicB[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableC(magicC, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicC[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableD(magicD, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicD[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableE(magicE, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicE[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableF(magicF, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicF[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableG(magicG, magicGSub, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    var subrollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        if (rollIndex >= 11 && rollIndex <= 13)
        {
            subrollIndex = diceRoller(1, 8) - 1;
            magicItems += "-";
            magicItems += magicGSub[subrollIndex];
            magicItems += "\n";
        }
        else
        {
            magicItems += "-";
            magicItems += magicG[rollIndex];
            magicItems += "\n";
        }
    }
    return magicItems;
}
function tableH(magicH, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicH[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableI(magicI, magicISub, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    var subrollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        if (rollIndex == 75)
        {
            subrollIndex = diceRoller(1, 12) - 1;
            magicItems += "-";
            magicItems += magicISub[subrollIndex];
            magicItems += "\n";
        }
        else
        {
            magicItems += "-";
            magicItems += magicI[rollIndex];
            magicItems += "\n";
        }
    }
    return magicItems;
}
