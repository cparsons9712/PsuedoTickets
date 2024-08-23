export const extractUsername = (email) => {


    if(typeof email != "string" ||
        !email.includes("@") ||
        email.startsWith("@")
    ) return "Please enter a valid email address"


    const substring = ""
    for(let i = 0; i < email.indexOf("@"), i++;){
        console.log(email[i])
    }
    return substring
};
