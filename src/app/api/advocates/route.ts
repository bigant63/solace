import db from "@/db";
import { advocates } from "@/db/schema";
import { NextRequest } from "next/server";
import { sql } from "drizzle-orm";
import { Advocate } from "@/types";

export const GET = async (request: NextRequest) => {
  const searchTerm = request.nextUrl.searchParams.get("searchTerm");

  try {
    let data: Advocate[] | unknown = [];

    if (!searchTerm || searchTerm === "") {
      data = await db.select().from(advocates);
    } else {
      // Search in firstName, lastName, city, and specialties
      // Use ->> operator to extract text from JSONB specialties array
      const query = db.select().from(advocates);
      if ("where" in query) {
        data = await query.where(
          sql`${advocates.firstName} ILIKE ${`%${searchTerm}%`} OR ${
            advocates.lastName
          } ILIKE ${`%${searchTerm}%`} OR ${
            advocates.city
          } ILIKE ${`%${searchTerm}%`} OR ${
            advocates.specialties
          }->>0 ILIKE ${`%${searchTerm}%`} OR ${
            advocates.specialties
          }->>1 ILIKE ${`%${searchTerm}%`}`
        );
        // need to change this to jsonb_array_elements_text for more
        // than 2 elements in the seed data but this should be more performant
      } else {
        data = [];
      }
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Database query error:", error);
    return Response.json(
      { error: "Failed to fetch advocates" },
      { status: 500 }
    );
  }
};
