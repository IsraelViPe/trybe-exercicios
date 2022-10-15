export const SELECTED_THEME = 'SELECTED_THEME';
export const ERROR = 'ERROR';

export const selectedTheme = (theme) => ({
    type: SELECTED_THEME,
    theme,
})

export const error = (error) => ({
    type: ERROR,
    error,
})

export function fetchRedditAPI(themeSelected) {
    return async (dispatch) => {
        
        try{
           const response = await fetch(`https://www.reddit.com/r/${themeSelected}.json`)
           const data = await response.json()
           dispatch(selectedTheme(data.data.children))
        } catch(e) {
            dispatch(error(e))
        }
    }
}

