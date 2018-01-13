const API_KEY = 'LhysrXZepYvpAUPJh0rtfJUegjxO88u3yc1Ios6xQLefbdRi84'
const API_HOST = 'https://api.twitter.com'
const REDIRECT_URI = `${window.location.origin}/oauth`

let token = localStorage.TWITTER_TOKEN || ""

const API = {
    login() {
        window.location.replace(
            `${API_HOST}/oauth/authenticate?oauth_token==${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=token`
        );
    },
    hasAuth() {
        return !!token;
    },
    setToken(newToken) {
        token = newToken
        localStorage.INSTA_TOKEN = newToken
    }
};

export default API;
