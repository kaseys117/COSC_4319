import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData() // get mood form data when user hits submit
        const mood = formData.get('mood')
        const notes = formData.get('notes')
        const user_id = formData.get('uid')
        const date = formData.get('date')

        const { error } = await supabase.from('Mood').insert({
            user_id,
            mood,
            notes,
            date
        });

        if (error) {
            console.log(error);
        }
        throw redirect(303, '/app/mood')
    }
}
