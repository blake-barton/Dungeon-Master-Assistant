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
//  var body = DocumentApp.getActiveDocument().getBody();
//  var text = body.editAsText();
//  text.insertText(0, loot);
  return loot;
}

//individual loot table for challenge rating 0-4
function individual_0_4() {
  var roll = Math.floor(Math.random() * 100) + 1;
  
  if((roll >= 1) && (roll <= 30)) {
    return "17cp"; 
  }
  else if((roll >= 31) && (roll <= 60)) {
    return "14sp"; 
  }
  else if((roll >= 61) && (roll <= 70)) {
    return "10ep"; 
  }
  else if((roll >= 71) && (roll <= 95)) {
    return "10gp"; 
  }
  else if((roll >= 96) && (roll <= 100)) {
    return "3pp"; 
  }
}

//individual loot table for challenge rating 5-10
function individual_5_10() {
  var roll = Math.floor(Math.random() * 100) + 1;
  
  if((roll >= 1) && (roll <= 30)) {
    return "1400cp, 35ep"; 
  }
  else if((roll >= 31) && (roll <= 60)) {
    return "210sp, 70gp"; 
  }
  else if((roll >= 61) && (roll <= 70)) {
    return "105ep, 70gp"; 
  }
  else if((roll >= 71) && (roll <= 95)) {
    return "140gp"; 
  }
  else if((roll >= 96) && (roll <= 100)) {
    return "70gp, 10pp"; 
  }
}

//individual loot table for challenge rating 11-16
function individual_11_16() {
  var roll = Math.floor(Math.random() * 100) + 1;
  
  if((roll >= 1) && (roll <= 20)) {
    return "1400sp, 350gp"; 
  }
  else if((roll >= 21) && (roll <= 35)) {
    return "350ep, 350gp"; 
  }
  else if((roll >= 36) && (roll <= 75)) {
    return "700gp, 35pp"; 
  }
  else if((roll >= 76) && (roll <= 100)) {
    return "700gp, 70pp"; 
  }
}

//individual loot table for challenge rating 17+
function individual_17() {
  var roll = Math.floor(Math.random() * 100) + 1;
  
  if((roll >= 1) && (roll <= 15)) {
    return "7000ep, 2800gp"; 
  }
  else if((roll >= 16) && (roll <= 55)) {
    return "3500gp, 350pp"; 
  }
  else if((roll >= 55) && (roll <= 100)) {
    return "3500gp, 700pp"; 
 }
}



function treasurehordegen(cr) {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  text.insertText(0, cr);
}