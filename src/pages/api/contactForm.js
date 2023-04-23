import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    try {
      // Save form data to the database
      const contact = await prisma.Connect.create({
        data: {
          email,
          phone,
          firstName,
          lastName,
          message,
        },
      });

      // Send success response
      res.status(200).json({ message: "Form data saved successfully!" });
    } catch (error) {
      // Send error response
      res.status(500).json({ error: "Failed to save form data to database." })
    }
  } else {
    // Send error response for unsupported HTTP methods
    res.status(405).json({ error: "Method not allowed." });
  }
}
