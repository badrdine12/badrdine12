import { NextResponse } from 'next/server';

// Mock data - Replace with actual database connection
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = searchParams.get('limit');

  // Mock products data
  const products = [
    {
      id_produit: 1,
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
    },
    // Add more products as needed
  ];

  return NextResponse.json({
    success: true,
    data: products,
    count: products.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate and create product
    // This is where you would interact with your MySQL database
    
    return NextResponse.json({
      success: true,
      message: 'Product created successfully',
      data: body,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error creating product',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
