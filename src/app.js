const moveforward = require('./moveforward');
const turn = require('./turn');

/**
 * This class represents a Rover.
 * @class Rover
 * @param {number} x
 * @param {number} y
 * @param {string} direction
 * @method move
 * @method getPosition
 * @example  
 * const rover = new Rover(3, 3, 'E')  
 * rover.move('MMRMMRMRRM');
 */
class Rover {
    constructor (x, y, direction) {
        this.x = x
        this.y = y
        this.direction = direction
    }
    
    /**
     * move - Move the rover according to the given instruction
     * @param {String} instruction 
     * @returns {void}
     * @example
     * rover.move('MMRMMRMRRM');
     */
    move(instruction) {
      for (let i = 0; i < instruction.length; i++) {
        if (instruction[i] === 'M') {
          /**
           * @typedef {Object} moveForward
           * @property {number} x - The x coordinate
           * @property {number} y - The y coordinate
           * @property {string} direction - The direction
           * 
           */
          const moveForward = moveforward(this.direction, this.x, this.y);
          this.x = moveForward.x;
          this.y = moveForward.y;
          this.direction = moveForward.direction;
        } else {
            /**
             * @typedef {Object} turn
             * @property {string} instruction - The instruction
             * @property {string} direction - The direction
             * 
             */
            this.direction = turn(instruction[i],this.direction);
        }
      }
    }
  
    /**
     * getPosition - Get the current position of the rover
     * @returns {String} position
     * @example
     * rover.getPosition(); // => 5 1 E
     */
    getPosition() {
      return `${this.x} ${this.y} ${this.direction}`;
    }
  }
  
  /**
   * @module Rover
   * @example
   * const rover = new Rover(3, 3, 'E')
   * rover.move('MMRMMRMRRM');
   * console.log(rover.getPosition()); // => 5 1 E
   */
  const rover = new Rover(3, 3, 'E')  // you can change the initial position and direction of the rover here
  rover.move('MMRMMRMRRM'); // you can pass different move instructions herel M = Move Forward, R = Turn Right, L = Turn Left
  console.log(rover.getPosition()); // result will be printed in the console
