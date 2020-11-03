function createMonsterJSON(filename, monsterJSON)
{
    DriveApp.createFile(filename, monsterJSON);
}

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
    }
}