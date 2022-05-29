import ErrorMessages from "./ErrorMessages";


const ValidateEmail = (email: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email) return { isError: true, err: ErrorMessages.emptyEmailField }
    else if (!(reg.test(email))) return { isError: true, err: ErrorMessages.invalidEmail }
    else return { isError: false }
}

const ValidateName = (name: string) => {
    // const reg = /^[a-zA-Z]/;
    const reg = /^(?:[A-Za-z]+)$/;
    if (!name) return { isError: true, err: ErrorMessages.emptyNameField }
    else if (name.length < 3) return { isError: true, err: ErrorMessages.nameAtleast }
    else return { isError: false }
}

const ValidatePhone = (mobile: any) => {
    const reg = /^[0-9]/;
    const mobileRegX = /^\d+$/;
    if (!mobile) return { isError: true, err: ErrorMessages.emptyPhoneField }
    else if (mobile < 6000000000) return { isError: true, err: ErrorMessages.invalidMobile }
    else if (!mobileRegX.test(mobile) && !reg.test(mobile)) return { isError: true, err: ErrorMessages.only1To9 }
    else return { isError: false }
}

const ValidatePassword = (password: string, oldPassword?: string) => {
    var reg = /[ `!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/? ~]/;
    if (!password) return { isError: true, err: ErrorMessages.emptyPasswordField }
    // else if (!reg.test(password)) return { isError: true, err: ErrorMessages.passwordSpecChar }
    else return { isError: false }
}

const ValidateConfirmPassword = (password: string, confirmPassword: string) => {
    if (!password) return { isError: true, err: ErrorMessages.emptyConfirmPasswordField }
    else if (password != confirmPassword) return { isError: true, err: ErrorMessages.confirmPassword }
    else return { isError: false }
}

export {
    ValidateEmail,
    ValidateName,
    ValidatePhone,
    ValidatePassword,
    ValidateConfirmPassword
}