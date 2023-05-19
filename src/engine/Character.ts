class Character {
  name: null | string;

  surname: null | string;

  sex: null | string;

  height: null | number;

  weight: null | number;

  hairType: null | string;

  hairLength: null | string;

  hairColour: null | string;

  eyeColour: null | string;

  birthday: null | number;

  moralAlignment: null | string;

  attributes: {
    ambition: null | number;
    cheerfulness: null | number;
    compassion: null | number;
    courage: null | number;
    availability: null | number;
    imagination: null | number;
    leadership: null | number;
    modesty: null | number;
    productivity: null | number;
    professionalism: null | number;
    sincerity: null | number;
    charisma: null | number;
    aggression: null | number;
    arrogance: null | number;
    cowardice: null | number;
    folly: null | number;
    intolerance: null | number;
    pessimism: null | number;
    rudeness: null | number;
    vanity: null | number;
    strength: null | number;
    constitution: null | number;
    agility: null | number;
    intelligence: null | number;
    perception: null | number;
    luck: null | number;
  };

  zodiac: {
    sign: null | string;
    element: null | string;
    ascending: null | string;
    affinity: null | string;
  };

  // passions: {};

  // skills: {};

  preferences: {
    favouriteColour: null | string;
    orientation: null | string;
  };

  // gifts: {};

  constructor() {
    this.name = null;
    this.surname = null;
    this.sex = null;
    this.height = null;
    this.weight = null;
    this.hairType = null;
    this.hairLength = null;
    this.hairColour = null;
    this.eyeColour = null;
    this.birthday = null;
    this.moralAlignment = null;
    this.attributes = {
      ambition: null,
      cheerfulness: null,
      compassion: null,
      courage: null,
      availability: null,
      imagination: null,
      leadership: null,
      modesty: null,
      productivity: null,
      professionalism: null,
      sincerity: null,
      charisma: null,
      aggression: null,
      arrogance: null,
      cowardice: null,
      folly: null,
      intolerance: null,
      pessimism: null,
      rudeness: null,
      vanity: null,
      strength: null,
      constitution: null,
      agility: null,
      intelligence: null,
      perception: null,
      luck: null,
    };
    this.zodiac = {
      sign: null,
      element: null,
      ascending: null,
      affinity: null,
    };
    // this.passions = {};
    // this.skills = {};
    this.preferences = {
      favouriteColour: null,
      orientation: null,
    };
    // this.gifts = {};
  }

  // -------------------------------------------------- SET

  setName(name: string) {
    this.name = name;
  }

  setSurname(surname: string) {
    this.surname = surname;
  }

  setSex(sex: string) {
    this.sex = sex;
  }

  setHeight(height: number) {
    this.height = height;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

  setHairType(hairType: string) {
    this.hairType = hairType;
  }

  setHairLength(hairLength: string) {
    this.hairLength = hairLength;
  }

  setHairColour(hairColour: string) {
    this.hairColour = hairColour;
  }

  setEyesColour(eyeColour: string) {
    this.eyeColour = eyeColour;
  }

  setBirthday(birthday: number) {
    this.birthday = birthday;
  }

  setMoralAlignment(moralAlignment: string) {
    this.moralAlignment = moralAlignment;
  }

  setAmbition(ambition: number) {
    this.attributes.ambition = ambition;
  }

  setCheerfulness(cheerfulness: number) {
    this.attributes.cheerfulness = cheerfulness;
  }

  setCompassion(compassion: number) {
    this.attributes.compassion = compassion;
  }

  setCourage(courage: number) {
    this.attributes.courage = courage;
  }

  setAvailability(availability: number) {
    this.attributes.availability = availability;
  }

  setImagination(imagination: number) {
    this.attributes.imagination = imagination;
  }

  setLeadership(leadership: number) {
    this.attributes.leadership = leadership;
  }

  setModesty(modesty: number) {
    this.attributes.modesty = modesty;
  }

  setProductivity(productivity: number) {
    this.attributes.productivity = productivity;
  }

  setProfessionalism(professionalism: number) {
    this.attributes.professionalism = professionalism;
  }

  setSincerity(sincerity: number) {
    this.attributes.sincerity = sincerity;
  }

  setCharisma(charisma: number) {
    this.attributes.charisma = charisma;
  }

  setAggression(aggression: number) {
    this.attributes.aggression = aggression;
  }

  setArrogance(arrogance: number) {
    this.attributes.arrogance = arrogance;
  }

  setCowardice(cowardice: number) {
    this.attributes.cowardice = cowardice;
  }

  setFolly(folly: number) {
    this.attributes.folly = folly;
  }

  setIntolerance(intolerance: number) {
    this.attributes.intolerance = intolerance;
  }

  setPessimism(pessimism: number) {
    this.attributes.pessimism = pessimism;
  }

  setRudeness(rudeness: number) {
    this.attributes.rudeness = rudeness;
  }

  setVanity(vanity: number) {
    this.attributes.vanity = vanity;
  }

  setStrength(strength: number) {
    this.attributes.strength = strength;
  }

  setConstitution(constitution: number) {
    this.attributes.constitution = constitution;
  }

  setAgility(agility: number) {
    this.attributes.agility = agility;
  }

  setIntelligence(intelligence: number) {
    this.attributes.intelligence = intelligence;
  }

  setPerception(perception: number) {
    this.attributes.perception = perception;
  }

  setLuck(luck: number) {
    this.attributes.luck = luck;
  }

  setZodiacSign(sign: string) {
    this.zodiac.sign = sign;
  }

  setElement(element: string) {
    this.zodiac.element = element;
  }

  setZodiacAscending(ascending: string) {
    this.zodiac.ascending = ascending;
  }

  setZodiacAffinity(affinity: string) {
    this.zodiac.affinity = affinity;
  }

  /*
    setPassions(passions) {
        this.passions = passions;
    }

    setSkills(skills) {
        this.skills = skills;
    }
*/
  setFavouriteColour(favouriteColour: string) {
    this.preferences.favouriteColour = favouriteColour;
  }

  setOrientation(orientation: string) {
    this.preferences.orientation = orientation;
  }

  /*
    setGifts(gifts) {
        this.gifts = gifts;
    }
*/

  // -------------------------------------------------- GET

  getName() {
    return this.name;
  }

  getSurname() {
    return this.surname;
  }

  getSex() {
    return this.sex;
  }

  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }

  getHairType() {
    return this.hairType;
  }

  getHairLength() {
    return this.hairLength;
  }

  getHairColour() {
    return this.hairColour;
  }

  getEyesColour() {
    return this.eyeColour;
  }

  getBirthday() {
    return this.birthday;
  }

  getMoralAlignment() {
    return this.moralAlignment;
  }

  getAmbition() {
    return this.attributes.ambition;
  }

  getCheerfulness() {
    return this.attributes.cheerfulness;
  }

  getCompassion() {
    return this.attributes.compassion;
  }

  getCourage() {
    return this.attributes.courage;
  }

  getAvailability() {
    return this.attributes.availability;
  }

  getImagination() {
    return this.attributes.imagination;
  }

  getLeadership() {
    return this.attributes.leadership;
  }

  getModesty() {
    return this.attributes.modesty;
  }

  getProductivity() {
    return this.attributes.productivity;
  }

  getProfessionalism() {
    return this.attributes.professionalism;
  }

  getSincerity() {
    return this.attributes.sincerity;
  }

  getCharisma() {
    return this.attributes.charisma;
  }

  getAggression() {
    return this.attributes.aggression;
  }

  getArrogance() {
    return this.attributes.arrogance;
  }

  getCowardice() {
    return this.attributes.cowardice;
  }

  getFolly() {
    return this.attributes.folly;
  }

  getIntolerance() {
    return this.attributes.intolerance;
  }

  getPessimism() {
    return this.attributes.pessimism;
  }

  getRudeness() {
    return this.attributes.rudeness;
  }

  getVanity() {
    return this.attributes.vanity;
  }

  getStrength() {
    return this.attributes.strength;
  }

  getConstitution() {
    return this.attributes.constitution;
  }

  getAgility() {
    return this.attributes.agility;
  }

  getIntelligence() {
    return this.attributes.intelligence;
  }

  getPerception() {
    return this.attributes.perception;
  }

  getLuck() {
    return this.attributes.luck;
  }

  getZodiacSign() {
    return this.zodiac.sign;
  }

  getZodiacElement() {
    return this.zodiac.element;
  }

  getZodiacAscending() {
    return this.zodiac.ascending;
  }

  getZodiacAffinity() {
    return this.zodiac.affinity;
  }

  /*
  getPassions() {
    return this.passions;
  }

  getSkills() {
    return this.skills;
  }
*/

  getFavouriteColour() {
    return this.preferences.favouriteColour;
  }

  getOrientation() {
    return this.preferences.orientation;
  }

  /*
  getGifts() {
    return this.gifts;
  }
*/
}

export default Character;
