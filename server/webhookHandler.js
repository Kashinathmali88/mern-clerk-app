import express from "express";
import { Webhook } from "svix";
import User from "./user.model.js";

const router = express.Router();

// Clerk webhook handler
router.post(
  "/clerk",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
      // const evt = wh.verify(req.body, req.headers);

      const payload = req.body.toString("utf8"); // convert Buffer → string
      const evt = wh.verify(payload, req.headers);

      if (evt.type === "user.created") {
        await User.create({
          clerkId: evt.data.id,
          email: evt.data.email_addresses[0]?.email_address,
          firstName: evt.data.first_name,
          lastName: evt.data.last_name,
        });
      }

      if (evt.type === "user.updated") {
        await User.findOneAndUpdate(
          { clerkId: evt.data.id },
          {
            email: evt.data.email_addresses[0]?.email_address,
            firstName: evt.data.first_name,
            lastName: evt.data.last_name,
          }
        );
      }

      res.status(200).json({ received: true });
    } catch (err) {
      console.error("Webhook error:", err);
      res.status(400).json({ error: "Invalid webhook" });
      process.exit(1);
    }
  }
);

export default router;
