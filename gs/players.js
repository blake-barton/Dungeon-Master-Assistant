function appendPlayerJSON(newPlayerJSON)
{
    // access players.json
    var folderName = "DMAssistantPlayers";
    var filename = "playerList.json";

    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        var folder = folderList.next();

        // pull players.json down as an array of objects
        var fileList = folder.getFilesByName(filename);
        while (fileList.hasNext())
        {
            // found matching file, loading json
            var file = fileList.next();
            var jsonText = file.getBlob().getDataAsString();
            
            // get as javascript object
            var playerArray = JSON.parse(jsonText);

            // append new player
            playerArray.push(newPlayerJSON);

            // stringify array
            jsonText = JSON.stringify(playerArray);

            // save new content
            file.setContent(jsonText);
        }
    }
}

function sortByPlayerName(a, b)
{
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if (nameA < nameB)
    {
        return -1;
    }
    else if (nameA > nameB)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function generatePlayerObjectArray()
{
    // access json
    var folderName = "DMAssistantPlayers";
    var filename = "playerList.json";

    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        var folder = folderList.next();

        // pull players.json down as an array of objects
        var fileList = folder.getFilesByName(filename);
        while (fileList.hasNext())
        {
            // found matching file, loading json
            var file = fileList.next();
            var jsonText = file.getBlob().getDataAsString();
            
            // get as javascript object
            var playerArray = JSON.parse(jsonText);

            // sort the array
            playerArray.sort(sortByPlayerName);

            return playerArray;
        }
    }
}

function deletePlayer(name)
{
    // access json
    var folderName = "DMAssistantPlayers";
    var filename = "playerList.json";

    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        var folder = folderList.next();

        // pull players.json down as an array of objects
        var fileList = folder.getFilesByName(filename);
        while (fileList.hasNext())
        {
            // found matching file, loading json
            var file = fileList.next();
            var jsonText = file.getBlob().getDataAsString();
            
            // get as javascript object
            var playerArray = JSON.parse(jsonText);

            // remove element with matching name
            for (var i = 0; i < playerArray.length; i++)
            {
                if (playerArray[i].name === name)
                {
                    // delete
                    playerArray.splice(i, 1);
                    break;
                }
            }

            // stringify array
            jsonText = JSON.stringify(playerArray);

            // save new content
            file.setContent(jsonText);
        }
    }
}