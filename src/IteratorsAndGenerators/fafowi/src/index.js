class TextLines {
  constructor(text) {
    this._text = text
  }

  *[Symbol.iterator]() {
    // YOUR CODE GOES HERE
  }
}

var lines = new TextLines(getText())

for (var line of lines) {
  console.log(line)
}

// OUTPUT
// "LE LIÈVRE ET LA TORTUE"
// "Rien ne sert de courir ; il faut partir à point."
// "Le Lièvre et la Tortue en sont un témoignage."
// "Gageons, dit celle-ci, que vous n'atteindrez point"
// "Si tôt que moi ce but. Si tôt ? Êtes-vous sage ?"
// ...

function getText() {
  return `LE LIÈVRE ET LA TORTUE
Rien ne sert de courir ; il faut partir à point.
Le Lièvre et la Tortue en sont un témoignage.
Gageons, dit celle-ci, que vous n'atteindrez point
Si tôt que moi ce but. Si tôt ? Êtes-vous sage ?
Repartit l'Animal léger.(2)
Ma Commère, il vous faut purger
Avec quatre grains (3) d'ellébore.
Sage ou non, je parie encore.
Ainsi fut fait : et de tous deux
On mit près du but les enjeux.
Savoir quoi, ce n'est pas l'affaire ;
Ni de quel juge l'on convint. `
}
