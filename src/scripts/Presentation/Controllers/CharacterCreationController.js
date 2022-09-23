import RenderCharacterCreation from '../Renderers/RenderCharacterCreation';

class CharacterCreationController {
    registerRoutes (router) {
        router.get('/charactercreation', () => {
            RenderCharacterCreation.render();
        });
    }
}

export default new CharacterCreationController();