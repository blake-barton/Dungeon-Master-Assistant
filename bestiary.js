function createMonsterJSON(filename, monsterJSON, monsterName)
{
    var folderName = "DMAssistant";

    // save monster json
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        folder = folderList.next();
        folder.createFile(filename, monsterJSON);
    }

    // add monster's name to the monsterList
    saveMonsterToList(monsterName);
}

// read monster from list and turn it into a json
function parseMonsterJSONs(filename)
{
    var folderName = "DMAssistant";

    // find folder "DMAssistant"
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        // get matching folder
        var folder = folderList.next();

        // search for monster file
        var fileList = folder.getFilesByName(filename);

        if (fileList.hasNext())
        {
            // found matching file, loading json
            var file = fileList.next();
            var jsonFile = file.getAs('application/json');
            
            // get as javascript object
            var monsterFileObject = JSON.parse(jsonFile);

            Logger.log(jsonFile.getDataAsString());

            return monsterFileObject;
        }
    }
}

// take in monster name as a string and write it to the user's monsterList file
function saveMonsterToList(monsterName)
{
    var filename = "monsterList.txt";
    var folderName = "DMAssistant";

    // find folder "DMAssistant"
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        // get matching folder
        var folder = folderList.next();

        // search for file "monsterList.txt"
        var fileList = folder.getFilesByName(filename);

        if (fileList.hasNext())
        {
            // found matching file, appending text
            var file = fileList.next();
            var combinedContent = file.getBlob().getDataAsString() + monsterName + " ";
            file.setContent(combinedContent);
        }
    }
}

/* CURRENTLY FOR DEBUG PURPOSES ONLY. DOES NOT REMOVE MONSTER JSON FILES */
function clearMonsterList()
{
    var filename = "monsterList.txt";
    var folderName = "DMAssistant";

    // find folder "DMAssistant"
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        // get matching folder
        var folder = folderList.next();

        // search for file "monsterList.txt"
        var fileList = folder.getFilesByName(filename);

        if (fileList.hasNext())
        {
            // found matching file, erasing text
            var file = fileList.next();
            file.setContent("");
        }
    }
}