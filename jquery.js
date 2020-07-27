//Array of potential names
const dragFirstName = {
  a: ['Anastasia', 'Anaconda', 'Avery'],
  b: ['Bebe', 'Baby', 'Baby'],
  c: ['Coco', 'Chanel', 'Cloepatra'],
  d: ['Diva', 'Dainty'],
  e: ['Elegant', 'Emily'],
  f: ['Filthy', 'Fancy'],
  g: ['Gorgeous', 'Glam', 'Ginger'],
  h: ['Honey', 'Heidi'],
  i: ['Ivy', 'Iam', 'Iris', 'Ivana'],
  j: ['Joy', 'Jasmine'],
  k: ['Kinky', 'Kitty cat'],
  l: ['Lust', 'Lucy'],
  m: ['Mistress', 'Miss', 'Mrs'],
  n: ['Naomi', 'Naked'],
  o: ['Oh my god'],
  p: ['Pearl', 'Peachy', 'Poison'],
  q: ['Quiet', 'Queen'],
  r: ['Robin', 'Ruby'],
  s: ['Sexy', 'Savannah', 'Sassy'],
  t: ['Toxic', 'Tasty'],
  u: ['Uphoria', 'Umm'],
  v: ['Veronica', 'Victoria'],
  w: ['Witch', 'Wicked'],
  x: ['XTC', 'Xanax'],
  y: ['Yellow', 'Yennefer', 'Yoyo'],
  z: ['Zesty']
};

const dragLastName = {
  a: ['Alisha', 'Angel', ],
  b: ['Baddie', 'Bottom', 'Beverly'],
  c: ['Cat', 'Cream', 'Cookie'],
  d: ['Daisy', 'Dolly', 'Diamond'],
  f: ['Fantasy', 'Fish'],
  g: ['Gin', 'Genie'],
  h: ['Heather', 'Henny', 'Hoe'],
  i: ['Izzy', 'Ida'],
  j: ['Justice'],
  k: ['Kiki', 'Kisses'],
  l: ['Lavender'],
  m: ['Mini', 'Mama', 'Money'],
  n: ['Nancy', 'Noel'],
  o: ['Obsession', 'Orchid'],
  p: ['Protege', 'Pisces'],
  q: ['Quincy', 'Queer'],
  r: ['Royale', 'Revenge'],
  s: ['Sativa', 'Succubus'],
  t: ['Tea', 'Tanya'],
  u: ['Utopia', 'Ursa'],
  v: ['Versace', 'Violet'],
  w: ['Wallflower', 'Winter'],
  x: ['X'],
  y: ['Yearn', 'Yahoo'],
  z: ['Zero', 'Zen']
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

    //Get random name from the array
    const getRandomFirstName =
    resultsFirstName[Math.floor(Math.random() * resultsFirstName.length)]
    console.log(getRandomFirstName)

    const getRandomLastName =
    resultsLastName[Math.floor(Math.random() * resultsLastName.length)]
    console.log(getRandomLastName)

    //Print results on the page
    //Display as alert!!
    alert(`${getRandomFirstName} ${getRandomLastName}`);
  });
}

//initialize to kick off
dragApp.init = function() {
  console.log('we ready bruh!');
  dragApp.getNames();
}

// Doc ready
$(function (){
  dragApp.init();
})