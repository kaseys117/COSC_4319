import { repackage_data } from "$lib/utils";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase } }) {
    // Gets user's diet data
    const { data, error } = await supabase.from("Diet").select();
    if (error) {
        console.log(error);
    }
    return {
        data: data ? repackage_data(data) : [],
    };
}
