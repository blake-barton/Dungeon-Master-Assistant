// This file contains functions used for sorting the monster list

function sortByName(a, b)
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

function sortByHPLow(a, b)
{
    var hpA = a.NumericStats.hp;
    var hpB = b.NumericStats.hp;

    return hpA - hpB;
}

function sortByHPHigh(a, b)
{
    var hpA = a.NumericStats.hp;
    var hpB = b.NumericStats.hp;

    return hpB - hpA;
}

function sortByCRLow(a, b)
{
    var crA = a.NumericStats.cr;
    var crB = b.NumericStats.cr;

    return crA - crB;
}

function sortByCRHigh(a, b)
{
    var crA = a.NumericStats.cr;
    var crB = b.NumericStats.cr;

    return crB - crA;
}


// take in a string from the sidebar select, reorder object array and return, called whenever sort dropdown is changed
function sortBestiary(sortType)
{
    // generate object array
    var objectArray = generateObjectArray('DMAssistantMonsters', 'monsterList.json');

    if (objectArray.length === 0)
    {
        return [];
    }

    switch (sortType)
    {
        case "name":
            break;
        case "hp-low":
            objectArray.sort(sortByHPLow);
            break;
        case "hp-high":
            objectArray.sort(sortByHPHigh);
            break;
        case "cr-low":
            objectArray.sort(sortByCRLow);
            break;
        case "cr-high":
            objectArray.sort(sortByCRHigh);
            break;
        case "date":
            break;
    }

    return objectArray;
}