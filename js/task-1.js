function isEnoughCapacity(products, containerSize) {
    const totalQuantity = Object.values(products).reduce((acc, quantity) => acc + quantity, 0);
    
    return totalQuantity <= containerSize;
  }