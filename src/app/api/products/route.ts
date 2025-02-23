import { NextResponse } from "next/server";

export async function GET() {

        const response = await fetch("https://secure-creativity-35fee2e16d.strapiapp.com/api/Products?populate=*");


        const products = await response.json();
        return NextResponse.json(products);
    
}
