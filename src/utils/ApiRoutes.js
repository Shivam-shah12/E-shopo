export const HOST=process.env.BACKEND_URL

const USER_ROUTES=`${HOST}/api/user`;
const SELLER_ROUTES=`${HOST}/api/seller`
// {email,password}
export const LOGIN_USER_ROUTE=`${USER_ROUTES}/login`
// {name,email,password,profileImage}
export const SIGNUP_USER_ROUTE=`${USER_ROUTES}/signup`
// { email, oldPassword, newPassword, confirmNewPassword }
export const CHANGE_PASSWORD_USER_ROUTE=`${USER_ROUTES}/changePassword`
export const LOGOUT_USER_ROUTE=`${USER_ROUTES}/logout`
// {productName,productPrice,productQuantity,productDescription,sellerId,userId}
export const BUY_PRODUCT_ROUTE=`${USER_ROUTES}/buyedProduct`
// { productId,userId }
export const ADD_TO_CART_ROUTE=`${USER_ROUTES}/addToCart`
// { productId,userId } 
export const REMOVE_TO_CART_ROUTE=`${USER_ROUTES}/removeToCart`
// { productId,userId }
export const ADD_LIKED_ROUTE=`${USER_ROUTES}/likedProduct`
// { productId,userId }
export const REMOVE_LIKED_ROUTE=`${USER_ROUTES}/removeLike`
// {userId,addresses}
export const SAVE_ADDRESS=`${USER_ROUTES}/saveAddress`
// {userId, token}
export const GET_LIKED_DETAILS=`${USER_ROUTES}/getLikedDetails`;
// {userId,token}
export const GET_CART_DETAILS=`${USER_ROUTES}/getCartDetails`;

export const GET_BUYED_DETAILS=`${USER_ROUTES}/getUserBuyDetail`

// **************************************************
// ****************  Seller *************************
// **************************************************
export const LOGIN_SELLER_ROUTE=`${SELLER_ROUTES}/login`
export const SIGNUP_SELLER_ROUTE=`${SELLER_ROUTES}/signup`
export const CHANGE_PASSWORD_SELLER_ROUTE=`${SELLER_ROUTES}/changePassword`
export const LOGOUT_SELLER_ROUTE=`${SELLER_ROUTES}/logout`
// { productName, productPrice, productDescription, productImage, sellerId, category }
export const CREATE_PRODUCT_SELLER=`${SELLER_ROUTES}/createProduct`
// sellerId 
export const GET_SELL_DETAIL=`${SELLER_ROUTES}/getSellDetail`
// {sellerId}
export const GET_MY_PRODUCT=`${SELLER_ROUTES}/getMyProduct`
// { productId, sellerId }
export const DELETE_PRODUCT=`${SELLER_ROUTES}/deleteProduct`
export const GET_WEBSITE_PRODUCT=`${HOST}/`
export const GET_SINGLE_PRODUCT=`${HOST}/get_single_product`