const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/activityRepository')

describe('ActivityRepository', () => {
  let activityRepository;
  let activityData = {

  }
  beforeEach(() => {
    activityRepository = new ActivityRepository(activityData);
  })


})
