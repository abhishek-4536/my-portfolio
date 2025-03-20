import axios from "axios";
import https from "https"; // Import the https module

export async function sendMessage(formData) {
  const { fullName, email, subject, phone, message } = formData;
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error("Bot token or chat ID missing");
  }

  const text = `
📩 *New Contact Form Submission*  
👤 *Name:* ${fullName}  
✉️ *Email:* ${email}  
📞 *Phone:* ${phone}  
📝 *Subject:* ${subject}  
💬 *Message:* ${message}  
  `;

  console.log("Sending message to Telegram API...");
  console.log("API URL:", TELEGRAM_API_URL);
  console.log("Chat ID:", TELEGRAM_CHAT_ID);
  console.log("Bot Token:", TELEGRAM_BOT_TOKEN);

  try {
    const response = await axios.post(
      TELEGRAM_API_URL,
      { chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "Markdown" },
      {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }), // Disable SSL verification
      }
    );

    console.log("Telegram API Response:", response.data);
    return response.data.ok ? "Message sent successfully" : `Failed: ${response.data.description}`;
  } catch (error) {
    console.error("Error sending message:", error.response?.data || error.message);
    return "Error sending message";
  }
}