export const initials = (data) => {
    const name = [
        data.first_name,
        data.middle_name,
        data.last_name,
    ]
    .filter(Boolean)
    .join(" ");

    const avatar = [
        data.first_name?.[0],
        data.last_name?.[0],
    ]
    .filter(Boolean)
    .join("")
    .toUpperCase();

    return {name: name, avatar: avatar}
}