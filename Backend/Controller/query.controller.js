import { Query } from "../Model/query.model.js";

export const addQueryMessage = async (req, res) => {
  try {
    const { message } = req.body;

    const queryMessage = new Query({
      message: message,
    });
    await queryMessage.save();
    res.status(201).json({ message: "Your Query Was sent Successfully..!" });
  } catch (error) {
    res.status(501).json({ message: "Opps! Something went wrong!" });
  }
};
