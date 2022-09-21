import { createRouter } from 'routerjs';

const router = createRouter();

router.get("/", () => {
    console.log("Welcome");
});

router.get('/charactercreation', (req, context) => {
    console.log("text");
});

router.run();