const subject = ['Grandma', 'Uncle Sam', 'Obama', 'Little girl', 'Pinnoccio', 'Peter Pan', 'Spiderman', 'Dart Wader', 'Santa Claus', 'Postman', 'The driver'];

const predicate = ['eats', 'hacks', 'bites', 'bakes', 'paints', 'cuts', 'mashes', 'mixes', 'tinkers', 'teaches', 'builds', 'throws'];

const adj = ['purple', 'fat', 'fluffy', 'wavy', 'soft', 'dirty', 'rugged', 'useless', 'funny', 'crooked', 'learned', 'best', 'worst', 'crazy'];

const object = ['trees', 'lemons', 'meatballs', 'streets', 'schools', 'fish', 'water', 'phones', 'frogs', 'lightsabers', 'hedgehogs'];

const my_subject = subject[Math.floor(Math.random() * subject.length)];

const my_predicate = predicate[Math.floor(Math.random() * predicate.length)];

const my_adj = adj[Math.floor(Math.random() * adj.length)];

const my_object = object[Math.floor(Math.random() * object.length)];

console.log(`${my_subject} ${my_predicate} ${my_adj} ${my_object}.`);

