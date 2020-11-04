//Top level function responsible for generating the loot from the "Roll individual loot" button
function individuallootgen(cr) {
    if(cr === "zero") {
      var loot = individual_0_4();
    }
    else if(cr === "five") {
      var loot = individual_5_10();
    }
    else if(cr === "eleven") {
      var loot = individual_11_16();
    }
    else if(cr === "seventeen") {
      var loot = individual_17();
    }
    
  //!!!!!This segment will print out loot to the doc itself; used for testing only!!!!
    //var body = DocumentApp.getActiveDocument().getBody();
    //var text = body.editAsText();
  //  var cursor = DocumentApp.getActiveDocument().getCursor();
  //  cursor.insertText(loot);
  //  cursor.insertText(" ");
    //text.insertText(pos, loot);
    return loot;
  }
  
  function insertloot(loot) {
    var cursor = DocumentApp.getActiveDocument().getCursor();
    cursor.insertText(loot);
    cursor.insertText(" ");
  }
  
  //individual loot table for challenge rating 0-4
  function individual_0_4() {
    var roll = Math.floor(Math.random() * 100) + 1;
    
    if((roll >= 1) && (roll <= 30)) {
      return "Coins: 17cp"; 
    }
    else if((roll >= 31) && (roll <= 60)) {
      return "Coins: 14sp"; 
    }
    else if((roll >= 61) && (roll <= 70)) {
      return "Coins: 10ep"; 
    }
    else if((roll >= 71) && (roll <= 95)) {
      return "Coins: 10gp"; 
    }
    else if((roll >= 96) && (roll <= 100)) {
      return "Coins: 3pp"; 
    }
  }
  
  //individual loot table for challenge rating 5-10
  function individual_5_10() {
    var roll = Math.floor(Math.random() * 100) + 1;
    
    if((roll >= 1) && (roll <= 30)) {
      return "Coins: 1400cp, 35ep"; 
    }
    else if((roll >= 31) && (roll <= 60)) {
      return "Coins: 210sp, 70gp"; 
    }
    else if((roll >= 61) && (roll <= 70)) {
      return "Coins: 105ep, 70gp"; 
    }
    else if((roll >= 71) && (roll <= 95)) {
      return "Coins: 140gp"; 
    }
    else if((roll >= 96) && (roll <= 100)) {
      return "Coins: 70gp, 10pp"; 
    }
  }
  
  //individual loot table for challenge rating 11-16
  function individual_11_16() {
    var roll = Math.floor(Math.random() * 100) + 1;
    
    if((roll >= 1) && (roll <= 20)) {
      return "Coins: 1400sp, 350gp"; 
    }
    else if((roll >= 21) && (roll <= 35)) {
      return "Coins: 350ep, 350gp"; 
    }
    else if((roll >= 36) && (roll <= 75)) {
      return "Coins: 700gp, 35pp"; 
    }
    else if((roll >= 76) && (roll <= 100)) {
      return "Coins: 700gp, 70pp"; 
    }
  }
  
  //individual loot table for challenge rating 17+
  function individual_17() {
    var roll = Math.floor(Math.random() * 100) + 1;
    
    if((roll >= 1) && (roll <= 15)) {
      return "Coins: 7000ep, 2800gp"; 
    }
    else if((roll >= 16) && (roll <= 55)) {
      return "Coins: 3500gp, 350pp"; 
    }
    else if((roll >= 55) && (roll <= 100)) {
      return "Coins: 3500gp, 700pp"; 
   }
  }
  
  
  
  function treasurehordegen(cr) {
  //  var body = DocumentApp.getActiveDocument().getBody();
  //  var text = body.editAsText();
  //  text.insertText(0, cr);
    var gemstone10gp = ["Azurite","Banded Agate","Blue Quartz","Eye Agate","Hematite","Lapis Lazuli","Malachite","Moss Agate","Obsidian","Rhodochrosite","Tiger Eye","Turquoise"];
    var gemstone50gp = ["Bloodstone","Carnelian","Chalcedony","Chrysoprase","Citrine","Jasper","Moonstone","Onyx","Quartz","Sardonyx","Star Rose Quartz","Zircon"];
    var gemstone500gp = ["Alexandrite","Aquamarine","Black Pearl","Blue Spinel","Peridot","Topaz"];
    var gemstone1000gp = ["Black Opal","Blue Sapphire","Emerald","Fire Opal","Opal","Star Ruby","Star Sapphire","Yellow Sapphire"];
    var gemstone5000gp = ["Black Sapphire","Diamond","Jacinth","Ruby"];
    var art25gp = ["Silver ewer", "Carved bone statuette", "Small gold bracelet", "Cloth-of-gold vestements", "Black velvet mask stitched with silver thread", "Copper chalice with silver filigree", "Pair of engraved bone dice", "Small mirror set in a painted wooden frame", "Embroidered silk hankerchief", "Gold locket with a painted portrait inside"];
    var art250gp = ["Gold ring set with bloodstones", "Carved ivory statuette", "Large gold bracelet", "Silver necklace with a gemstone pendant", "Bronze crown", "Silk robe with gold embroidery", "Large well-made tapestry", "Brass mug with jade inlay", "Box of turquoise animal figurines", "Gold bird cage with electrum figure"];
    var art750gp = ["Silver chalice set with moonstones", "Silver-plated steel longsword with jet set in hilt", "Carved harp of exotic wood with ivory inlay and zircon gems", "Small gold idol", "Gold dragon comb set with red garnets as eyes", "Bottle stopper cork embossed with gold leaf and set with amethysts", "Ceremonial electrum dagger with a black pearl in the pommel", "Silver and gold brooch", "Obsidian statuette with gold fittings and inlay", "Painted gold war mask"];
    var art2500gp = ["Fine gold chain set with fire opal", "Old masterpiece painting", "Embroidered silk and velvet mantle set with numerous moonstones", "Platinum bracelet set with a sapphire", "Embroidered glove set with jewel chips", "Jeweled anklet", "Gold music box", "Gold circlet set with four aquamarines", "Eye patch with a mock eye set in blue sapphire and moonstone", "A necklace string of small pink pearls"];
    var art7500gp = ["Jeweled gold crown", "Jeweled platinum ring", "Small gold statuette set with rubies", "Gold cup set with emeralds", "Gold jewelry box with platinum filigree", "Painted gold child's sarcophagus", "Jade game board with solid gold playing pieces", "Bejeweled ivory drinking horn with gold filigree"];
    
    if(cr === "zero") {
      var loot = horde_0_4(gemstone10gp, gemstone50gp, art25gp);
    }
    else if(cr === "five") {
      var loot = horde_5_10(gemstone50gp, gemstone500gp, art25gp, art250gp);
    }
    else if(cr === "eleven") {
      var loot = horde_11_16(gemstone500gp, gemstone1000gp, art250gp, art750gp);
    }
    else if(cr === "seventeen") {
      var loot = horde_17(gemstone1000gp, gemstone5000gp, art2500gp, art7500gp);
    }
    return loot;
  }
  
  //horde loot table for challenge rating 0-4
  function horde_0_4(gemstone10gp, gemstone50gp, art25gp) {
    var roll = Math.floor(Math.random() * 100) + 1;
    var coins = "Coins: 2100cp, 1050sp, 70gp\n";
    
    if((roll >= 1) && (roll <= 6)) {
       return coins;
    }
    else if((roll >= 7) && (roll <= 16)) {
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone10gp.length);
         gems += gemstone10gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
    else if((roll >= 17) && (roll <= 26)) {
      var rollart = 0;
      var art = "Art: ";
      for(var i = 0; i < 5; i++) {
         rollart = Math.floor(Math.random() * art25gp.length);
         art += art25gp[rollart];
         art += " ";
      }
      art += "\n";
      return coins + art; 
    }
    else if((roll >= 27) && (roll <= 36)) {
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone50gp.length);
         gems += gemstone50gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
    else if((roll >= 37) && (roll <= 44)) {//NEEDS 1D6 ROLLS ON MAGIC ITEM TABLE A
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone10gp.length);
         gems += gemstone10gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
    else if((roll >= 45) && (roll <= 52)) {//NEEDS 1D6 ROLLS ON MAGIC ITEM TABLE A
      var rollart = 0;
      var art = "Art: ";
      for(var i = 0; i < 5; i++) {
         rollart = Math.floor(Math.random() * art25gp.length);
         art += art25gp[rollart];
         art += " ";
      }
      art += "\n";
      return coins + art; 
    }
    else if((roll >= 53) && (roll <= 60)) {//NEEDS 1D6 ROLLS ON MAGIC ITEM TABLE A
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone50gp.length);
         gems += gemstone50gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
    else if((roll >= 61) && (roll <= 65)) {//NEEDS 1D4 ROLLS ON MAGIC ITEM TABLE B
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone10gp.length);
         gems += gemstone10gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
    else if((roll >= 66) && (roll <= 70)) {//NEEDS 1D4 ROLLS ON MAGIC ITEM TABLE B
      var rollart = 0;
      var art = "Art: ";
      for(var i = 0; i < 5; i++) {
         rollart = Math.floor(Math.random() * art25gp.length);
         art += art25gp[rollart];
         art += " ";
      }
      art += "\n";
      return coins + art; 
    }
    else if((roll >= 71) && (roll <= 75)) {//NEEDS 1D4 ROLLS ON MAGIC ITEM TABLE B
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone50gp.length);
         gems += gemstone50gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
    else if((roll >= 76) && (roll <= 78)) {//NEEDS 1D4 ROLLS ON MAGIC ITEM TABLE C
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone10gp.length);
         gems += gemstone10gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
    else if((roll >= 79) && (roll <= 80)) {//NEEDS 1D4 ROLLS ON MAGIC ITEM TABLE C
      var rollart = 0;
      var art = "Art: ";
      for(var i = 0; i < 5; i++) {
         rollart = Math.floor(Math.random() * art25gp.length);
         art += art25gp[rollart];
         art += " ";
      }
      art += "\n";
      return coins + art; 
    }
    else if((roll >= 81) && (roll <= 85)) {//NEEDS 1D4 ROLLS ON MAGIC ITEM TABLE C
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone50gp.length);
         gems += gemstone50gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
    else if((roll >= 86) && (roll <= 92)) {//NEEDS 1D4 ROLLS ON MAGIC ITEM TABLE F
      var rollart = 0;
      var art = "Art: ";
      for(var i = 0; i < 5; i++) {
         rollart = Math.floor(Math.random() * art25gp.length);
         art += art25gp[rollart];
         art += " ";
      }
      art += "\n";
      return coins + art; 
    }
    else if((roll >= 93) && (roll <= 97)) {//NEEDS 1D4 ROLLS ON MAGIC ITEM TABLE F
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone50gp.length);
         gems += gemstone50gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
    else if((roll >= 98) && (roll <= 99)) {//NEEDS 1 ROLL ON MAGIC ITEM TABLE G
      var rollart = 0;
      var art = "Art: ";
      for(var i = 0; i < 5; i++) {
         rollart = Math.floor(Math.random() * art25gp.length);
         art += art25gp[rollart];
         art += " ";
      }
      art += "\n";
      return coins + art; 
    }
    else if((roll >= 100) && (roll <= 100)) {//NEEDS 1 ROLL ON MAGIC ITEM TABLE G
      var rollgems = 0;
      var gems = "Gems: ";
      for(var i = 0; i < 7; i++) {
         rollgems = Math.floor(Math.random() * gemstone50gp.length);
         gems += gemstone50gp[rollgems];
         gems += " ";
      }
      gems += "\n";
      return coins + gems; 
    }
  }
  
  //horde loot table for challenge rating 5-10
  function horde_5_10(gemstone50gp, gemstone500gp, art25gp, art250gp) {
    var roll = Math.floor(Math.random() * 100) + 1;
    
    if((roll >= 1) && (roll <= 30)) {
      return "1400cp 35ep"; 
    }
    else if((roll >= 31) && (roll <= 60)) {
      return "210sp 70gp"; 
    }
    else if((roll >= 61) && (roll <= 70)) {
      return "105ep 70gp"; 
    }
    else if((roll >= 71) && (roll <= 95)) {
      return "140gp"; 
    }
    else if((roll >= 96) && (roll <= 100)) {
      return "70gp 10pp"; 
    }
  }
  
  //horde loot table for challenge rating 11-16
  function horde_11_16(gemstone500gp, gemstone1000gp, art250gp, art750gp) {
    var roll = Math.floor(Math.random() * 100) + 1;
    
    if((roll >= 1) && (roll <= 20)) {
      return "1400sp 350gp"; 
    }
    else if((roll >= 21) && (roll <= 35)) {
      return "350ep 350gp"; 
    }
    else if((roll >= 36) && (roll <= 75)) {
      return "700gp 35pp"; 
    }
    else if((roll >= 76) && (roll <= 100)) {
      return "700gp 70pp"; 
    }
  }
  
  //horde loot table for challenge rating 17+
  function horde_17(gemstone1000gp, gemstone5000gp, art2500gp, art7500gp) {
    var roll = Math.floor(Math.random() * 100) + 1;
    
    if((roll >= 1) && (roll <= 15)) {
      return "7000ep 2800gp"; 
    }
    else if((roll >= 16) && (roll <= 55)) {
      return "3500gp 350pp"; 
    }
    else if((roll >= 55) && (roll <= 100)) {
      return "3500gp 700pp"; 
   }
  }