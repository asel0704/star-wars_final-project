import { HTTP, HTTPS } from '@constants/api';

/**
 *
 * @param {String} url
 * @return {String}
 */
export const changeHTTP = url => {
    return url ? url.replace(HTTP, HTTPS) : url;
}

/**
 * 
 * @param {String} url 
 * @return {Promise}
 */
export const getApiResource = async (url) => {
	try {
		const res = await fetch(url);

		if (!res.ok) {
			console.error('Could not fetch.', res.status);
			return false;
		}

		return await res.json();
	} catch (error) {
		console.error('Could not fetch.', error.message);
		return false;
	}
}
/**
 * 
 * @param {Array<String>} urls
 * @return {Promise}
 */
export const makeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(res => {
		return fetch(res).then(res => res.json())
	 }))

	 return res;
};
