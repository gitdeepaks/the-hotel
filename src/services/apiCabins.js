import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("fetch error in cabins");
    throw new Error("fetch error in cabins");
  }

  return data;
}

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error("error deleting cabin");
    throw new Error("Cabin could not be deleted from database");
  }
  return data;
};
