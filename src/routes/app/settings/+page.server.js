import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData(); // get mood form data when user hits submit
        const nickname = formData.get("name");

        const { error } = await supabase.auth.updateUser({
            data: {
                nickname
            }
        })
            // .match({ id: user_id });

        if (error) {
            console.log(error);
        } else {
            throw redirect(303, "/app/settings");
        }
    },
};
