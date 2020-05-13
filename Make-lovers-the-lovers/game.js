const prompt = require('prompt-sync')({sigint: true});
const emo = require('node-emoji')

// -------------- Player Characters ---------------------- //
const playerChar = emo.get('prince');
const princessChar = emo.get('princess');
const fieldChar = '░';
const holeChar = emo.get('hole')
const pathChar = '*'

// ----------------- Game class --------------------------- //
class Game {

	// actual map is the ready map which has all the roads, holes and princess
	//
	constructor(actualMap, visibleMap) {
		this._actualMap = actualMap;
		this._visibleMap = visibleMap;
	}

	print(field) {
		for(let row of field)
			console.log("   " +row.join(''));
	}

	static generateField(height, width, holes)
	{
		let newField = [];

		for(let i =0 ; i < height; i++) 
		{
			newField.push([]);
			for(let j= 0; j < width; j++)
			{
				newField[i].push(fieldChar);
			}
		}

		newField[0][0] = playerChar;

		let princessX = Math.floor(Math.random() * width);
		let princessY = Math.floor(Math.random() * height);

		newField[princessY][princessX] = princessChar;

		for(let t = holes ;t > 0 ; t --)
		{
			let holeX = princessX;
			let holeY = princessY;

			while (holeX === princessX && holeX !== 0) {
				holeX = Math.floor(Math.random() * width );
			}

			while (holeY === princessY && holeY !== 0) {
				holeY = Math.floor(Math.random() * height);
			}

			newField[holeY][holeX] = holeChar;

		}

		return newField;
	}

	static generateOuterField(height, width) {
		let newField = [];

		for(let i = 0; i < height; i++) {

			newField.push([])

			for(let j = 0 ; j < width; j ++)
			{
				newField[i].push(fieldChar);
			}
		}

		newField[0][0] = playerChar;

		return newField;
	}

	playGame() {
		let y = 0;
		let x = 0;
		this.print(this._visibleMap);
		this.print(this._actualMap);

		while (this._actualMap[y][x] === pathChar || this._actualMap[y][x] === fieldChar || this._actualMap[y][x] === playerChar)
		{
			const direction = prompt('Which direction would you like to move? Please ennter N for North, S for  South, E for East, or W for West. \n');

			if (direction.toUpperCase() === 'N') {
		      if (y === 0) {
		        console.log('You cannot move any further North. Please choose another direction')
		      } else {
		        this._visibleMap[y][x] = fieldChar;
		        y -=1
		      }
		    } 
		    if (direction.toUpperCase() === 'S') {
		        if (y === this._actualMap.length - 1) {
		          console.log('You cannot move any further South. Please choose another direction')
		        } else {
		          this._visibleMap[y][x] = fieldChar;
		          y +=1
		        }
		      } 
		    if (direction.toUpperCase() === 'W') {
		        if (x === 0) {
		          console.log('You cannot move any further West. Please choose another direction')
		        } else {
		          this._visibleMap[y][x] = fieldChar;
		          x -= 1
		        }
		      }
		    if (direction.toUpperCase() === 'E') {
		        if (x === this._visibleMap[y].length - 1) {
		          console.log('You cannot move any further East. Please choose another direction')
		        } else {
		          this._visibleMap[y][x] = fieldChar;
		          x += 1
		        }
		      }
		    else {
		        console.log('Invalid entry. Please enter N, S, E, or W')
		      }

		    if (this._actualMap[y][x] === princessChar)
		    {
		    	console.log("\n\n                   YOU WIN!!! You are with your princess!...Cursed are those who can't long for their love and so are you"+ princessChar + playerChar + "\n\n");
		    } else if (this._actualMap[y][x] === holeChar) {
		 		console.log("\n\n                   GAME OVER !!! You gotta get your girl in your next life!!!" + emo.get('shit')+playerChar+emo.get('shit') +"\n\n");   	
		    } else {
		    	this._visibleMap[y][x] = playerChar;
		    	this.print(this._visibleMap)
		    }

		}

	}

}

let gameField;
console.log("\nHello! What do you want the difficilty level to be : ")
const diff = prompt('\n' + "Enter N for Novice; F for Respect, M for Mercenary" +  '\n');

if(diff.toUpperCase() === 'N')
{
	const blankField = Game.generateOuterField(5,5);
	gameField = new Game (Game.generateField(5,5,1), blankField);
} else if (diff.toUpperCase() === 'F')
{
	const blankField = Game.generateOuterField(10,10)
	gameField = new Game (Game.generateField(10,10,3), blankField);
}  else if (diff.toUpperCase() === 'M')
{
	const blankField = Game.generateOuterField(20,20)
	gameField = new Game (Game.generateField(20,20,5), blankField);
} else {

	console.log("So, you choose something beyond my list....Fair enough...I give u the hardest level ever")
	const blankField = Game.generateOuterField(20,20);
	gameField = new Game (Game.generateField(20,20,5), blankField);
}

gameField.playGame();