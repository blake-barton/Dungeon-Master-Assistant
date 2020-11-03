function createMonsterJSON(filename, monsterJSON)
{
    DriveApp.createFile(filename, monsterJSON);
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
function saveMonsterList(monsterName)
{
    var fileName = "monsterList";
    var folderName = "DMAssistant";

    var folderList = DriveApp.getFoldersByName();
}