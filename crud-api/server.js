require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connexion à MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/produits', require('./routes/produitRoutes'));
app.use('/api/commandes', require('./routes/commandeRoutes'));

// Route d'accueil
app.get('/', (req, res) => {
  res.json({
    message: '🚀 API REST Commerce - Bienvenue!',
    routes: {
      clients: '/api/clients',
      produits: '/api/produits',
      commandes: '/api/commandes',
    },
  });
});

// Gestion des routes inexistantes
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route non trouvée' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
