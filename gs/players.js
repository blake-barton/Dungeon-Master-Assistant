function savePlayers(updatedPlayers)
{
    // pull down player json
    var objectArray = generateObjectArray('DMAssistantPlayers', 'playerList.json');

    // loop through object array to find old player jsons
    for (let i = 0; i < updatedPlayers.length; i++)
    {
        let player = updatedPlayers[i];

        for (let j = 0; j < objectArray.length; j++)
        {
            if (player.name === objectArray[j].name)
            {
                objectArray[j] = player;
            }
        }
    }

    // push objectArray back to file
    replaceJSON(objectArray, 'DMAssistantPlayers', 'playerList.json');
    return true;
}