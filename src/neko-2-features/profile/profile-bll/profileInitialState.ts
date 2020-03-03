
export type ProfileType = {
    _id: string | null
    email: string | null
    password: string | null
    rememberMe: boolean | null
    isAdmin: boolean | null
    created: string | null
    updated: string | null
    __v: number | null
    token: string | null
    tokenDeathTime: number | null
    name: string | null
}
export const profileInitialState: ProfileType = {
    _id: null,
    email: null,
    password: null,
    rememberMe: null,
    isAdmin: null,
    created: null,
    updated: null,
    __v: null,
    token: null,
    tokenDeathTime: null,
    name: null
}