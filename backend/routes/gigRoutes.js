import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import Gig from "../models/Gig.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

router.post("/", verifyToken, async (req, res) => {

  try {

    console.log("Uploading image...");

    let imageUrl = "";

    if (req.body.image) {

      const upload = await cloudinary.uploader.upload(
        req.body.image,
        {
          folder: "fiverr-gigs",
          resource_type: "image"
        }
      );

      imageUrl = upload.secure_url;

      console.log("Image uploaded:", imageUrl);

    }

    const gig = new Gig({

      title: req.body.title,
      desc: req.body.desc,
      price: req.body.price,
      image: imageUrl,
      userId: req.userId

    });

    const savedGig = await gig.save();

    res.status(201).json(savedGig);

  } catch (error) {

    console.error("Cloudinary error:", error);

    res.status(500).json(error.message);

  }

});

router.get("/", async (req, res) => {

  const gigs = await Gig.find();

  res.json(gigs);

});

export default router;