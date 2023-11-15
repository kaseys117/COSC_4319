export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData();
        const nickname = formData.get("name");

        const { error } = await supabase.auth.updateUser({
            data: {
                nickname
            }
        })

        if (error) {
            console.log(error);
        } else {
            await supabase.auth.refreshSession()
        }
    },
};
