// search 全局共享状态
import {
  create
} from 'zustand'
import {
  getSuggestList,
  getHotList
} from '@/api/search'

const useSearchStore = create((set, get) => {
  // get  读操作
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
  return {
    searchHistory,
    suggestList: [], // suggest 返回 list
    hotList: [], // hot 返回 list
    setSuggestList: async (keyword) => {
      const res = await getSuggestList(keyword)
      console.log(res);
      set({
        suggestList: res.data.data
      })
    },
    setHotList: async () => {
      try {
        console.log('Store: 开始请求热门列表');
        const res = await getHotList();
        console.log('Store: API 响应:', res);
        console.log('Store: 响应数据:', res.data);
        set({
          hotList: res.data.data
        })
      } catch (error) {
        console.error('Store: 获取热门列表失败:', error);
        set({
          hotList: []
        })
      }
    }
  }
})



export default useSearchStore