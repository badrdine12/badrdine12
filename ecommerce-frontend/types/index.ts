export interface Category {
  id_categorie: number;
  nom: string;
  description: string;
  id_parent: number | null;
  ordre_affichage: number;
}

export interface Product {
  id_produit: number;
  id_categorie: number;
  reference: string;
  nom: string;
  description: string;
  details_techniques: string;
  prix: number;
  prix_promo: number | null;
  qte_stock: number;
  image_url: string;
  date_ajout: string;
  est_nouveau: boolean;
  categorie?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Client {
  id_client?: number;
  nom: string;
  prenom: string;
  email: string;
  tel: string;
  raison_sociale?: string;
}

export interface Address {
  id_adresse?: number;
  id_client: number;
  rue: string;
  complement?: string;
  ville: string;
  code_postal: string;
  pays: string;
  type: 'livraison' | 'facturation';
  is_default: boolean;
}

export interface Order {
  id_commande?: number;
  numero_commande: string;
  id_client: number;
  date_commande: string;
  montant_total: number;
  statut: 'en_attente' | 'payee' | 'expediee' | 'livree' | 'annulee';
}
