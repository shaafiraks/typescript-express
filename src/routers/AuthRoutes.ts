import BaseRoutes from "./BaseRouter";
import validate from "../middlewares/AuthValidator";

// Controllers
import AuthController from "../controllers/AuthControllers";

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/register", validate, AuthController.register);
    this.router.post("/login", AuthController.login);
  }
}

export default new AuthRoutes().router;
