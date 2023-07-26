import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import { limitThree, xiaomeByeBye } from './features/middlewares/limitThree';
import modalReducer from './features/modal/modalSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(xiaomeByeBye, limitThree),
});

export default store;
