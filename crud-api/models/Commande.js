const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema(
  {
    dateCommande: {
      type: Date,
      default: Date.now,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: [true, 'Le client est obligatoire'],
    },
    produits: [
      {
        produit: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Produit',
          required: true,
        },
        quantite: {
          type: Number,
          required: true,
          min: [1, 'La quantité doit être au moins 1'],
        },
      },
    ],
    montantTotal: {
      type: Number,
      required: [true, 'Le montant total est obligatoire'],
      min: [0, 'Le montant total ne peut pas être négatif'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Commande', commandeSchema);
