function createItemJSON(filename, itemJSON, itemName)
{
    var folderName = "DMAssistantItems";

    // save item json
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        var folder = folderList.next();
        folder.createFile(filename, itemJSON, 'application/json');
    }

    // add monster's name to the monsterList
    //saveMonsterToList(monsterName);
}
