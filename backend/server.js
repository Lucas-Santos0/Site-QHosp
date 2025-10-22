import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { transporter } from "./nodemailer.js";
import { auth } from "./firebase.js";
import { generateCode, verifyCode } from "./codes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Envia o código por e-mail
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "E-mail obrigatório" });

  try {
    const code = generateCode(email);

    await transporter.sendMail({
      from: "QHosp <qhospp@gmail.com>",
      to: email,
      subject: "Código de redefinição de senha - QHosp",
      html: `
        <h2>Olá!</h2>
        <p>Seu código de redefinição de senha é:</p>
        <h1 style="color:#2c7be5">${code}</h1>
        <p>Esse código expira em 10 minutos.</p>
      `,
    });

    // Em ambiente de desenvolvimento, retorna o código para facilitar testes
    const response = {  menssage: "Código enviado com sucesso!" };
    if (process.env.NODE_ENV === "development") response.code = code;

    res.json(response);
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    res.status(500).json({ error: "Erro ao enviar e-mail" });
  }
});

// Redefine a senha (segunda tela) — verifica o código e altera a senha
app.post("/reset-password", async (req, res) => {
  const { email, code, newPassword } = req.body;
  if (!email || !code || !newPassword) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  try {
    console.log("[reset-password]", { email, code });

    const isValid = verifyCode(email, code);
    if (!isValid) {
      return res.status(400).json({ error: "Código inválido ou expirado" });
    }

    const user = await auth.getUserByEmail(email).catch(() => null);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    await auth.updateUser(user.uid, { password: newPassword });

    res.json({ message: "Senha redefinida com sucesso!" });
  } catch (err) {
    console.error("Erro ao redefinir senha:", err);
    res.status(500).json({ error: "Erro ao redefinir senha" });
  }
});

// Envia mensagem de contato
app.post("/contact", async (req, res) => {
  const { email, assunto, mensagem } = req.body;

  if (!email || !assunto || !mensagem) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    await transporter.sendMail({
      from: `"Contato QHosp" <${process.env.GMAIL_USER}>`, // remetente: sua conta do sistema
      to: process.env.GMAIL_USER, // destinatário: você mesmo
      subject: `Novo contato: ${assunto}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Email do usuário:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    res.json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar mensagem de contato:", error);
    res.status(500).json({ error: "Erro ao enviar mensagem." });
  }
});


// Inicia servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
