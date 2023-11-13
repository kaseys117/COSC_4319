export async function load({ locals: { supabase }}) {
    // Gets user's sleep data
    const { data, error } = await supabase.from("Sleep").select();
    if (error) {
        console.log(error);
    }
    return {
        data: data ?? []
    };
}
