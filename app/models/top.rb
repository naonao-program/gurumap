class Top < ApplicationRecord
  enum range:{
    "---":0,
    "300m":1,
    "500m":2,
    "1000m":3,
    "2000m":4,
    "3000m":5
  }
end