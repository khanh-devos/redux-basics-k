export const xiaomeByeBye = () => (next) => (action) => {
  if (action.type.includes('getCartItems')) {
    const medium = { ...action.payload };
    const payload = Object.values(medium).filter((item) => !item.title?.includes('Xiaomi'));

    //   console.log(new_payload);
    next({
      ...action,
      payload,
    });
  } else {
    next(action);
  }
};

export const limitThree = (store) => (next) => (action) => {
  if (action.type.includes('increase')) {
    const { cartItems } = store.getState().cart;
    const item = cartItems.find((item) => item.id === action.payload.id);
    if (item.amount + 1 > 3) {
      next({
        ...action,
        payload: { id: null }, // hide id
      });
    } else {
      next(action);
    }
  } else {
    next(action);
  }
};
