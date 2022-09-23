import CharacterCreationFormTpl from '../../../templates/CharacterCreation/CharacterCreationForm.hbs';

class CharacterCreationRenderer {
    render() {
        $("main").html(
            CharacterCreationFormTpl()
        );
    }
}

export default new CharacterCreationRenderer();