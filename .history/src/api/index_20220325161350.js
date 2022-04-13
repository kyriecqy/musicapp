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

export default {
  getMusiclist,getPlaylistDetail,getLyric
}