import { createRouter } from 'routerjs';
import MainMenuController from './Presentation/Controllers/MainMenuController';
import CharacterCreationController from './Presentation/Controllers/CharacterCreationController';

const router = createRouter();

MainMenuController.registerRoutes(router);
CharacterCreationController.registerRoutes(router);

router.run();