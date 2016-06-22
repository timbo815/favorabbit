json.id @request.id
json.title @request.title
json.description @request.description
json.date @request.date
json.time @request.time.strftime("%I:%M %p")
json.location @request.location
json.category @request.category
json.requester_id @request.requester_id
json.offers @request.offers
