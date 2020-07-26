//Array of potential names
const dragFirstName = {
  a: ['apple', 'abba'],
  b: ['bob', 'baby'],
  c: ['coco', 'candy'],
  d: ['diva', 'dasty'],
  e: ['easy'],
  f: ['feather'],
  g: ['gorgeous'],
  h: ['hot', 'homo'],
  i: ['icon'],
  j: ['jade'],
  k: ['kinky', 'kitty cat'],
  l: ['lust', 'lovely'],
  m: ['muah', 'moan'],
  n: ['nude', 'naked'],
  o: ['oh my god'],
  p: ['pussy cat', 'pissy'],
  q: ['quiet', 'queer'],
  r: ['raw', 'rawr'],
  s: ['sexy', 'sex doll'],
  t: ['tanya', 'tasty'],
  u: ['uphoria', 'ugly'],
  v: ['vintage', 'valkorant'],
  w: ['witch', 'wicked'],
  x: ['xtc', 'xanax'],
  y: ['youthful'],
  z: ['zesty']
};

const dragLastName = {
  a: ['aa'],
  b: ['baddie', 'booty', 'bonbon'],
  c: ['cat', 'catfish'],
  d: ['daisy'],
  f: ['fantasy', 'fish'],
  g: ['gurl'],
  h: ['honey', 'henny', 'hoe'],
  i: ['izzy'],
  j: ['judy'],
  k: ['kiki'],
  l: ['lesbian'],
  m: ['mini', 'mommy'],
  n: ['nancy', 'ninja'],
  o: ['obsese', 'obedient'],
  p: ['protege'],
  q: ['queen', 'quantum'],
  r: ['royale', 'regal'],
  s: ['samurai', 'sac'],
  t: ['tea', 'teacup'],
  u: ['udon', 'utopia'],
  v: ['vagina', 'vengeance'],
  w: ['whore', 'wombat'],
  x: ['x'],
  y: ['ywans'],
  z: ['zero', 'zig zag']
};

//Create namespace
const dragApp = {};

dragApp.getNames = function() {
  console.log('get names running')

  $('form').on('submit', function(event) {
    event.preventDefault();

    const userFirstName = $('input[name=firstName]').val();
    const userLastName = $('input[name=lastName]').val();

    const firstLetterOfFirstName = userFirstName.charAt(0);
    const firstLetterOfLastName = userLastName.charAt(0);
    
    //No need for a for loop. Since dragFirstName is an object
    console.log(firstLetterOfFirstName, 'first letter first name')
    //convert the letters to lower case first
    const keyFN = firstLetterOfFirstName.toLowerCase()
    const resultsFirstName = dragFirstName[keyFN];
    console.log(resultsFirstName);
    
    console.log(firstLetterOfLastName, 'first letter last name')
    const keyLN = firstLetterOfLastName.toLowerCase()
    const resultsLastName = dragLastName[keyLN];
    console.log(resultsLastName)
    //try to make this a lookup method in dragApp, since we're repeating
    return resultsFirstName;
  })
}

//Get random name from the array

const getRandomFirstName =
  resultsFirstName[Math.floor(Math.random() * resultsFirstName.length)]
console.log(getRandomFirstName)

const getRandomLastName = () => `${resultsLastName[Math.floor(Math.random() * resultsLastName.length)]}`

//Print results on the page
// dragApp.showResults = () => {
  
// }


//initialize to kick off
dragApp.init = function() {
  console.log('we ready bruh!');
  dragApp.getNames();
}

// Doc ready
$(function (){
  dragApp.init();
})