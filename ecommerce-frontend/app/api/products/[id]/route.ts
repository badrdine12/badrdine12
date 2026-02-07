import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // Mock product data - Replace with actual database query
  const product = {
    id_produit: parseInt(id),
    id_categorie: 7,
    reference: 'LAP-HP-001',
    nom: 'HP Pavilion 15',
    description: 'Ordinateur portable polyvalent pour le quotidien',
    details_techniques: 'Intel Core i5-1235U\nRAM: 8 Go DDR4\nSSD: 512 Go',
    prix: 7999.00,
    prix_promo: 7499.00,
    qte_stock: 15,
    image_url: '/images/hp-pavilion-15.jpg',
    date_ajout: new Date().toISOString(),
    est_nouveau: true,
    categorie: 'PC Portables',
  };

  if (!product) {
    return NextResponse.json({
      success: false,
      message: 'Product not found',
    }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    data: product,
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();

    // Update product in database
    
    return NextResponse.json({
      success: true,
      message: 'Product updated successfully',
      data: body,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error updating product',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // Delete product from database
    
    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error deleting product',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
