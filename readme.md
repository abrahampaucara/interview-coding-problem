﻿<a name="br1"></a> 

**Interview Coding Problem**

**INSTRUCTIONS:**

The goal of this exercise is to get an idea of your coding as well as your software

design skills. Your code should be clear and easily readable.

**SOLUTION EXPECTED:**

Submit the solution to a GitHub or bitbucket repository.

**PROBLEM: MARS ROVERS**

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau,

which is curiously rectangular, must be navigated by the rovers so that their on-board

cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position and location are represented by a combination of x and y coordinates

and a letter representing one of the four cardinal compass points. The plateau is divided

up into a grid to simplify navigation. An example position might be 0, 0, N, which

means the rover is in the bottom left corner and facing North.

To control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R'

and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without

moving from its current spot. 'M' means move forward one grid point and maintain the

same heading.

Assume that the square directly North from (x, y) is (x, y+1).

**INPUT:**

The first line of input is the upper-right coordinates of the plateau, the lower-left

coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed.

Each rover has two lines of input. The first line gives the rover's position, and the

second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces,

corresponding to the x and y coordinates and the rover's orientation.



<a name="br2"></a> 

Each rover will be finished sequentially, which means that the second rover won't start

to move until the first one has finished moving.

**OUTPUT**

The output for each rover should be its final coordinates and heading.

**INPUT AND OUTPUT**

Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Expected Output:

1 3 N

5 1 E

\==========

**FOR RUN**

npm install

npm start

npm test

npm run docs

\==========

En app.js, se puede cambiar los valores de posicion inicial y el moviento que realizara.

const rover = new Rover(3, 3, 'E')

rover.move('MMRMMRMRRM');
