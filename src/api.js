import md5 from "js-md5"

const keyPublic = "9d159124d2b587be2c18045f7e9cc1a0"
const keyPrivate = "2d00554715c5d8c87a7adcc1bde5a570ac281168"
const time = 1
const hash = md5(time + keyPrivate + keyPublic)
const baseUrl = "https://gateway.marvel.com/v1/public/comics?"

export const getComics = async(offset, limit) => {

    try {
        let url = `${baseUrl}ts=1&apikey=${keyPublic}&hash=${hash}&offset=${offset}&limit=${limit}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('error', error)
    }
}

export default getComics