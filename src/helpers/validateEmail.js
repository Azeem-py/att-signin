export function isEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^\S+@\S+\.\S+$/

  // Check if the email matches the regex
  return emailRegex.test(email)
}
