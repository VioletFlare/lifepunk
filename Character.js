class Character {

    constructor() {
        this.name = null;
        this.surname = null;
        this.sex = null;
        this.height = null;
        this.weight = null;
        this.hairType = null;
        this.hairColour = null;
        this.eyeColour = null;
        this.birthday = null;
        this.moralAlignment = null;
        this.attributes = {
            strength: null,
            constitution: null,
            agility: null,
            intelligence: null,
            perception: null,
            charisma: null,
            luck: null
        };
        this.zodiac = {
            sign: null,
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

    setCharisma(charisma) {
        this.attributes.charisma = charisma;
    }

    setLuck(luck) {
        this.attributes.luck = luck;
    }

    setZodiacSign(sign) {
        this.zodiac.sign = sign;
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

    getCharisma() {
        return this.attributes.charisma;
    }

    getLuck() {
        return this.attributes.luck;
    }

    getZodiacSign() {
        return this.zodiac.sign;
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