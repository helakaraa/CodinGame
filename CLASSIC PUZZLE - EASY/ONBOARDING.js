/**
 * CodinGame planet is being attacked by slimy insectoid aliens.
 * <---
 * Hint:To protect the planet, you can implement the pseudo-code provided in the statement, below the player.
 **/


// game loop
while (true) {
    const enemy1 = readline(); // name of enemy 1
    const dist1 = parseInt(readline()); // distance to enemy 1
    const enemy2 = readline(); // name of enemy 2
    const dist2 = parseInt(readline()); // distance to enemy 2
    var name_en="";
    // Write an action using print()
    // To debug: printErr('Debug messages...');
    if (dist1<dist2){
       name_en=enemy1;
        }
     else{
        name_en=enemy2;
         
     }
    // You have to output a correct ship name to shoot ("Buzz", enemy1, enemy2, ...)
    print(name_en);
  
}
