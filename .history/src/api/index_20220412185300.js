import axios from 'axios'

const basicURL = 'http://localhost:4000'

//获取推荐歌单
export function getMusiclist(limit) {
  return axios.get(`${basicURL}/personalized?limit=${limit}`)
}

//获取歌单详情
export function getPlaylistDetail(id) {
  return axios.get(`${basicURL}/playlist/detail?id=${id}`)
}

//获取歌词
export function getLyric(id) {
  return axios.get(`${basicURL}/lyric?id=${id}`)
}

//搜索歌曲
export function searchMusic(keywords) {
  return axios.get(`${basicURL}/cloudsearch?keywords=${keywords}`)
}

//手机登录
export function phoneLogin(phone, password) {
  return axios.get(`${basicURL}/login/cellphone?phone=${phone}&password=${password}`)
}

//获取用户信息
export function userDetail(userid) {
  return axios.get(`${basicURL}/user/detail?uid=${userid}`)
}

//退出登录
export function logout() {
  return axios.get(`${basicURL}/logout`)
}

//最新专辑
export function getNewAlbum() {
  return axios.get(`${basicURL}/album/newest`)
}

//获取热搜列表
export function getHotSearch() {
  return axios.get(`${basicURL}/search/hot`)
}

//获取热门歌单
export function getHotPlaylist() {
  return axios.get(`${basicURL}/playlist/hot`)
}
//热门话题
export function getHotTopic() {
  return axios.get(`${basicURL}/hot/topic?limit=2&offset=2`)
}

export default {
  getMusiclist, getPlaylistDetail, getLyric, searchMusic,
  phoneLogin, userDetail, logout, getNewAlbum,
  getHotSearch, getHotPlaylist, getHotTopic
}