const fetchApodDate = () => {
    const dateStr = dateObjToStr(randomDate());
    const url = 'https://api.nasa.gov/planetary/apod?api_key=';
    const api_key = 'ZgpDOl3YhC0v5xlpXpkVxceElBYpx4ycjIeEhmAU';
    const fullUrl = `${url}${api_key}&date=${dateStr}`
    console.log(fullUrl);

    const promise = fetch(fullUrl)
    .then(response => response.json())
    .then(data => {
        displayImg(data.url, data.title);
    })
}

const displayImg = (imgLink, title) => {
    document.getElementById("astroImg").src = imgLink;
    document.getElementById("astroTitle").innerText = title;
}

const randomDate = () => {
    const startDate = new Date(1996, 0 , 1);
    const endDate = new Date();

    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

}

const dateObjToStr = (dateObj) => {
    const year = dateObj.getFullYear().toString();

    const monthObj = dateObj.getMonth() + 1;
    const monthStr = monthObj.toString();
    const monthFixed = monthStr.length === 1 ? "0" + monthStr : monthStr;

    const dateStr = dateObj.getDate().toString();
    const dateFixed = dateStr.length === 1 ? "0" + dateStr : dateStr;

    return `${year}-${monthFixed}-${dateFixed}`;
}


document.getElementById("astroBtn").addEventListener("click", fetchApodDate);