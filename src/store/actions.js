import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodList,
  reqShopList
} from '../api'

export default {
  //获取地址
  async reqAddress({commit,state}){
    const {
      latitude,
      longitude
    } = state;
    const result = await reqAddress(latitude + ',' + longitude);
    if(result.code == 0){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{ address });
    }
  },
  //获取商品列表
  async reqFoodList({commit}){
    const result = await reqFoodList();
    if(result.code == 0){
      const { categorys } = result.data;
      commit(RECEIVE_CATEGORYS,{ categorys });
    }
  },
  //获取商家列表
  async reqShopList({commit,state}){
    const {
      latitude,
      longitude
    } = state;
    const result = await reqShopList(latitude + ',' + longitude);
    if(result.code == 0){
      const { shops } = result.data;
      commit(RECEIVE_SHOPS,{ shops });
    }
  }
}
