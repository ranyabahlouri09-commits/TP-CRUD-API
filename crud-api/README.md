# 🛒 API REST Commerce - Node.js + Express + MongoDB

Mini API REST avec architecture MVC pour gérer Clients, Produits et Commandes.

## 🗂 Structure du projet

```
crud-api/
├── config/
│   └── db.js               # Connexion MongoDB
├── models/
│   ├── Client.js            # Schéma Client
│   ├── Produit.js           # Schéma Produit
│   └── Commande.js          # Schéma Commande
├── controllers/
│   ├── clientController.js  # Logique CRUD Clients
│   ├── produitController.js # Logique CRUD Produits
│   └── commandeController.js# Logique CRUD Commandes
├── routes/
│   ├── clientRoutes.js      # Routes /api/clients
│   ├── produitRoutes.js     # Routes /api/produits
│   └── commandeRoutes.js    # Routes /api/commandes
├── .env
├── package.json
└── server.js                # Point d'entrée
```

## ⚙️ Installation

```bash
npm install
```

## 🔧 Configuration

Créer un fichier `.env` :

```env
MONGO_URI=mongodb://localhost:27017/commerceDB
PORT=3000
```

## ▶️ Lancement

```bash
# Production
npm start

# Développement (avec nodemon)
npm run dev
```

---

## 📡 Routes API

### 👤 Clients — `/api/clients`

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | /api/clients | Récupérer tous les clients |
| GET | /api/clients/:id | Récupérer un client |
| POST | /api/clients | Créer un client |
| PUT | /api/clients/:id | Modifier un client |
| DELETE | /api/clients/:id | Supprimer un client |

**Body POST/PUT (JSON) :**
```json
{
  "nom": "Ahmed Benali",
  "email": "ahmed@example.com",
  "telephone": "0612345678",
  "ville": "Casablanca"
}
```

---

### 📦 Produits — `/api/produits`

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | /api/produits | Récupérer tous les produits |
| GET | /api/produits/:id | Récupérer un produit |
| POST | /api/produits | Créer un produit |
| PUT | /api/produits/:id | Modifier un produit |
| DELETE | /api/produits/:id | Supprimer un produit |

**Body POST/PUT (JSON) :**
```json
{
  "nom": "Laptop Dell XPS",
  "categorie": "Informatique",
  "prix": 8500,
  "quantiteStock": 15
}
```

---

### 🧾 Commandes — `/api/commandes`

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | /api/commandes | Récupérer toutes les commandes |
| GET | /api/commandes/:id | Récupérer une commande |
| POST | /api/commandes | Créer une commande |
| PUT | /api/commandes/:id | Modifier une commande |
| DELETE | /api/commandes/:id | Supprimer une commande |

**Body POST/PUT (JSON) :**
```json
{
  "client": "ID_CLIENT_ICI",
  "produits": [
    {
      "produit": "ID_PRODUIT_ICI",
      "quantite": 2
    }
  ],
  "montantTotal": 17000
}
```

---

## 📋 Codes HTTP utilisés

| Code | Signification |
|------|--------------|
| 200 | OK — Requête réussie |
| 201 | Created — Ressource créée |
| 400 | Bad Request — Données invalides |
| 404 | Not Found — Ressource non trouvée |
| 500 | Internal Server Error |
