const formatDate = (date: string, zone: string = 'pl-PL') => {
    const formattedDate = new Date(date).toLocaleDateString(zone, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })

    return formattedDate
}

export default formatDate