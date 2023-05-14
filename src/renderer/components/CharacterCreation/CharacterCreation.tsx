import './CharacterCreation.scss';
import React, { Component } from "react";

class CharacterCreation extends Component {

    render() {
        return (
            <form action="">
                <p>
                    <label htmlFor="characterName">Nome :</label>
                    <input type="text" className="characterName" name="characterName" value=""></input>
                </p>
                <p>
                    <label htmlFor="characterSurname">Cognome :</label>
                    <input type="text" className="characterSurname" name="characterSurname" value=""></input>
                </p>
                <p>Sesso :
                    <select className="characterSex" name="characterSex" required>
                        <option disabled={true} selected={true}  value="">Seleziona un opzione</option>
                        <option value="Maschio">Maschio</option>
                        <option value="Femmina">Femmina</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="characterBirthday">Compleanno :</label>
                    <input type="date" className="characterBirthday" name="characterBirthday"></input>
                </p>
                <p>Segno zodiacale :
                    <select className="characterZodiacSign" name="characterZodiacSign">
                        <option disabled={true} selected={true}  value="">Seleziona un opzione</option>
                        <option value="Acquario">Acquario</option>
                        <option value="Pesci">Pesci</option>
                        <option value="Ariete">Ariete</option>
                        <option value="Toro">Toro</option>
                        <option value="Gemelli">Gemelli</option>
                        <option value="Cancro">Cancro</option>
                        <option value="Leone">Leone</option>
                        <option value="Vergine">Vergine</option>
                        <option value="Bilancia">Bilancia</option>
                        <option value="Scorpione">Scorpione</option>
                        <option value="Sagittario">Sagittario</option>
                        <option value="Capricorno">Capricorno</option>
                    </select>
                </p>
                <p>Affinità :
                    <select className="characterZodiacAffinity" name="characterZodiacAffinity">
                        <option disabled={true} selected={true}  value="">Seleziona un opzione (Facoltativo)</option>
                        <option value="Acquario">Acquario</option>
                        <option value="Pesci">Pesci</option>
                        <option value="Ariete">Ariete</option>
                        <option value="Toro">Toro</option>
                        <option value="Gemelli">Gemelli</option>
                        <option value="Cancro">Cancro</option>
                        <option value="Leone">Leone</option>
                        <option value="Vergine">Vergine</option>
                        <option value="Bilancia">Bilancia</option>
                        <option value="Scorpione">Scorpione</option>
                        <option value="Sagittario">Sagittario</option>
                        <option value="Capricorno">Capricorno</option>
                    </select>
                </p>
                <p>Orientamento :
                    <select className="characterOrientation" name="characterOrientation">
                        <option disabled={true} selected={true} value="">Seleziona un opzione</option>
                        <option value="Etero">Etero</option>
                        <option value="Asessuale">Asessuale</option>
                        <option value="Omosessuale">Omosessuale (Gay/Lesbica)</option>
                        <option value="Bisessuale">Bisessuale</option>
                        <option value="Pansessuale">Pansessuale</option>
                        <option value="Polisessuale">Polisessuale</option>
                    </select>
                </p>
                <p>Allineamento morale :
                    <select className="characterMoralAlignment" name="characterMoralAlignment">
                        <option disabled={true} selected={true} value="">Seleziona un opzione</option>
                        <option value="Legale Buono">Legale Buono</option>
                        <option value="Neutrale Buono">Neutrale Buono</option>
                        <option value="Caotico Buono">Caotico Buono</option>
                        <option value="Neutrale Legale">Neutrale Legale</option>
                        <option value="Neutrale Puro">Neutrale Puro</option>
                        <option value="Neutrale Caotico">Neutrale Caotico</option>
                        <option value="Legale Malvagio">Legale Malvagio</option>
                        <option value="Neutrale Malvagio">Neutrale Malvagio</option>
                        <option value="Caotico Malvagio">Caotico Malvagio</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="characterHeight">Altezza :</label>
                    <input type="text" className="characterHeight" name="characterHeight" value=""></input>
                </p>
                <p>
                    <label htmlFor="characterWeight">Peso :</label>
                    <input type="text" className="characterWeight" name="characterWeight" value=""></input>
                </p>
                <p>Tipologia di capelli :
                    <select className="characterHairType" name="characterHairType">
                        <option disabled={true} selected={true}  value="">Seleziona un opzione</option>
                        <option value="Lisci e sottili">Lisci e sottili</option>
                        <option value="Lisci e spessi">Lisci e spessi</option>
                        <option value="Ondulati">Ondulati</option>
                        <option value="Mossi e sottili">Mossi e sottili</option>
                        <option value="Mossi e spessi">Mossi e spessi</option>
                        <option value="Mossi e foltissimi">Mossi e foltissimi</option>
                        <option value="Riccio morbclasso dal diametro ampio">Riccio morbclasso dal diametro ampio</option>
                        <option value="Ricci a spirale">Ricci a spirale</option>
                        <option value="Ricci a cavatappi">Ricci a cavatappi</option>
                        <option value="Ricci piccolissimi">Ricci piccolissimi</option>
                        <option value="Ricci a Z">Ricci a Z</option>
                        <option value="Ricci afro">Ricci afro</option>
                    </select>
                </p>
                <p>Lunghezza dei capelli :
                    <select className="characterHairLength" name="characterHairLength">
                        <option disabled={true} selected={true}  value="">Seleziona un opzione</option>
                        <option value="Calvo/a">Calvo/a</option>
                        <option value="Rasati">Rasati</option>
                        <option value="Corti">Corti</option>
                        <option value="Medi">Medi</option>
                        <option value="Lunghi">Lunghi</option>
                        <option value="Lunghissimi">Lunghissimi</option>
                    </select>
                </p>
                <p>Colore dei capelli :
                    <select className="characterHairColour" name="characterHairColour1">
                        <option disabled={true} selected={true}  value="">Seleziona un opzione</option>
                        <option value="Nero">Nero</option>
                        <option value="Bruno">Bruno</option>
                        <option value="Castano scuro">Castano scuro</option>
                        <option value="Castano">Castano</option>
                        <option value="Castano chiaro">Castano chiaro</option>
                        <option value="Rosso scuro">Rosso scuro</option>
                        <option value="Rosso">Rosso</option>
                        <option value="Rosso chiaro">Rosso chiaro</option>
                        <option value="Biondo scuro">Biondo scuro</option>
                        <option value="Biondo">Biondo</option>
                        <option value="Biondo chiaro">Biondo chiaro</option>
                        <option value="Biondo chiarissimo">Biondo chiarissimo</option>
                        <option value="Platino">Platino</option>
                        <option value="Albino">Albino</option>
                    </select>
                </p>
                <p>Colore degli occhi :
                    <select className="characterEyeColour" name="characterEyeColour">
                        <option disabled={true} selected={true}  value="">Seleziona un opzione</option>
                        /* Percentuale Marroni : 70% */
                        <option value="Marroni">Marroni</option>
                        /* Percentuale Blu : 10% */
                        <option value="Blu">Blu</option>
                        /* Percentuale Nocciola : 5% */
                        <option value="Nocciola">Nocciola</option>
                        /* Percentuale Ambra : 5% */
                        <option value="Ambra">Ambra</option>
                        /* Percentuale Grigi : 3% */
                        <option value="Grigi">Grigi</option>
                        /* Percentuale Verdi : 2% */
                        <option value="Verdi">Verdi</option>
                        /* Percentuale Rossi : 1% */
                        <option value="Rossi">Rossi</option>
                    </select>
                </p>
                <p>Attributi :
                    /* Positivi :
                            Ambizione, allegria, compassione, coraggio, disponibilità, immaginazione, leadership, modestia, produttività, professionalità e sincerità */
                    <input type="checkbox" className="characterPositiveAttributes1" name="characterPositiveAttributes"
                        value="Ambizione"></input>
                    <label htmlFor="characterPositiveAttributes1">Ambizione</label>
                    <input type="checkbox" className="characterPositiveAttributes2" name="characterPositiveAttributes" value="Allegria"></input>
                    <label htmlFor="characterPositiveAttributes2">Allegria</label>
                    <input type="checkbox" className="characterPositiveAttributes3" name="characterPositiveAttributes"
                        value="Compassione"></input>
                    <label htmlFor="characterPositiveAttributes3">Compassione</label>
                    <input type="checkbox" className="characterPositiveAttributes4" name="characterPositiveAttributes" value="Coraggio"></input>
                    <label htmlFor="characterPositiveAttributes4">Coraggio</label>
                    <input type="checkbox" className="characterPositiveAttributes5" name="characterPositiveAttributes"
                        value="Disponibilità"></input>
                    <label htmlFor="characterPositiveAttributes5">Disponibilità</label>
                    <input type="checkbox" className="characterPositiveAttributes6" name="characterPositiveAttributes"
                        value="Immaginazione"></input>
                    <label htmlFor="characterPositiveAttributes6">Immaginazione</label>
                    <input type="checkbox" className="characterPositiveAttributes7" name="characterPositiveAttributes"
                        value="Leadership"></input>
                    <label htmlFor="characterPositiveAttributes7">Leadership</label>
                    <input type="checkbox" className="characterPositiveAttributes8" name="characterPositiveAttributes" value="Modestia"></input>
                    <label htmlFor="characterPositiveAttributes8">Modestia</label>
                    <input type="checkbox" className="characterPositiveAttributes9" name="characterPositiveAttributes"
                        value="Produttività"></input>
                    <label htmlFor="characterPositiveAttributes9">Produttività</label>
                    <input type="checkbox" className="characterPositiveAttributes10" name="characterPositiveAttributes"
                        value="Professionalità"></input>
                    <label htmlFor="characterPositiveAttributes10">Professionalità</label>
                    <input type="checkbox" className="characterPositiveAttributes11" name="characterPositiveAttributes"
                        value="Sincerità"></input>
                    <label htmlFor="characterPositiveAttributes11">Sincerità</label>
                    <input type="checkbox" className="characterPositiveAttributes12" name="characterPositiveAttributes" value="Carisma"></input>
                    <label htmlFor="characterPositiveAttributes12">Carisma</label>
                    /* Negativi :
                            Aggressività, arroganza, vigliaccheria, follia, intolleranza, cattiveria, pessimismo, maleducazione e vanità */
                    <input type="checkbox" className="characterNegativeAttributes1" name="characterNegativeAttributes"
                        value="Aggressività"></input>
                    <label htmlFor="characterNegativeAttributes1">Aggressività</label>
                    <input type="checkbox" className="characterNegativeAttributes2" name="characterNegativeAttributes"
                        value="Arroganza"></input>
                    <label htmlFor="characterNegativeAttributes2">Arroganza</label>
                    <input type="checkbox" className="characterNegativeAttributes3" name="characterNegativeAttributes"
                        value="Vigliaccheria"></input>
                    <label htmlFor="characterNegativeAttributes3">Vigliaccheria</label>
                    <input type="checkbox" className="characterNegativeAttributes4" name="characterNegativeAttributes" value="Follia"></input>
                    <label htmlFor="characterNegativeAttributes4">Follia</label>
                    <input type="checkbox" className="characterNegativeAttributes5" name="characterNegativeAttributes"
                        value="Intolleranza"></input>
                    <label htmlFor="characterNegativeAttributes5">Intolleranza</label>
                    <input type="checkbox" className="characterNegativeAttributes6" name="characterNegativeAttributes"
                        value="Cattiveria"></input>
                    <label htmlFor="characterNegativeAttributes6">Cattiveria</label>
                    <input type="checkbox" className="characterNegativeAttributes7" name="characterNegativeAttributes"
                        value="Pessimismo"></input>
                    <label htmlFor="characterNegativeAttributes7">Pessimismo</label>
                    <input type="checkbox" className="characterNegativeAttributes8" name="characterNegativeAttributes"
                        value="Maleducazione"></input>
                    <label htmlFor="characterNegativeAttributes8">Maleducazione</label>
                    <input type="checkbox" className="characterNegativeAttributes9" name="characterNegativeAttributes" value="Vanità"></input>
                    <label htmlFor="characterNegativeAttributes9">Vanità</label>
                    /* Fisici */
                    <input type="checkbox" className="characterPhysicalAttributes1" name="characterPhysicalAttributes" value="Forza"></input>
                    <label htmlFor="characterPhysicalAttributes1">Forza</label>
                    <input type="checkbox" className="characterPhysicalAttributes2" name="characterPhysicalAttributes"
                        value="Costituzione"></input>
                    <label htmlFor="characterPhysicalAttributes2">Costituzione</label>
                    <input type="checkbox" className="characterPhysicalAttributes3" name="characterPhysicalAttributes" value="Agilità"></input>
                    <label htmlFor="characterPhysicalAttributes3">Agilità</label>
                    /* Mentali */
                    <input type="checkbox" className="characterMentalAttributes1" name="characterMentalAttributes" value="Intelligenza"></input>
                    <label htmlFor="characterMentalAttributes1">Intelligenza</label>
                    <input type="checkbox" className="characterMentalAttributes2" name="characterMentalAttributes" value="Percezione"></input>
                    <label htmlFor="characterMentalAttributes2">Percezione</label>
                    /* Non associabili direttamente */
                    <input type="checkbox" className="characterUnrelatedAttributes1" name="characterUnrelatedAttributes"
                        value="Fortuna"></input>
                    <label htmlFor="characterUnrelatedAttributes1">Fortuna</label>
                </p>
                <p>
                    <span>Colori preferiti :</span>
                    <input type="checkbox" className="characterFavouriteColour1" name="characterFavouriteColour" value="Bianco"></input>
                    <label htmlFor="characterFavouriteColour1">Bianco</label>
                    <input type="checkbox" className="characterFavouriteColour2" name="characterFavouriteColour" value="Rosso"></input>
                    <label htmlFor="characterFavouriteColour2">Rosso</label>
                    <input type="checkbox" className="characterFavouriteColour3" name="characterFavouriteColour" value="Arancione"></input>
                    <label htmlFor="characterFavouriteColour">Arancione</label>
                    <input type="checkbox" className="characterFavouriteColour4" name="characterFavouriteColour" value="Giallo"></input>
                    <label htmlFor="characterFavouriteColour">Giallo</label>
                    <input type="checkbox" className="characterFavouriteColour5" name="characterFavouriteColour" value="Lime"></input>
                    <label htmlFor="characterFavouriteColour">Lime</label>
                    <input type="checkbox" className="characterFavouriteColour6" name="characterFavouriteColour" value="Verde"></input>
                    <label htmlFor="characterFavouriteColour">Verde</label>
                    <input type="checkbox" className="characterFavouriteColour7" name="characterFavouriteColour" value="Turchese"></input>
                    <label htmlFor="characterFavouriteColour">Turchese</label>
                    <input type="checkbox" className="characterFavouriteColour8" name="characterFavouriteColour" value="Ciano"></input>
                    <label htmlFor="characterFavouriteColour">Ciano</label>
                    <input type="checkbox" className="characterFavouriteColour9" name="characterFavouriteColour" value="Azzurro"></input>
                    <label htmlFor="characterFavouriteColour">Azzurro</label>
                    <input type="checkbox" className="characterFavouriteColour10" name="characterFavouriteColour" value="Blu"></input>
                    <label htmlFor="characterFavouriteColour">Blu</label>
                    <input type="checkbox" className="characterFavouriteColour11" name="characterFavouriteColour" value="Viola"></input>
                    <label htmlFor="characterFavouriteColour">Viola</label>
                    <input type="checkbox" className="characterFavouriteColour12" name="characterFavouriteColour" value="Magenta"></input>
                    <label htmlFor="characterFavouriteColour">Magenta</label>
                    <input type="checkbox" className="characterFavouriteColour13" name="characterFavouriteColour" value="Lampone"></input>
                    <label htmlFor="characterFavouriteColour">Lampone</label>
                    <input type="checkbox" className="characterFavouriteColour14" name="characterFavouriteColour" value="Nero"></input>
                    <label htmlFor="characterFavouriteColour">Nero</label>
                </p>
                <p>
                    <input type="submit" value="Submit"></input>
                </p>
            </form>
        );
    }
}

export default CharacterCreation;