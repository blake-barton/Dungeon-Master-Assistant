function createMonsterJSON(filename, monsterJSON, monsterName)
{
    var folderName = "DMAssistant";

    // save monster json
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        folder = folderList.next();
        folder.createFile(filename, monsterJSON, 'application/json');
    }

    // add monster's name to the monsterList
    saveMonsterToList(monsterName);
}

// read monster from list and turn it into a json
function parseMonsterJSON(filename)
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

        while (fileList.hasNext())
        {
            // found matching file, loading json
            var file = fileList.next();
            var jsonFile = file.getBlob().getDataAsString();
            
            // get as javascript object
            var monsterFileObject = JSON.parse(jsonFile);
            Logger.log(jsonFile);
            
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
            content = '"' + monsterName + '"';
            var combinedContent = file.getBlob().getDataAsString() + content + " ";
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

// pull the names from monsterList.txt into an array which will be used to find monster jsons/sort bestiary
function loadNamesIntoArray()
{
    var filename = "monsterList.txt";
    var folderName = "DMAssistant";
    var content = "";

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
            // found matching file, load in text
            var file = fileList.next();
            content = file.getBlob().getDataAsString();
        }
    }

    // split content by spaces, ignoring spaces in quotes
    var nameArray = content.match(/(?:[^\s"]+|"[^"]*")+/g);

    for (var i = 0; i < nameArray.length; i++)
    {
        var cutString = nameArray[i].substring(1, nameArray[i].length - 1);
        nameArray[i] = cutString;
    }

    return nameArray;
}

// create an array of monster JSON objects from the nameArray to be sorted
function generateObjectArray(nameArray)
{
    var objectArray = [];
    var filename = "";
    var currentMonster = "";

    // loop through nameArray
    for (var i = 0; i < nameArray.length; i++)
    {
        // append .json to name
        filename = nameArray[i] + ".json";

        // pull monster object from file
        currentMonster = parseMonsterJSON(filename);

        objectArray.push(currentMonster);
    }

    return objectArray;
}

// take in a string from the sidebar select, reorder array
function sortBestiary(sortType)
{
    switch (sortType)
    {
        case "name":
            alert("name");
            break;
        case "hp":
            alert("hp");
            break;
        case "cr":
            alert("cr")
            break;
        case "date":
            alert("date")
            break;
    }
}