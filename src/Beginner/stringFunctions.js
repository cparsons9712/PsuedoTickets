export const isString = (input) => {
    return typeof input === "string";
}


export function getUsernameFromEmail(email) {

    const brokenUpEmail = email.split("@");
    return brokenUpEmail[0]

}
