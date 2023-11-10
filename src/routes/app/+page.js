export const load = ({ fetch, params }) => {
    const fetchUser = async (user) => {
        return user.session
    }
    return fetchUser(params)
}
