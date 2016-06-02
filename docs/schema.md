# Schema Information

## requests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
date        | date      | not null
time        | datetime  | not null
location    | string    | not null
category_id | integer   | foreign key (references categories), indexed
asker_id    | integer   | not null, foreign key (references users), indexed

## offers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
message     | text      | not null
request_id  | integer   | foreign key (references favor_requests), indexed
doer_id     | integer   | foreign key (references users), indexed
accepted    | boolean   | default: false

## bookings

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
request_id  | string    | not null
offer_id    | text      | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
photo_url       | string    |
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_url   | string    | not null
description | text      | not null
title       | string    | not null
