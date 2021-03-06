# Dungeon-Master-Assistant
 A google docs add-on to assist in the more technical aspects of writing quests for DnD

## Current Major Features
* Creation of custom monsters/NPCs which are stored to the users Google Drive
* Random generation of loot from the official Dungeon Master's Guide tables
* Creation/storage of custom items (will not be placed into loot tables)

## Currently Planned Features
* Done working for the forseeable future. Might work on minor things like bugfixes or duplicate protection for monsters/items sometime, but right now the effects of duplicates aren't a big deal for those two.

## How it Works
### Custom Monsters/Items
When a DM Assistant is installed and a Google Doc is open, the add-on will create (if it doesn't already exist) a folder called "DMAssistant" at the root of the user's Drive. This folder will store JSONs and name lists for monsters and items. When the sidebar is opened via "Add-ons" -> "DM Assistant" -> "Open", the script will load the JSONs into human readable collapsible lists.

### Random Loot Generation
The user can roll for both Treasure Hoards and Individual loot as a function of challenge rating. The results will be displayed in a text box which can be directly inserted into the doc.

### The Exploration Tracker
Ever have difficulty tracking time while the party travels? Or feel too overwhelmed by the idea of tracking exhaustion to even bother? This module attempts to alleviate the DM's burden of tracking player survival on long journeys and make travel part of the game.

#### Add Players and Random Encounters
* Add players to let the system track their hunger, thirst, exhaustion, lifestyle, and more.

#### Add Random Encounters
* Customize in the tracker how often they fire, and whether or not they classify as an ambush or track.
* Broken up by terrain so different encounters appear in different lands.

## Known Bugs/Quirks
* Searching for monsters with duplicate names will mark both of them. Hitting collapse all twice will unmark both. It's recommended that you don't create monsters with duplicate names.
* It may take some time before custom monsters/items are saved to Drive. Give the script a second to fire before refreshing (or refresh multiple times).

## Creating an Apps Script Project
 This project is open source! If you have your own ideas, feel free to submit a pull request or fork for your own personal use. In order to edit and test in the Apps Script development environment, follow these steps:
 1. Open a Google Docs file.
 1. Go to Tools -> Script Editor, and create a new project.
 1. For each HTML file in this repo, create a corresponding HTML file in the project.
 1. For each JS file in this repo, create a corresponding GS script file in the project.
 1. Save all files.
 1. Test the project by reloading the Google Doc, go to Add-ons -> DM Assistant -> Open.
 1. All set!

 Happy DMing!

## Credits
 * Backend and UI by Blake Barton
 * Loot Generator code by Jacob Smith
 * Loot Tables populated by Arsh Kabarwal, Shashaank Srikanth, and Matthew Weng 