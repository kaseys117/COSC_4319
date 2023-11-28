import { fail, redirect } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'
import { activity_level_enum } from '$lib/utils.js'

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData() // get form data when user hits register button
    const email = formData.get('email') // get email from form data
    const password = formData.get('password') // get password from form data
    const nickname = formData.get('nickname') // get nickname from form data
    const sex = formData.get('sex')
    const dob = formData.get('dob')  // get date of birth from form data
    const height_ft = formData.get('height-ft') // get height from form data
    const height_in = formData.get('height-in') // get height from form data
    const height = `${height_ft}'${height_in}"` // combine height_ft and height_in into one string
    const activity_level = formData.get('activity-level') // get activity level from form data

    // Check that activity level is valid
    if (!Object.values(activity_level_enum).includes(activity_level)) {
      return fail(400, {
        error: 'Invalid activity level.',
        values: {
          activity_level
        }
      })
    }

    // register user with email and password, and store the nickname in the metadata
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname: nickname,
          sex: sex,
          dob: dob,
          height: height,
          activity_level: activity_level
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
