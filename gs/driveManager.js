// creating a new object
function appendJSON(newJSON, folderName, filename)
{
    // access json
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        var folder = folderList.next();

        // pull json down as an array of objects
        var fileList = folder.getFilesByName(filename);
        while (fileList.hasNext())
        {
            // found matching file, loading json
            var file = fileList.next();
            var jsonText = file.getBlob().getDataAsString();
            
            // get as javascript object
            var objectArray = JSON.parse(jsonText);

            // append new object
            objectArray.push(newJSON);

            // stringify array
            jsonText = JSON.stringify(objectArray);

            // save new content
            file.setContent(jsonText);
        }
    }
}

// pulling all objects to be displayed as a list
function generateObjectArray(folderName, filename)
{
    // access json
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        var folder = folderList.next();

        // pull json down as an array of objects
        var fileList = folder.getFilesByName(filename);
        while (fileList.hasNext())
        {
            // found matching file, loading json
            var file = fileList.next();
            var jsonText = file.getBlob().getDataAsString();
            
            // get as javascript object
            var objectArray = JSON.parse(jsonText);

            // sort the array
            objectArray.sort(sortByName);

            return objectArray;
        }
    }
}

// removing an object
function deleteObject(name, folderName, filename)
{
    // access json
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        var folder = folderList.next();

        // pull json down as an array of objects
        var fileList = folder.getFilesByName(filename);
        while (fileList.hasNext())
        {
            // found matching file, loading json
            var file = fileList.next();
            var jsonText = file.getBlob().getDataAsString();
            
            // get as javascript object
            var objectArray = JSON.parse(jsonText);

            // remove element with matching name
            for (var i = 0; i < objectArray.length; i++)
            {
                if (objectArray[i].name === name)
                {
                    // delete
                    objectArray.splice(i, 1);
                    break;
                }
            }

            // stringify array
            jsonText = JSON.stringify(objectArray);

            // save new content
            file.setContent(jsonText);
        }
    }
}