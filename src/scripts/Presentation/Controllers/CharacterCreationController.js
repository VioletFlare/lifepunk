import CharacterCreationRenderer from '../Renderers/CharacterCreationRenderer';

class CharacterCreationController {
    registerRoutes (router) {
        router.get('/charactercreation', () => {
            CharacterCreationRenderer.render();
        });
    }
}

export default new CharacterCreationController();