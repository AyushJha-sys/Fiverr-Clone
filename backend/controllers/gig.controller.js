import Gig from "../models/Gig.js";

export const createGig = async (req, res) => {

  try {

    const newGig = new Gig({

      title: req.body.title,
      desc: req.body.desc,
      price: req.body.price,
      image: req.body.image,
      userId: req.userId

    });

    const savedGig = await newGig.save();

    res.status(201).json(savedGig);

  } catch (error) {

    res.status(500).json(error.message);

  }

};