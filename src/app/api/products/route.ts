import { NextResponse } from "next/server";

export async function GET() {

        const response = await fetch("http://localhost:1337/api/Products?populate=*");


        const products = await response.json();
        return NextResponse.json(products);
    
}
