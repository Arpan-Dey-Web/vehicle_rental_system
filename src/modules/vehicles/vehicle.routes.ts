import express from "express";
import { vehicleControllers } from "./vehicle.controller";
import { tokenVerify } from "../../middlewares/tokenVerify";

const router = express.Router();

// Get all Vehicles
router.get("/", vehicleControllers.getAllVehicles);

// Get Vehicle by Id
router.get("/:vehicleId", vehicleControllers.getVehicleById);

// Update Vehicle by Id
router.put(
  "/:vehicleId",
  tokenVerify("admin"),
  vehicleControllers.updateVehicle
);

// Admin-only route
router.post("/", tokenVerify("admin"), vehicleControllers.createVehicle);

// Delete Vehicle
router.delete(
  "/:vehicleId",
  tokenVerify("admin"),
  vehicleControllers.deleteVehicle
);

export const vehicleRoutes = router;
