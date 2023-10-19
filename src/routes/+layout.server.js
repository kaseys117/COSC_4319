export const load = async (event) => {
    return {
        session: await getSession(event)
    }
}
