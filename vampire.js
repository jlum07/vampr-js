class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal ? true : false);
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    function pathToRoot(v) {
      let path = [v];
      let currentVamp = v;
      while (currentVamp.creator != null) {
        path.unshift(currentVamp.creator);
        currentVamp = currentVamp.creator;
      }
      return path;
    }

    let thisPath = pathToRoot(this);
    let vampPath = pathToRoot(vampire);


    let prevVamp = thisPath[0];

    let shortPath = (thisPath.length <= vampPath.length ? thisPath.length : vampPath.length)

    for (let i = 0; i < shortPath; i++) {
      if (thisPath[i].name != vampPath[i].name) {
        return prevVamp;
      } else if (((i + 1 == thisPath.length) && thisPath[i].name == vampPath[i].name) || ((i + 1 == vampPath.length) && thisPath[i].name == vampPath[i].name)) {
        return thisPath[i];
      }

      prevVamp = thisPath[i];

    }

    return thisPath ? this : vampire;

  }
}

module.exports = Vampire;

