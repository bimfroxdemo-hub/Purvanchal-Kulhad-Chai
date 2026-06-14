const express = require("express");

const router = express.Router();

const Franchise = require(
  "../models/Franchise"
);

const adminAuth = require(
  "../middleware/adminAuth"
);


// USER SUBMIT
router.post(
  "/",
  async (req, res) => {
    try {
      const franchise =
        await Franchise.create(
          req.body
        );

      res.status(201).json({
        success: true,
        data: franchise,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
      });
    }
  }
);


// ADMIN GET ALL
router.get(
  "/",
  adminAuth,
  async (req, res) => {
    try {
      const data =
        await Franchise.find().sort({
          createdAt: -1,
        });

      res.json({
        success: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
      });
    }
  }
);


// MARK READ
router.put(
  "/read/:id",
  adminAuth,
  async (req, res) => {
    try {
      await Franchise.findByIdAndUpdate(
        req.params.id,
        {
          isRead: true,
        }
      );

      res.json({
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
      });
    }
  }
);


// DELETE
router.delete(
  "/:id",
  adminAuth,
  async (req, res) => {
    try {
      await Franchise.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
      });
    }
  }
);

module.exports = router;