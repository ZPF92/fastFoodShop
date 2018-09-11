import ajax from './ajax.js'

export const reqAddress = geohash => ajax(`/api/position/${geohash}`)

export const reqFoodList = () => ajax(`/api/index_category`)

export const reqShopList = (latitude,longitude) => ajax(`/api/shop`,{latitude,longitude})

export const reqCaptcha = () => ajax(`/api/captcha`)

export const loginPwd = ({name,pwd,captcha}) => ajax(`/api/login_pwd`,{name,pwd,captcha},'POST')

export const sendCode = phone => ajax(`/api/sendcode`,{phone})

export const loginSms = ({phone,code}) => ajax(`/api/login_sms`,{phone,code},'POST')

export const reqUserInfo = () => ajax(`/api/userinfo`)