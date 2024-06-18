export const regExp = {
    email:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    text: /^[a-zA-Z0-9áÁéÉíÍóÓúÚüÜ% ,.-]+$/,
    number: /[0-9]/,
    document: /^\d+(?:[.,]\d+)(?:[.,]\d+)|[0-9] ?$/
}