// Iteration 1: Names and Input

const hacker1 = 'José';
const hacker2 = 'Vitor';

console.log (`The driver's name is ${hacker1}`);
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log ( `The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }

// Iteration 3: Loops

let result = '';
for(i = 0; i < hacker1.length; i++){
  hacker1[i];
  result+= hacker1[i].toUpperCase() + ' ';
  }
  console.log (result);

  let reverseName = '';
 for (i = hacker2.length -1; i>=0; i--){
   hacker2[i];
    reverseName += hacker2[i];
}
console.log (reverseName);


if (hacker1 < hacker2) {
    console.log (`The driver's name goes first.`);
  } else if (hacker1 < hacker2){
    console.log ('Yo, the navigator goes first definitely.');
  } else {
    console.log ('What?! You both have the same name?');
  }


  //Bonus 

  let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique dignissim diam, sit amet vulputate neque dapibus nec. Mauris tortor diam, pharetra sed eleifend non, facilisis ut nibh. Mauris nec nibh elementum, dapibus turpis nec, ultrices ante. Mauris volutpat elementum mollis. Suspendisse potenti. Sed placerat maximus risus, eu efficitur risus dapibus sed. Vivamus nec ligula sapien. Praesent elementum justo a nunc bibendum, a fermentum risus ultrices. Mauris feugiat maximus quam, quis semper nunc iaculis eget. Vivamus efficitur iaculis dictum.

  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In egestas est quis arcu venenatis vestibulum. Suspendisse vel erat at ante hendrerit ultrices id auctor nisi. Duis pretium tortor magna, at aliquet nisl euismod id. Nullam libero nulla, mollis ac dictum vitae, pretium vitae metus. Nam interdum elit vitae tempus pharetra. Donec lacus eros, fringilla feugiat aliquam id, tincidunt nec neque. Pellentesque eget interdum metus, hendrerit varius ligula. Pellentesque dolor velit, laoreet ullamcorper ipsum eget, luctus congue quam.
  
  Sed sagittis libero sed sagittis fringilla. Aliquam malesuada mi non tincidunt aliquam. Quisque mollis quis augue vitae fermentum. Nullam elementum facilisis mauris, vel venenatis augue convallis a. Fusce commodo pellentesque nulla, vitae malesuada neque maximus vitae. Quisque ultricies sodales nibh vel maximus. Donec eu blandit nibh. In elementum quam sit amet tincidunt malesuada.'