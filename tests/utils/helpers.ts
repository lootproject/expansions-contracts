// Check if tx was Reverted with specified message
export function RevertError(errorMessage?: string) {
  let prefix = 'VM Exception while processing transaction: revert'
  return errorMessage ? `${prefix + ' ' + errorMessage}` : prefix
}