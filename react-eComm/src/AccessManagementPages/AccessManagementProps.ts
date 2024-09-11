
export interface LoginPageProp {
    prefilledEmail: string,
    loginButtonTitle?: string,
    placeHolderEmail?: string,
    placeHolderPassword?: string,
    newUserButtonTitle?: string,
    forgotPasswordTitle?: string
}


export interface SignUpProp {
    placeHolderEmail?: string,
    signupButtonTitle?: string,
    existingUserButtonTitle?: string
}

export interface ForgotPasswordProp {
    prefilledEmail?: string,
    sendButtonTitle?: string
}