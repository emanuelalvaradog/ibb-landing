const Mailjet = require("node-mailjet");

const mailjet = Mailjet.apiConnect(
  process.env.MAIL_PUB_KEY,
  process.env.MAIL_PRIV_KEY
);

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;
      mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "bethel.iglesia.bautista@gmail.com",
              Name: "Emanuel",
            },
            To: [
              {
                Email: "bethel.iglesia.bautista@gmail.com",
                Name: "Emanuel",
              },
            ],
            Subject: "Nueva petición de oración",
            TextPart: `Petición de: ${name}  | Correo: ${email} | Petición: ${message}`,
            HTMLPart: `<h3>Petición de: ${name} </h3> <br/> <h3>Correo: ${email} </h3> <hr/> <h3>Petición: </br> <p>${message}</p>`,
          },
        ],
      });

      res.status(200).json({ message: "email sent" });
    } catch (e) {
      res.status(500).json({ message: "error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
