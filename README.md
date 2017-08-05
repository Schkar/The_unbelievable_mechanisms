<!-- # The-unbelievable-mechanisms -->
<h1>The-unbelievable-mechanisms</h1>
<h2>Final project for Coder's lab course.</h2><br>
Simple "The incredible machines"-like game made entirely in HTML (Canvas) with JS and CSS (SASS) <br>

Whole application is written by me, including physics engine (no external libraries used!)

Project in moderate stage of development (v.0.9.5). 
<br>
<!-- <br>https://schkar.github.io/The_unbelievable_mechanisms/ -->

<br>There is only one playable "level" with basic functionalities. More to come:
<br>
<ul>
    <li>rotated objects</li><strong>DONE</strong>
    <li>collisions with rotated objects</li><strong>DONE</strong>
    <li>better gravity</li><strong>DONE</strong>
    <li>mass and force</li><strong>DONE</strong>
    <li>more object types</li>
</ul>
<h2>About the project</h2>
Game visuals are written in HTML with a slight touch of SASS. 
<br>
The whole magic of bouncing, gravity, drawing is done in JavaScript. 
<br>
JS is responsible, beside timer and button functions, for:
<ul>
    <li>drawing things on HTML Canvas element</li>
    <li>gravity of a moving object</li>
    <li>collision detection</li>
    <li>bouncing back</li>
</ul>

<h2>Physics engine </h2>
Physics engine was written by carefully reading and trying to apply many tutorials for physics in games development. 
<strong>There is no external physics library used.</strong>
<br> It was amazingly hard for a person without any physical or mathematical background, but, thanks to a couple of readings, I have finally got it working.

Whole development needed a lot of work and, many times, a change of way of thinking, a change of assumptions and, finally, a change of the way how a whole programm is behaving (commits like: "Gravity works!" followed by "Gravity doesn't work" aren't rare).

<!-- <h2>Credits</h2>

For everything that has been done here, I would like to thank countless authors (questioners and answerers, both) on stack overflow and on their own blog pages, who helped me grasp a concept of how physics works in games and pointed me to the direction of algorithms, that I, without technical background, never heard of (but now I did!)

I would like to thank my dad who spent countless hours helping me with complicated equation derivations.

I would like to thank colleagues and tutors from Coder's Lab Front End course, who helped me see what was wrong with code, that I thought was fine (that is mainly for you, Ada!) -->