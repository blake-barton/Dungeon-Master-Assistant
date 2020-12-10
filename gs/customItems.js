// This file contains functions for sorting the item list

function sortByRarityLow(a, b)
{
    let co = 1;
    let un = 2;
    let ra = 3;
    let vr = 4;
    let le = 5;
    var RA = a.Descriptors.rarity;
    var RB = b.Descriptors.rarity;
    if (RA == "Common")
    {
        RA = co;
    }
    else if (RA == "Uncommon")
    {
        RA = un;
    }
    else if (RA == "Rare")
    {
        RA = ra;
    }
    else if (RA == "Very Rare")
    {
        RA = vr;
    }
    else if (RA == "Legendary")
    {
        RA = le;
    }

    if (RB == "Common")
    {
        RB = co;
    }
    else if (RB == "Uncommon")
    {
        RB = un;
    }
    else if (RB == "Rare")
    {
        RB = ra;
    }
    else if (RB == "Very Rare")
    {
        RB = vr;
    }
    else if (RB == "Legendary")
    {
        RB = le;
    }

    if (RA < RB)
    {
        return -1;
    }
    else if (RA > RB)
    {
        return 1;
    }
    else
    {
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
    if (RA == "Common")
    {
        RA = co;
    }
    else if (RA == "Uncommon")
    {
        RA = un;
    }
    else if (RA == "Rare")
    {
        RA = ra;
    }
    else if (RA == "Very Rare")
    {
        RA = vr;
    }
    else if (RA == "Legendary")
    {
        RA = le;
    }

    if (RB == "Common")
    {
        RB = co;
    }
    else if (RB == "Uncommon")
    {
        RB = un;
    }
    else if (RB == "Rare")
    {
        RB = ra;
    }
    else if (RB == "Very Rare")
    {
        RB = vr;
    }
    else if (RB == "Legendary")
    {
        RB = le;
    }

    if (RA < RB)
    {
        return -1;
    }
    else if (RA > RB)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

// take in a string from the sidebar select, reorder object array and return, called whenever sort dropdown is changed
function sortItems(sortType)
{
    // generate object array
    var objectArray = generateObjectArray('DMAssistantItems', 'itemList.json');

    if (objectArray.length === 0)
    {
        return [];
    }

    switch (sortType)
    {
        case "name":
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