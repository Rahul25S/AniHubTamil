import toast from "react-hot-toast";

// Validate login form (Email & Password)
export async function combinedValidate(values) {
    const errors = {
        ...await emailValidate(values), // Validate email
        ...await passwordValidate(values) // Validate password
    };
    return errors;
}

// Validate email for login
export async function emailValidate(values) {
    const errors = emailVerify({}, values);
    return errors;
}

// Validate password for login
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors;
}

// Validate password
function passwordVerify(error = {}, values) {
    const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        error.password = toast.error('Password Required...!');
    } else if (values.password.includes(" ")) {
        error.password = toast.error('Wrong password...!');
    } else if (values.password.length < 6) {
        error.password = toast.error('Password must contain at least 6 characters');
    } else if (!specialChar.test(values.password)) {
        error.password = toast.error('Password must have at least one special character');
    }

    return error;
}

// Validate email
function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error("Email Required...!");
    } else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong Email...!");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error("Invalid email address...!");
    }
    return error;
}

// Validate registration form (Username, Email & Password)
export async function registerValidation(values) {
    const errors = {
        ...usernameVerify({}, values), // Validate username
        ...emailVerify({}, values),    // Validate email
        ...passwordVerify({}, values)  // Validate password
    };
    return errors;
}

// Validate username (For Registration)
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error('Username Required...!');
    } else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid Username...!');
    }
    return error;
}
