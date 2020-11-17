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
 
function loadMonsters(e) {
    var monstersJSON = UrlFetchApp.fetch("https://blake-barton.github.io/Dungeon-Master-Assistant/monsters.json");
    var monstersObject = JSON.parse(monstersJSON);
    Logger.log(monstersObject[0].name);
    Logger.log(monstersObject[0].Passives.senses[0]);
}
   
function onOpen(e) {
    DocumentApp.getUi().createAddonMenu()
        .addItem('Start', 'showSidebar')
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
    createFolder("DMAssistant", "DMAssistantItems", 'monsterList.txt', 'itemsList.txt');
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


// create a DMAssistant folder with monsterList.txt and monsters folder when the add-on is installed
function createFolder(foldername1, foldername2, referencefile1, referencefile2)
{
    var folderCheck = DriveApp.getFoldersByName(foldername1);
    if (!folderCheck.hasNext()){
      var folder = DriveApp.createFolder(foldername1);
      var file = folder.createFile(referencefile1, '', MimeType.PLAIN_TEXT);
      var folder2 = folder.createFolder(foldername2);
      var file2 = folder2.createFile(referencefile2, '', MimeType.PLAIN_TEXT);
    }
}

// used to separate scripts and css files
function include(filename)
{
    return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}