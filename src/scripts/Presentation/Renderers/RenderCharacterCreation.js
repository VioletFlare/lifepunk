import CharacterCreationFormTpl from '../../../templates/CharacterCreation/CharacterCreationForm.hbs';

class RenderCharacterCreation {
    render() {
        $("main").html(
            CharacterCreationFormTpl()
        );
    }
}

export default new RenderCharacterCreation();