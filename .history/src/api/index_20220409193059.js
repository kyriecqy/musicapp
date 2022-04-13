import axios from 'axios'

//获取推荐歌单
export function getMusiclist(limit) {
  return axios.get(`http://music.cpengx.cn/personalized?limit=${limit}`)
}

//获取歌单详情
export function getPlaylistDetail(id) {
  return axios.get(`http://music.cpengx.cn/playlist/detail?id=${id}`)
}

//获取歌词
export function getLyric(id) {
  return axios.get(`http://music.cpengx.cn/lyric?id=${id}`)
}

//搜索歌曲
export function searchMusic(keywords) {
  return axios.get(`http://music.cpengx.cn/cloudsearch?keywords=${keywords}`)
}

//手机登录
export function phoneLogin(phone, password) {
  return axios.get(`http://music.cpengx.cn/login/cellphone?phone=${phone}&password=${password}`)
}

//获取用户信息
export function userDetail(userid) {
  return axios.get(`http://music.cpengx.cn/user/detail?uid=${userid}`)
}

//退出登录
export function logout() {
  return axios.get(`http://music.cpengx.cn/logout`)
}

//最新专辑
export function getNewAlbum() {
  return axios.get(`http://music.cpengx.cn/album/newest`)
}

export default {
  getMusiclist,getPlaylistDetail,getLyric,searchMusic,phoneLogin,userDetail,logout,getNewAlbum