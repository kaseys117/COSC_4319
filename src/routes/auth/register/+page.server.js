import { fail, redirect } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData() // get form data when user hits register button
    const email = formData.get('email') // get email from form data
    const password = formData.get('password') // get password from form data
    const nickname = formData.get('nickname') // get nickname from form data

    // register user with email and password, and store the nickname in the metadata
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname: nickname
        }
      }
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

    throw redirect(303, '/auth/login?emailSent=true')
  },
}
