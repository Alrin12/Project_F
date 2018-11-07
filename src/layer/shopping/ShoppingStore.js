const brandList = [
  {id: 1, brand: 'Nike', brand_kr: '나이키', image: require('Project_F/src/static/temp/nike_logo.png')},
  {id: 2, brand: 'Jordan', brand_kr: '조던', image: require('Project_F/src/static/temp/jordan_logo.png')},
  {id: 3, brand: 'New Balance', brand_kr: '뉴 발란스', image: require('Project_F/src/static/temp/new_balance_logo.jpg')},
  {id: 4, brand: 'Addidas', brand_kr: '아디다스', image: require('Project_F/src/static/temp/addidas_logo.jpg')},
  {id: 5, brand: 'Puma', brand_kr: '퓨마', image: require('Project_F/src/static/temp/puma_logo.png')},
]

class ShoppingStore {

  getBrandLIst() {
    return brandList
  }
}

export const shoppingStore = new ShoppingStore()