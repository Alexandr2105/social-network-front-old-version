export const required = (value) => {
    if (value) {
        return undefined;
    } else {
        console.log("value " + value)
        return "Field is required";
    }
}

export const checkMaxLength = (length) => (value) => {
    if (value.length > length) return `Field ${length} length`;
    return undefined;
}