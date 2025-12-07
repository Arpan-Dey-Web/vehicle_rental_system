import { Router } from "express";
import { userControllers } from "./user.controller";
import { tokenVerify } from "../../middlewares/tokenVerify";
import { isAdminOrCustomer } from "../../middlewares/isAdminOrCustomer";

const router = Router();

// Get All user Only Admin
router.get("/", tokenVerify("admin"), userControllers.getAllUser);

// Update User (Admin or Own)
router.put(
  "/:userId",
  tokenVerify(),
  isAdminOrCustomer(),
  userControllers.updateUser
);

// Delete User (Admin only)
router.delete("/:userId", tokenVerify("admin"), userControllers.deleteUser);

export const userRoutes = router;
