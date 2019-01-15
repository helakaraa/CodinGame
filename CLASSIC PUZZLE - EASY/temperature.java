import java.util.*;
import java.io.*;
import java.math.*;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int closedToZero=0;
        int n = in.nextInt(); // the number of temperatures to analyse
        int[] data = new int[n];
        
        for (int i = 0; i < n; i++) {
            int t = in.nextInt(); // a temperature expressed as an integer ranging from -273 to 5526
            data[i]=t;
            if ( Math.abs(data[i]) < Math.abs(data[closedToZero]) ) closedToZero = i;
            else if(Math.abs(data[i])==data[i]  && data[closedToZero] < 0){
                closedToZero = i;
            }
                
        }
         

        // Write an action using System.out.println()
        // To debug: System.err.println("Debug messages...");
        //arr=Arrays.sort(arr);
        if (data.length==0) System.out.println(0);
        else {System.out.println(data[closedToZero]);}
    
}
}
