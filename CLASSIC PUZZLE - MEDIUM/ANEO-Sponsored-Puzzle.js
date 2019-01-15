/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const maxSpeed = parseInt(readline());
const lightCount = parseInt(readline());
const Trafficlights=new Array();
for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' ');
    const distance = parseInt(inputs[0]);
    const duration = parseInt(inputs[1]);
    Trafficlights[i]={distance: distance, duration: duration};
}

// Write an action using print()
// To debug: printErr('Debug messages...');

for (let speed = maxSpeed; speed >= 0; speed--) {
  
  
    if (Trafficlights.every((light) => {
       
        const travelTime = light.distance / (speed / 3.6);
        const travelTimeRounded = parseFloat(Math.round(travelTime));
      
        const isRounded = travelTimeRounded - travelTime < 0.01;
        const totaltime = isRounded ? travelTimeRounded : travelTime;
      

        return Math.floor(totaltime / light.duration) % 2 === 0;
    }) ) {
        print(speed);
        break;
    }
}
