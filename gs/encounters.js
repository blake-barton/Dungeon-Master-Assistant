function generateTerrainArray(terrainType, objectArray)
{
    var terrainArray = [];

    for (var i = 0; i < objectArray.length; i++)
    {
        if (objectArray[i].terrain === terrainType || objectArray[i].terrain === "All Terrains")
        {
            terrainArray.push(objectArray[i]);
        }
    }

    return terrainArray;
}

function selectEncounterTerrain(terrainType)
{
    // generate object array
    var objectArray = generateObjectArray('DMAssistantEncounters', 'encounterList.json');
    var terrainArray = generateTerrainArray(terrainType, objectArray);

    if (terrainArray.length === 0)
    {
        return [];
    }

    return terrainArray;
}