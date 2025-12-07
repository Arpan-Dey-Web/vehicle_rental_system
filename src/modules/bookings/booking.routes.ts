import express from "express";
import { tokenVerify } from "../../middlewares/tokenVerify";
import { bookingControllers } from "./booking.controllers";

const router = express.Router();

// Customer or Admin can create booking
router.post("/", tokenVerify(), bookingControllers.createBooking);

// Get all bookings Admin or customer base
router.get("/", tokenVerify(), bookingControllers.getAllBookings);

// Booking Update
router.put("/:bookingId", tokenVerify(), bookingControllers.updateBooking);

export const bookingRoutes = router;
