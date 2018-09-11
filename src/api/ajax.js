import axios from 'axios'
import querystring from 'querystring'

export default function ajax(url='',data={},method='GET'){
	return new Promise((resolve,reject) => {
		let promise;
		if(method.toUpperCase() == 'GET'){
			url += '?' + querystring.stringify(data,'&','=');
			promise = axios.get(url);
		}else{
			promise = axios.post(url,data);
		}
		promise.then(response => {
			resolve(response.data);
		}).catch(error => {
			reject(error);
		});
	});
}