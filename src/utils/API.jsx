export const baseUrl = "https://space.jdu.uz";
export const deployRout = 'education-client'

// login api url
export const login_api_url = () => `${baseUrl}/api/auth/login`;

// register api url
export const send_sms_api_url = () => `${baseUrl}/api/send-sms`;

// verification api url
export const verification_api_url = () => `${baseUrl}/api/register`;

// forgot password api url
export const forgot_password_api_url = () => `${baseUrl}/api/auth/forgot-password`;

// reset verification api url
export const reset_verify_api_url = () => `${baseUrl}/api/send-only-sms`

// change password api url
export const change_password_api_url = () => `${baseUrl}/api/auth/reset-password `

// forgot reset code api url
export const forgot_reset_api_url = () => `${baseUrl}/api/auth/verify-reset-code`