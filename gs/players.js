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