class MainMenuController {
    registerRoutes(router) {
        router.get("/", () => {
            console.log("Welcome");
        });
    }
}

export default new MainMenuController();