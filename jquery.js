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
  o: ['orgasm', 'oh my god'],
  p: ['pussy', 'pissy'],
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

  $('form').on('submit', function(e) {
    event.preventDefault();

    const userFirstName = $('input[name=firstName]').val();
    const userLastName = $('input[name=lastName]').val();

    const firstLetterOfFirstName = userFirstName.charAt(0);
    const firstLetterOfLastName = userLastName.charAt(0);
  })
  
}

//for each

firstLetterOfFirstName.forEach(function(){
  const getFirstName = dragFirstName;
  const getLastName = dragLastName;
});

//for loop this shit
for (let i=0; i < dragFirstName.length; i=i+1){
  console.log(i);
}

//initialize to kick off
dragApp.init = function() {
  console.log('we ready bruh!');
  dragApp.getNames ();
}

// Doc ready
$(function (){
  dragApp.init();
})