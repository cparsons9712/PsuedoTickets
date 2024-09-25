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

export const folderStructure = {
    name: "Root",
    left: {
      name: "Folder1",
      left: {
        name: "Folder3",
        left: {
          name: "Folder6",
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        name: "Folder4",
        left: null,
        right: null,
      },
    },
    right: {
      name: "Folder2",
      left: null,
      right: {
        name: "Folder5",
        left: null,
        right: null,
      },
    },
};

export const singleFolder = { name: "Root", left: null, right: null };

export const imbalancedTree = {
    name: "Root",
    left: {
      name: "Folder1",
      left: {
        name: "Folder2",
        left: {
          name: "Folder3",
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    },
    right: null,
}

/*
isSymmetric trees
*/

export const symTrees = {
  1: {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 2, left: { value: 4 }, right: { value: 3 } }
  },
  2: {
      value: 1,
      left: { value: 2, right: { value: 3 } },
      right: { value: 2, right: { value: 3 } }
  },
  3: {
      value: 1,
      left: { value: 2, left: { value: 3 } },
      right: { value: 2, right: { value: 3 } }
  },
  4: {
      value: 1,
      left: { value: 2, right: { value: 4 } },
      right: { value: 2, left: { value: 4 } }
  },
  5: {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 2, left: { value: 4 }, right: { value: 3 } }
    }
}
