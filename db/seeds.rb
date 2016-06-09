# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#
# requests = Request.create!({category: "Transportation", location: "Brooklyn", time:DateTime.new(14:00),
#   date: Date.new(09-30-2016), title: "Need a ride", description: "Hi! I'm a college student who needs a ride back to
#    school in Baltimore. If anyone is driving that way I would appreciate a ride! Thanks!", requester_id: 1})
#
# users = User.create([{username: "guest", password: "guestguest", id:1}])


users = User.create([{username: "guest", password: "guestguest", id: 1},
        {username: "Tim", password: "timtim", id: 2}, {username: "Sennacy",
        password: "sennacy", id: 3}])

request = Request.create([{category: "Pet Care", title: "Need cat food", description: "Make sure you bring lots of cat food", date: Date.new, time: DateTime.new,
          location: "New York", requester_id: 3}])
