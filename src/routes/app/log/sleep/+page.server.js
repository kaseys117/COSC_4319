import { redirect } from '@sveltejs/kit'

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData() // get sleep form data when user hits submit
        // start and end are in 24 hour format
        const start = formData.get('bedtime')
        const end = formData.get('wakeup')
        const user_id = formData.get('uid')

        const { error } = await supabase.from('Sleep').insert({
            start,
            end,
            user_id
        });

        if (error) {
            console.log(error);
        }
        throw redirect(303, '/app/sleep')
    }
}
