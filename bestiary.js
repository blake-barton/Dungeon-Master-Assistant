function createMonsterJSON(filename, monsterJSON, monsterName)
{
    //DriveApp.createFile(filename, monsterJSON);

    // save monster json
    var folderList = DriveApp.getFoldersByName("DMAssistant");
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
    var iter = DriveApp.getFilesByName(filename);

    while (iter.hasNext())
    {
        var file = iter.next();
        var jsonFile = file.getAs('application/json');
        
        // get as javascript object
        var monsterFileObject = JSON.parse(jsonFile);

        Logger.log(jsonFile.getDataAsString());

        return monsterFileObject;
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