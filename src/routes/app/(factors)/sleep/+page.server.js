export async function load({ locals: { supabase }}) {
    // Gets users sleep data
    const { data, error } = await supabase.from("Sleep").select();
    if (error) {
        console.log(error);
    }
    return {
        data: data ?? []
    };
}
