export async function load({ locals: { supabase }}) {
    // Gets user's mood data
    const { data, error } = await supabase.from("Mood").select();
    if (error) {
        console.log(error);
    }
    return {
        data: data ?? []
    };
}
