export default {
  shopsArr(state){
    return state.shops.map(shop => {
      shop.image_path = shop.image_path.replace(/gif|jpeg|jpg|png/g,str => {
        return str+'.'+str;
      });
      return shop;
    });
  }
}
