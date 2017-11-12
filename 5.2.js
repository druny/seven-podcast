// @flow


// Before
interface Card {
  getSubscriptionInfo(): string;
}


class GymCard implements Card {
  _training:number = 0;
  _rockClimbing:number = 0;

  getSubscriptionInfo(): string {
    const trainingString = `Training hall: ${this._training} days left.`;
    const climbingString =  `Rock climbing hall: ${this._rockClimbing} days left.`;

    return `${trainingString} / ${climbingString}`;
  }
}

// After
class GymCardAfter implements Card {
  _training:number = 0;
  
  getSubscriptionInfo(): string {
    return `Training hall: ${this._training} days left.`;
  }
}

class ClimbingCard implements Card {
  _rockClimbing:number = 0;

  getSubscriptionInfo(): string {
    return `Rock climbing hall: ${this._rockClimbing} days left.`;
  }
}