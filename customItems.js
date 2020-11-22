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
    saveItemToList(itemName);
}

// read item from list and turn it into a json
function parseItemJSON(filename)
{
    var folderName = "DMAssistantItems";

    // find folder "DMAssistantItems"
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
            var itemFileObject = JSON.parse(jsonFile);
            
            return itemFileObject;

        }
    }
}

// take in item name as a string and write it to the user's itemsList file
function saveItemToList(itemName)
{
    var filename = "itemsList.txt";
    var folderName = "DMAssistantItems";

    // find folder "DMAssistantItems"
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        // get matching folder
        var folder = folderList.next();

        // search for file "itemsList.txt"
        var fileList = folder.getFilesByName(filename);

        if (fileList.hasNext())
        {
            // found matching file, appending text
            var file = fileList.next();
            content = '"' + itemName + '"';
            var combinedContent = file.getBlob().getDataAsString() + content + " ";
            file.setContent(combinedContent);
        }
    }
}

/* CURRENTLY FOR DEBUG PURPOSES ONLY. DOES NOT REMOVE MONSTER JSON FILES */
function clearItemsList()
{
    var filename = "itemsList.txt";
    var folderName = "DMAssistantItems";

    // find folder "DMAssistantItems"
    var folderList = DriveApp.getFoldersByName(folderName);
    if (folderList.hasNext())
    {
        // get matching folder
        var folder = folderList.next();

        // search for file "itemsList.txt"
        var fileList = folder.getFilesByName(filename);

        if (fileList.hasNext())
        {
            // found matching file, erasing text
            var file = fileList.next();
            file.setContent("");
        }
    }
}

// pull the names from itemsList.txt into an array which will be used to find item jsons
function loadNamesIntoArrayItems()
{
    var filename = "itemsList.txt";
    var folderName = "DMAssistantItems";
    var content = "";

    // find folder "DMAssistant"
    var folderList = DriveApp.getFoldersByName(folderName);
    
    if (folderList.hasNext())
    {
        // get matching folder
        var folder = folderList.next();

        // search for file "itemList.txt"
        var fileList = folder.getFilesByName(filename);

        if (fileList.hasNext())
        {
            // found matching file, load in text
            var file = fileList.next();
            content = file.getBlob().getDataAsString();

            // return empty array if list is empty
            if (content === "")
            {
                return [];
            }
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

function generateObjectArrayItem(nameArray)
{
    var objectArray = [];
    var filename = "";
    var currentItem = "";

    // loop through nameArray
    for (var i = 0; i < nameArray.length; i++)
    {
        // append .json to name
        filename = nameArray[i] + ".json";

        // pull monster object from file
        currentItem = parseItemJSON(filename);

        objectArray.push(currentItem);
    }

    return objectArray;
}

function sortByRarityLow(a, b)
{
  let co = 1;
  let un = 2;
  let ra = 3;
  let vr = 4;
  let le = 5;
  var RA = a.Descriptors.rarity;
  var RB = b.Descriptors.rarity;
  if(RA == "Common") {
    RA = co;
  }
  else if(RA == "Uncommon") {
    RA = un;
  }
  else if(RA == "Rare") {
    RA = ra;
  }
  else if(RA == "Very Rare") {
    RA = vr;
  }
  else if(RA == "Legendary") {
    RA = le;
  }
  
  if(RB == "Common") {
    RB = co;
  }
  else if(RB == "Uncommon") {
    RB = un;
  }
  else if(RB == "Rare") {
    RB = ra;
  }
  else if(RB == "Very Rare") {
    RB = vr;
  }
  else if(RB == "Legendary") {
    RB = le;
  }
  
  if(RA < RB) {
    return -1;
  }
  else if(RA > RB) {
    return 1;
  }
  else {
    return 0;
  }
  
}

function sortByRarityHigh(a, b)
{
  let co = 5;
  let un = 4;
  let ra = 3;
  let vr = 2;
  let le = 1;
  var RA = a.Descriptors.rarity;
  var RB = b.Descriptors.rarity;
  if(RA == "Common") {
    RA = co;
  }
  else if(RA == "Uncommon") {
    RA = un;
  }
  else if(RA == "Rare") {
    RA = ra;
  }
  else if(RA == "Very Rare") {
    RA = vr;
  }
  else if(RA == "Legendary") {
    RA = le;
  }
  
  if(RB == "Common") {
    RB = co;
  }
  else if(RB == "Uncommon") {
    RB = un;
  }
  else if(RB == "Rare") {
    RB = ra;
  }
  else if(RB == "Very Rare") {
    RB = vr;
  }
  else if(RB == "Legendary") {
    RB = le;
  }

  if(RA < RB) {
    return -1;
  }
  else if(RA > RB) {
    return 1;
  }
  else {
    return 0;
  }
}

// take in a string from the sidebar select, reorder object array and return, called whenever sort dropdown is changed
function sortItems(sortType)
{
    // generate object array
    let nameArray = loadNamesIntoArrayItems();

    if (nameArray.length === 0)
    {
        return [];
    } 

    let objectArray = generateObjectArrayItem(nameArray);

    switch (sortType)
    {
        case "name":
            objectArray.sort(sortByName);
            break;
        case "rarity-low":
            objectArray.sort(sortByRarityLow);
            break;
        case "rarity-high":
            objectArray.sort(sortByRarityHigh);
            break;
        case "date":
            break;
    }

    return objectArray;
}

function deleteItem(name)
{
    // append .json to name
    let filename = name + ".json";

    // find json in DMAssistant
    var folderName = "DMAssistantItems";

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
            
            // delete file
            file.setTrashed(true);
        }
    }

    // open monsterList.txt
    filename = "itemsList.txt";

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
            
            // find name and replace with blank
            var content = file.getBlob().getDataAsString();
            var target = '"' + name + '"' + " ";
            var result = content.replace(target, "");

            // set content
            file.setContent(result);
        }
    }
}