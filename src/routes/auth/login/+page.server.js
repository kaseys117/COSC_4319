import { fail, redirect } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          error: 'Invalid email or password.',
          values: {
            email
          }
        })
      }

      return fail(500, {
        error: 'Internal server error.',
        values: {
          email
        }
      })
    }

    throw redirect(303, '/app')
  },
}
