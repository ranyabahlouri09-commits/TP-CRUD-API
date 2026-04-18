const Commande = require('../models/Commande');

// GET /api/commandes
exports.getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find()
      .populate('client', 'nom email ville')
      .populate('produits.produit', 'nom prix');
    res.status(200).json({ success: true, count: commandes.length, data: commandes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/commandes/:id
exports.getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id)
      .populate('client', 'nom email telephone ville')
      .populate('produits.produit', 'nom prix categorie');
    if (!commande) {
      return res.status(404).json({ success: false, message: 'Commande non trouvée' });
    }
    res.status(200).json({ success: true, data: commande });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/commandes
exports.createCommande = async (req, res) => {
  try {
    const commande = await Commande.create(req.body);
    const populated = await commande.populate([
      { path: 'client', select: 'nom email' },
      { path: 'produits.produit', select: 'nom prix' },
    ]);
    res.status(201).json({ success: true, data: populated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// PUT /api/commandes/:id
exports.updateCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate('client', 'nom email')
      .populate('produits.produit', 'nom prix');
    if (!commande) {
      return res.status(404).json({ success: false, message: 'Commande non trouvée' });
    }
    res.status(200).json({ success: true, data: commande });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE /api/commandes/:id
exports.deleteCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);
    if (!commande) {
      return res.status(404).json({ success: false, message: 'Commande non trouvée' });
    }
    res.status(200).json({ success: true, message: 'Commande supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
