import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("fetch error in cabins");
    throw new Error("fetch error in cabins");
  }

  return data;
}
