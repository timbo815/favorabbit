json.array!(@offers) do |offer|
  json.id offer.id
  json.message offer.message
  json.request_id offer.request_id
  json.doer_id offer.doer_id
  json.accepted offer.accepted
end
