class Character {
    name: null;
    surname: null;
    sex: null;
    height: null;
    weight: null;
    hairType: null;
    hairLength: null;
    hairColour: null;
    eyeColour: null;
    birthday: null;
    moralAlignment: null;
    attributes: { ambition: null; cheerfulness: null; compassion: null; courage: null; availability: null; imagination: null; leadership: null; modesty: null; productivity: null; professionalism: null; sincerity: null; charisma: null; aggression: null; arrogance: null; cowardice: null; folly: null; intolerance: null; badness: null; pessimism: null; rudeness: null; vanity: null; strength: null; constitution: null; agility: null; intelligence: null; perception: null; luck: null; };
    zodiac: { sign: null; element: null; ascending: null; affinity: null; };
    passions: {};
    skills: {};
    preferences: { favouriteColour: null; orientation: null; };
    gifts: {};

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
            badness: null,
            pessimism: null,
            rudeness: null,
            vanity: null,
            strength: null,
            constitution: null,
            agility: null,
            intelligence: null,
            perception: null,
            luck: null
        };
        this.zodiac = {
            sign: null,
            element: null,
            ascending: null,
            affinity: null
        };
        this.passions = {};
        this.skills = {};
        this.preferences = {
            favouriteColour: null,
            orientation: null
        };
        this.gifts = {};
    }

// -------------------------------------------------- SET

    setName(name) {
        this.name = name;
    }

    setSurname(surname) {
        this.surname = surname;
    }

    setSex(sex) {
        this.sex = sex;
    }

    setHeight(height) {
        this.height = height;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    setHairType(hairType) {
        this.hairType = hairType;
    }

    setHairLength(hairLength) {
        this.hairLength = hairLength;
    }

    setHairColour(hairColour) {
        this.hairColour = hairColour;
    }

    setEyesColour(eyeColour) {
        this.eyeColour = eyeColour;
    }

    setBirthday(birthday) {
        this.birthday = birthday;
    }

    setMoralAlignment(moralAlignment) {
        this.moralAlignment = moralAlignment;
    }

    setAmbition(ambition) {
        this.attributes.ambition = ambition;
    }

    setCheerfulness(cheerfulness) {
        this.attributes.cheerfulness = cheerfulness;
    }

    setCompassion(compassion) {
        this.attributes.compassion = compassion;
    }

    setCourage(courage) {
        this.attributes.courage = courage;
    }

    setAvailability(availability) {
        this.attributes.availability = availability;
    }

    setImagination(imagination) {
        this.attributes.imagination = imagination;
    }

    setLeadership(leadership) {
        this.attributes.leadership = leadership;
    }

    setModesty(modesty) {
        this.attributes.modesty = modesty;
    }

    setProductivity(productivity) {
        this.attributes.productivity = productivity;
    }

    setProfessionalism(professionalism) {
        this.attributes.professionalism = professionalism;
    }

    setSincerity(sincerity) {
        this.attributes.sincerity = sincerity;
    }

    setCharisma(charisma) {
        this.attributes.charisma = charisma;
    }

    setAggression(aggression) {
        this.attributes.aggression = aggression;
    }

    setArrogance(arrogance) {
        this.attributes.arrogance = arrogance;
    }

    setCowardice(cowardice) {
        this.attributes.cowardice = cowardice;
    }

    setFolly(folly) {
        this.attributes.folly = folly;
    }

    setIntolerance(intolerance) {
        this.attributes.intolerance = intolerance;
    }

    setBadness(badness) {
        this.attributes.badness = badness;
    }

    setPessimism(pessimism) {
        this.attributes.pessimism = pessimism;
    }

    setRudeness(rudeness) {
        this.attributes.rudeness = rudeness;
    }

    setVanity(vanity) {
        this.attributes.vanity = vanity;
    }

    setStrength(strength) {
        this.attributes.strength = strength;
    }

    setConstitution(constitution) {
        this.attributes.constitution = constitution;
    }

    setAgility(agility) {
        this.attributes.agility = agility;
    }

    setIntelligence(intelligence) {
        this.attributes.intelligence = intelligence;
    }

    setPerception(perception) {
        this.attributes.perception = perception;
    }

    setLuck(luck) {
        this.attributes.luck = luck;
    }

    setZodiacSign(sign) {
        this.zodiac.sign = sign;
    }

    setElement(element) {
        this.zodiac.element = element;
    }

    setZodiacAscending(ascending) {
        this.zodiac.ascending = ascending;
    }

    setZodiacAffinity(affinity) {
        this.zodiac.affinity = affinity;
    }

    setPassions(passions) {
        this.passions = passions;
    }

    setSkills(skills) {
        this.skills = skills;
    }

    setFavouriteColour(favouriteColour) {
        this.preferences.favouriteColour = favouriteColour;
    }

    setOrientation(orientation) {
        this.preferences.orientation = orientation;
    }

    setGifts(gifts) {
        this.gifts = gifts;
    }

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
        return this.attributes.ambition
    }

    getCheerfulness() {
        return this.attributes.cheerfulness
    }

    getCompassion() {
        return this.attributes.compassion
    }

    getCourage() {
        return this.attributes.courage 
    }

    getAvailability() {
        return this.attributes.availability
    }

    getImagination() {
        return this.attributes.imagination
    }

    getLeadership() {
        return this.attributes.leadership
    }

    getModesty() {
        return this.attributes.modesty
    }

    getProductivity() 
        return this.attributes.productivity
    }

    getProfessionalism() {
        return this.attributes.professionalism
    }

    getSincerity() {
        return this.attributes.sincerity
    }

    getCharisma() {
        return this.attributes.charisma = charisma;
    }

    getAggression() {
        return this.attributes.aggression = aggression;
    }

    getArrogance() {
        return this.attributes.arrogance = arrogance;
    }

    getCowardice() {
        return this.attributes.cowardice = cowardice;
    }

    getFolly() {
        return this.attributes.folly = folly;
    }

    getIntolerance() {
        return this.attributes.intolerance 
    }

    getBadness() {
        return this.attributes.badness
    }

    getPessimism() {
        return this.attributes.pessimism
    }

    getRudeness() {
        return this.attributes.rudeness
    }

    getVanity() {
        return this.attributes.vanity
    }

    getStrength() {
        return this.attributes.strength
    }

    getConstitution() {
        return this.attributes.constitution
    }

    getAgility() {
        return this.attributes.agility
    }

    getIntelligence() {
        return this.attributes.intelligence

    getPerception() {
        return this.attributes.perceptionì
    }

    getLuck() {
        return this.attributes.luck = luck;
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

    getPassions() {
        return this.passions;
    }

    getSkills() {
        return this.skills;
    }

    getFavouriteColour() {
        return this.preferences.favouriteColour;
    }

    getOrientation() {
        return this.preferences.orientation;
    }

    getGifts() {
        return this.gifts;
    }
}

export default Character;