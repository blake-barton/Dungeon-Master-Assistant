function runMagicTables(table, count, dieValue)
{
    var rollNum = diceRoller(count, dieValue);

    //define all magic item table arrays here
    var magicA = ["Potion of Healing"];
    var magicB = [];
    var magicC = [];
    var magicD = [];
    var magicE = [];
    var magicF = [];
    var magicG = [];
    var magicH = [];
    var magicI = [];

    if (table == "a")
    {
        return tableA(magicA, rollNum);
    }
    else if (table == "b")
    {
        return tableB(magicB, rollNum);
    }
    else if (table == "c")
    {
        return tableC(magicC, rollNum);
    }
    else if (table == "d")
    {
        return tableD(magicD, rollNum);
    }
    else if (table == "e")
    {
        return tableE(magicE, rollNum);
    }
    else if (table == "f")
    {
        return tableF(magicF, rollNum);
    }
    else if (table == "g")
    {
        return tableG(magicG, rollNum);
    }
    else if (table == "h")
    {
        return tableH(magicH, rollNum);
    }
    else if (table == "i")
    {
        return tableI(magicI, rollNum);
    }

}

//Start all functions for each table; each function should return a string with magic item/items
function tableA(magicA, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicA[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableB(magicB, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicB[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableC(magicC, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicC[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableD(magicD, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicD[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableE(magicE, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicE[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableF(magicF, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicF[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableG(magicG, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicG[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableH(magicH, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicH[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
function tableI(magicI, rollNum)
{
    var magicItems = "";
    var rollIndex = 0;
    for (var i = 0; i < rollNum; i++)
    {
        rollIndex = diceRoller(1, 100) - 1;
        magicItems += "-";
        magicItems += magicI[rollIndex];
        magicItems += "\n";
    }
    return magicItems;
}
