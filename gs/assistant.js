/**
 * @OnlyCurrentDoc
 *
 * The above comment directs Apps Script to limit the scope of file
 * access for this add-on. It specifies that this add-on will only
 * attempt to read or modify the files in which the add-on is used,
 * and not all of the user's files. The authorization request message
 * presented to users will reflect this limited scope.
 */

/**
 * Creates a menu entry in the Google Docs UI when the document is opened.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onOpen trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode.
 */
   
function onOpen(e) {
    DocumentApp.getUi().createAddonMenu()
        .addItem('Open', 'showSidebar')
        .addToUi();
}
  
  /**
   * Runs when the add-on is installed.
   * This method is only used by the regular add-on, and is never called by
   * the mobile add-on version.
   *
   * @param {object} e The event parameter for a simple onInstall trigger. To
   *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
   *     running in, inspect e.authMode. (In practice, onInstall triggers always
   *     run in AuthMode.FULL, but onOpen triggers may be AuthMode.LIMITED or
   *     AuthMode.NONE.)
   */
function onInstall(e) {
    onOpen(e);
}
  
/**
 * Opens a sidebar in the document containing the add-on's user interface.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 */
function showSidebar() {
    //createFolder("DMAssistant", "DMAssistantItems", 'monsterList.txt', 'itemsList.txt');
    var childFolders = ["DMAssistantMonsters", "DMAssistantItems", "DMAssistantPlayers", "DMAssistantEncounters"];
    var textFiles = ["monsterList.txt", "itemsList.txt", "playerList.txt", "encounterList.json"];
    var mimeTypes = [MimeType.PLAIN_TEXT, MimeType.PLAIN_TEXT, MimeType.PLAIN_TEXT, 'application/json']

    createFolder("DMAssistant", childFolders, textFiles, mimeTypes);
    var template = HtmlService.createTemplateFromFile('sidebar')
      .evaluate()
      .setTitle('DM Assistant');
    DocumentApp.getUi().showSidebar(template);
}

// function to create a popup modal
function showDialog()
{
    var html = HtmlService.createTemplateFromFile('dialog')
        .evaluate()
        .setWidth(800)
        .setHeight(600);
    DocumentApp.getUi()
        .showModalDialog(html, 'Create a new Monster');
}

function showItemDialog() {
    var html = HtmlService.createTemplateFromFile('itemDialog')
        .evaluate()
        .setWidth(800)
        .setHeight(600);
    DocumentApp.getUi()
        .showModalDialog(html, 'Create Custom Item');
}

function showTrackerDialog()
{
    var html = HtmlService.createTemplateFromFile('tracker')
        .evaluate()
        .setWidth(800)
        .setHeight(600);
    DocumentApp.getUi()
        .showModalDialog(html, 'Exploration Tracker');
}

function showAddPlayerDialog()
{
    var html = HtmlService.createTemplateFromFile('addPlayer')
        .evaluate()
        .setWidth(800)
        .setHeight(600);
    DocumentApp.getUi()
        .showModalDialog(html, 'Add Player');
}

function showAddEncounterDialog()
{
    var html = HtmlService.createTemplateFromFile('addEncounter')
        .evaluate()
        .setWidth(800)
        .setHeight(600);
    DocumentApp.getUi()
        .showModalDialog(html, 'Add Random Encounter');
}


// create a DMAssistant folder with monsterList.txt and monsters folder when the add-on is installed
function createFolder(rootFolder, childFolders, textFiles, mimeTypes)
{
    var folderCheck = DriveApp.getFoldersByName(rootFolder);
    if (!folderCheck.hasNext()){

        // create the DMAssistant root folder
        var root = DriveApp.createFolder(rootFolder);

        // create a child folder with text file inside DMAssistant for each string in childFolders
        for (var i = 0; i < childFolders.length; i++)
        {
            var folder = root.createFolder(childFolders[i]);

            if (mimeTypes[i] === "application/json")
            {
                var file = folder.createFile(textFiles[i], '[]', mimeTypes[i]);
            }
            else
            {
                var file = folder.createFile(textFiles[i], '', mimeTypes[i]);
            }
        }

      /*
      var file = folder.createFile(referencefile1, '', MimeType.PLAIN_TEXT);
      var folder2 = folder.createFolder(foldername2);
      var file2 = folder2.createFile(referencefile2, '', MimeType.PLAIN_TEXT);
      */
    }
}

// used to separate scripts and css files
function include(filename)
{
    return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}