function appendEncounterJSON(newEncounterJSON)
{
    // access encounters.json
    var folderName = "DMAssistantEncounters";
    var filename = "encounterList.json";

    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        var folder = folderList.next();

        // pull encounters.json down as an array of objects
        var fileList = folder.getFilesByName(filename);
        while (fileList.hasNext())
        {
            // found matching file, loading json
            var file = fileList.next();
            var jsonText = file.getBlob().getDataAsString();
            
            // get as javascript object
            var encounterArray = JSON.parse(jsonText);

            // append new encounter
            encounterArray.push(newEncounterJSON);

            // stringify array
            jsonText = JSON.stringify(encounterArray);

            // save new content
            file.setContent(jsonText);
        }
    }
}