import frenchMesages from "ra-language-french";

export default {
  ...frenchMesages,
  resources: {
    products: {
      name: "Produit |||| Produits",
      fields: {
        name: "Nom",
        reference: "Référence",
        price: "Prix",
        category_id: "Catégorie",
        width: "Largeur",
        height: "Hauteur",
        thumbnail: "Aperçu",
        stock: "Stock",
        sales: "Ventes",
      },
    },
    reviews: {
      name: "Avis |||| Avis",
      fields: {
        product_id: "Produit",
        customer_id: "Client",
        command_id: "Commande",
        date: "Date",
        rating: "Note",
        comment: "Commentaire",
      },
    },
    customers: {
      name: "Client |||| Clients",
      fields: {
        first_name: "Prénom",
        last_name: "Nom",
        email: "E-mail",
        address: "Adresse",
        zipcode: "Code postal",
        city: "Ville",
        commands: "Commandes",
        birthday: "Anniversaire",
        first_seen: "Première visite",
        last_seen: "Dernière visite",
        has_ordered: "A commandé",
        latest_purchase: "Dernier achat",
        has_newsletter: "Abonné à la newsletter",
        groups: "Segments",
        nb_commands: "Nb commandes",
        total_spent: "Dépenses",
      },
    },
    commands: {
      name: "Commande |||| Commandes",
      fields: {
        reference: "Référence",
        date_gte: "Passée depuis",
        date_lte: "Passée avant",
        customer_id: "Client",
        nb_items: "Nb articles",
        total_gte: "Montant minimum",
        status: "Etat",
        returned: "Retournée",
        basket: "Panier",
        delivery_fees: "Frais de livraison",
        total_ex_taxes: "Total HT",
        tax_rate: "Taux de TVA",
        taxes: "TVA",
      },
    },
  },
  pos: {
    dashboard: {
      monthly_revenue: "CA à 30 jours",
      new_orders: "Nouvelles commandes",
      pending_reviews: "Commentaires à modérer",
      all_reviews: "Voir tous les commentaires",
      new_customers: "Nouveaux clients",
      all_customers: "Voir tous les clients",
      pending_orders: "Commandes à traiter",
      order: {
        items:
          "par %{customer_name}, un poster |||| par %{customer_name}, %{nb_items} posters",
      },
    },
  },
};
