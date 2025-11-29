import { NextResponse } from "next/server";

export async function GET(request, context) {
    // For Query Strings
    // const {searchParams} = request.nextUrl;
    // console.log(searchParams);

    return NextResponse.json({
        success: true,
        message: "API Server running OK"
    });
}