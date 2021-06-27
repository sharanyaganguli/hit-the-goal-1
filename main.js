
// Create canvas variable

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obg);
	}
	document.getElementById("hd3").innerHTML="you hit the goal!!!";
	document.getElementById("myCanvas").style.bordercolor="red";
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y>=30){
			ball_y= ball_y- block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when up arroy is pressed, x= " +ball_x+" ,y= "+ball_y);
			canvas.remove(ball_obg);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y <=450){
			 ball_y= ball_y+ block_image_height;
			 console.log("block image height = "+ block_image_height);
			 console.log("when Down arroy is pressed, x= " +ball_x+" ,y= "+ball_y);
			 canvas.remove(ball_obg);
			 new_image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x= ball_x - block_image_width;
			console.log("block image width = "+ block_image_height);
			console.log("when left arrow is pressed, x= "+ball_x+ " ,y= "+ball_y);
			canvas.remove(ball_obg);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x= ball_x+ block_image_width;
			console.log("block image width= "+ block_image_width);
			console.log("when right arow is pressed, x= "+ball_x+" ,y= "+ball_y);
			canvas.remove(ball_obg);
			new_image();
		}
	}
	
}

