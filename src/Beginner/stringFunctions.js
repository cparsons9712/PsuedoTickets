export const containsSubstring  = (text, substring) => {

    text = text.toLowerCase()
    substring = substring.toLowerCase()
    return text.includes(substring)
}
