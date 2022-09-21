import { createRouter } from 'routerjs';
import CharacterCreationTpl from '../templates/CharacterCreation.hbs';

const router = createRouter();

router.get("/", () => {
    console.log("Welcome");
});

router.get('/charactercreation', (req, context) => {
    document.body.innerHTML = CharacterCreationTpl({ title: "Character Creation"});
});

router.run();