# Dungeon-Master-Assistant
 A google docs add-on to assist in the more technical aspects of writing quests for DnD

## Current Major Features
* Creation of custom monsters/NPCs which are stored to the users Google Drive
* Random generation of loot from the official Dungeon Master's Guide tables
* Creation/storage of custom items (will not be placed into loot tables)

## Currently Planned Features
* Right now I'm working on an Exploration Tracker, which aims to assist DMs in keeping track of time, distance, and survival stats such as hunger, thirst, and water when a party goes through overworld travel. Currently in early stages.

## How it Works
### Custom Monsters/Items
When a DM Assistant is installed and a Google Doc is open, the add-on will create (if it doesn't already exist) a folder called "DMAssistant" at the root of the user's Drive. This folder will store JSONs and name lists for monsters and items. When the sidebar is opened via "Add-ons" -> "DM Assistant" -> "Open", the script will load the JSONs into human readable collapsible lists.

### Random Loot Generation
The user can roll for both Treasure Hoards and Individual loot as a function of challenge rating. The results will be displayed in a text box which can be directly inserted into the doc.

## Known Bugs/Quirks
* Searching for monsters with duplicate names will mark both of them. Hitting collapse all twice will unmark both. It's recommended that you don't create monsters with duplicate names.
* It may take some time before custom monsters/items are saved to Drive. Give the script a second to fire before refreshing (or refresh multiple times).


 This project is open source! If you have your own ideas, feel free to submit a pull request or fork for your own personal use.

 Happy DMing!

## Credits
 * Backend and UI by Blake Barton
 * Loot Generator code by Jacob Smith
 * Loot Tables populated by Arsh Kabarwal, Shashaank Srikanth, and Matthew Weng 