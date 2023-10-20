// This is an example of a protected route that requires authentication
// This kind of code should be applied to other areas of the app that require authentication
// like profile pages, etc.
import { json, error } from '@sveltejs/kit'

export const GET = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()
  if (!session) {
    // the user is not signed in
    throw error(401, { message: 'Unauthorized' })
  }
  const { data } = await supabase.from('test').select('*')

  return json({ data })
}

// Take a look at the code in the Authorization section of the Supabase docs:
// https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#authorization
// (Specifically the Protecting multiple routes section)
