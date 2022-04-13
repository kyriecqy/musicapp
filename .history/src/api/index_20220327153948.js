import axios from 'axios'

//获取推荐歌单
export function getMusiclist(limit) {
  return axios.get(`http://localhost:4000/personalized?limit=${limit}`)
}

//获取歌单详情
export function getPlaylistDetail(id) {
  return axios.get(`http://localhost:4000/playlist/detail?id=${id}`)
}

//获取歌词
export function getLyric(id) {
  return axios.get(`http://localhost:4000/lyric?id=${id}`)
}

//搜索歌曲
export function searchMusic(keywords) {
  return axios.get(`http://localhost:4000/cloudsearch?keywords=${keywords}`)
}

//手机登录
export function phoneLogin(phone, password) {
  return axios.get(`http://localhost:4000/login/cellphone?phone=${phone}&password=${password}`)
}

//获取用户信息
export function userDetail(userid) {
  return axios.get(`http://localhost:4000/user/detail?uid=${userid}`)
}

//退出登录
export function logout() {
  return axios.get(`http://localhost:4000/logout`)
}

export default {
  getMusiclist,getPlaylistDetail,getLyric,searchMusic,phoneLogin,userDetail,logout
}