
const fetchAPIreddit = async (theme) => {
    const response = await fetch(`https://www.reddit.com/r/${theme}.json`, 'GET')
    const data = await response.json()

    return response.ok ? Promise.resolve(data) : Promise.reject(data);
} 

export default fetchAPIreddit;