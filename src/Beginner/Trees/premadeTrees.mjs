export const bstRoot = {
    price: 100,
    left: {
      price: 50,
      left: { price: 25, left: null, right: null },
      right: { price: 75, left: null, right: null },
    },
    right: {
      price: 200,
      left: { price: 150, left: null, right: null },
      right: { price: 300, left: null, right: null },
    },
};

export const singleNodeTree = { price: 500, left: null, right: null };

export const duplicateTree = {
    price: 100,
    left: { price: 50, left: null, right: null },
    right: { price: 100, left: null, right: null },
};
