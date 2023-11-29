import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData(); // get symptom form data when user hits submit
        const user_id = formData.get('uid');
        const date = formData.get('date');
        const location = formData.get('location');
        const feel = formData.get('feel');
        const duration = formData.get('duration');
        const aggrevate = formData.get('aggrevate');
        const relieve = formData.get('relieve');
        const notes = formData.get('notes');

        const symptom_data = {
            date,
            location,
            feel,
            duration,
            aggrevate,
            relieve,
            notes,
        };
        // TODO create supabase table for symptoms and add Row Level Security policies
        // The table should have two columns: user_id and symptom_data(json datatype)
        const { error } = await supabase.from('Symptoms').insert({
            user_id,
            symptom_data
        });

        if (error) {
            console.log(error);
        }
        throw redirect(303, '/app/symptoms');
    }
}
