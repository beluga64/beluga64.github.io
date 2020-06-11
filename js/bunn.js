
var BunnPupilSize = 20;
var BunnEyeSize = BunnPupilSize + 10;

fill(252, 198, 171);

ellipse(150, 70, 60, 120);  // left ear
ellipse(240, 70, 60, 120);  // right ear

ellipse(200, 170, 150, 150);    // face

fill (0, 255, 47);
ellipse(170,150,BunnEyeSize, BunnEyeSize); //pupils
ellipse(230,150,BunnEyeSize, BunnEyeSize);// outer eye

fill(0, 0, 0);
ellipse(170, 150, BunnPupilSize, BunnPupilSize);  // left eye
ellipse(230, 150, BunnPupilSize, BunnPupilSize);  // right eye

line(185, 200, 170, 190);
line(215,200,225,190);//mouth1

line(185, 200, 215, 200); //mouth2

fill(255, 138, 138);
triangle(200,180,190,170,200,170);
