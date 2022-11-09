
export const fetchReactJsSubreddit = async () => {
    const response = await fetch(`https://www.reddit.com/r/reactjs.json`,)
    const data = await response.json()

    return response.ok ? Promise.resolve(data) : Promise.reject(data);
} 

export const fetchFrontendSubreddit = async () => {
    const response = await fetch(`https://www.reddit.com/r/frontend.json`,)
    const data = await response.json()

    return response.ok ? Promise.resolve(data) : Promise.reject(data);

}