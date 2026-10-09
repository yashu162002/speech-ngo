const express = require("express");
const cors = require("cors");
require("dotenv").config();

const donationRoutes = require("./routes/donationRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "SPEECH backend is running",
  });
});

// Ignore Chrome DevTools auto-discovery probe
app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
  res.status(204).end();
});

// Donation routes
app.use("/api/donations", donationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(
    `SPEECH backend running on http://localhost:${PORT}`
  );
});