const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/activityRepository')

describe('ActivityRepository', () => {
  let activityRepository;
  const activityData = [{
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 6377,
    "minutesActive": 240,
    "flightsOfStairs": 6
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 14264,
    "minutesActive": 29,
    "flightsOfStairs": 26
  },
  {
    "userID": 3,
    "date": "2019/06/25",
    "numSteps": 10002,
    "minutesActive": 88,
    "flightsOfStairs": 18
  }];

  beforeEach(() => {
    activityRepository = new ActivityRepository(activityData);
  })

  it('should be a function', () => {

    expect(ActivityRepository).to.be.a('function');
  })

  it('should instantiate a new activityRepository', () => {

    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  })

  it('should take in activityData as an argument', () => {

    expect(activityRepository.userData).to.deep.equal(activityData);
  })

  it('should return the average number of flights of stairs climbed for a date for all users', () => {

    expect(activityRepository.findAverageProperty("2019/06/15", "flightsOfStairs")).to.equal(16)
  })

  it('should return the average number of steps taken for a date by all users', () => {

    expect(activityRepository.findAverageProperty("2019/06/15", "numSteps")).to.equal(10321);
  })
})
