// @flow

// Before
class Store {
  _amount = 0;

  getTotalAmount(): number {
    let totalAmount = 0;

    switch(this._amount) {
      case 20:
      totalAmount -= 5;
        break;
      case 50:
      totalAmount -= 10;
        break;
      case 100:
      totalAmount -= 15;
        break;
      default:
      totalAmount -= 1;
    }

    // more some magic ...

    return totalAmount;
  } 
}

// After 
class StoreAfter {
  _amount = 0;

  getTotalAmount(): number {
    let totalAmount = 0;

    totalAmount -= this.getDiscount(this._amount);

    // more some magic ...

    return totalAmount;
  }

  getDiscount(amount: number): number {
    let res: number = 0;
  
    switch(amount) {
      case 20:
        res = 5;
        break;
      case 50:
        res = 10;
        break;
      case 100:
        res = 15;
        break;
      default:
        res = 1;
    }
  
    return res;
  }
}
