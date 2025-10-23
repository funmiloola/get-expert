export const filteredByDays = (filteredType, data) => {
    if (filteredType === "all") return data;
    const now = new Date()
    const past = new Date()

    if (filteredType === "24hours") {
        past.setHours(now.getHours() - 24);
    }
    else if (filteredType === "7days") {
        past.setDate(now.getDate() - 7);
    }
    else if (filteredType === "30days") {
        past.setDate(now.getDate()- 30)
    }
    return data.filter((item) => {
        const itemDate = new Date(item.date)
         return itemDate >= past && itemDate <= now;
    })  
}