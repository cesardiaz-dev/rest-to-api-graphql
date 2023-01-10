const getWikipediaMobileUrl = (url: string) => (url !== undefined) ? url.replace("wikipedia", "m.wikipedia") : "";

const checkYear = (year: String) => {
    const currentYear = new Date().getFullYear();
    if (isNaN(+year) || +year < 1950 || +year > currentYear) {
        year = String(currentYear);
    }
    return year;
};

const checkRound = (round: Number) => (round >= 100) ? 1 : round;

export {
    getWikipediaMobileUrl,
    checkYear,
    checkRound
}