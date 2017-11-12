// @flow

// Before
const MIN_CHARGE = 10;
const MAX_CHARGE = 50;
const MIN_CHARGE_PERCENT = 10;

interface Store {
  getAmount(amount: number): number;
}

class OnlineStore implements Store {
  getAmount(amount: number): number {
    return amount - this.getChargeRate(amount);  
  }

  getChargeRate(amount: number): number {
    let minChargeAmount = MIN_CHARGE_PERCENT * amount / 100;

    if (minChargeAmount < MIN_CHARGE) {
      minChargeAmount = MIN_CHARGE;
    } else if (minChargeAmount > MAX_CHARGE) {
      minChargeAmount = MAX_CHARGE;
    }

    return minChargeAmount;
  }
}

// After


// Can get from DB e.t.c
const Charge: {
  minCharge: number,
  maxCharge: number,
  minChargePercent: number,
} = {
  minCharge: 10,
  maxCharge: 50,
  minChargePercent: 10,
}

class OnlineStoreAfter implements Store {
  getAmount(amount: number): number {
    return amount - this.getChargeRate(amount);  
  }

  getChargeRate(amount: number): number {
    let minChargeAmount = Charge.minChargePercent * amount / 100;

    if (minChargeAmount < Charge.minCharge) {
      minChargeAmount = Charge.minCharge;
    } else if (minChargeAmount > Charge.maxCharge) {
      minChargeAmount = Charge.maxCharge;
    }

    return minChargeAmount;
  }
}