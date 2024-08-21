import { Contact } from "../Model/contact.model.js";

export const addContactMessage = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    const contactMessage = new Contact({
      fullname: fullname,
      email: email,
      message: message,
    });
    await contactMessage.save();
    res.status(201).json({ message: "Your Message Was sent Successfully..!" });
  } catch (error) {
    res.status(501).json({ message: "Opps! Something went wrong!" });
  }
};
