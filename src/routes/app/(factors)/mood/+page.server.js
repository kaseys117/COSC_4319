export async function load({ locals: { supabase }}) {
    // Gets user's mood data
    const { data, error } = await supabase.from("Mood").select();
    if (error) {
        console.log(error);
    }
    console.log(data)
    return {
        data: data ?? []
    };
}
