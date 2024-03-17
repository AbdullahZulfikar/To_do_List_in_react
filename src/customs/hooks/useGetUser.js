

export const useGetUserInfo = () => {
    const {name,Profile
        , userId
        , isAuth} = JSON.parse(
        localStorage.getItem("auth")
        );

    return {name, Profile, userId
        , isAuth}
}