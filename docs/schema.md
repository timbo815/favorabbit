# Schema Information

## favors
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
date        | date      | not null
time        | datetime  | not null
location    | string    | not null
category_id | integer   | foreign key (references categories), indexed
doer_id     | integer   | foreign key (references users), indexed
asker_id    | integer   | not null, foreign key (references users), indexed
completed   | boolean   | default: false


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
location        | string    | not null
photo_url       | string    | not null
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_url   | string    | not null
description | text      | not null
title       | string   | not null
