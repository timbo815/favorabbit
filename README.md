
#FavoRabbit

[Heroku link][heroku]

[heroku]: http://www.favorabbit.herokuapp.com

FavoRabbit is a full-stack web application inspired by TaskRabbit. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

## Features & Implementation

### Single-Page App
  All the content for FavoRabbit is delivered on one static page.

### Requests
  User requests are stored in a table with columns for all the request information, including a reference to the
  users table through a 'requester_id.' On the front end the dashboard component listens to a request store and
  fetches all open requests on componentDidMount.

  Clicking on the 'do a favor' button will render a modal that displays an request index component comprised of
  request detail components.

  Users can submit requests and make offers for other user's requests.

### Offers
  Similar to requests, offers are stored in a table with columns for all offer information, but with a reference
  to the user table through a 'doer_id.' Upon mounting, the dashboard makes an api call to fetch all offers made for
  the current users open requests.

  Offers made for any of a current user's requests are displayed in the dashboard upon clicking the 'offers received' tab. Users can view as well as accept of deny these offers.

## Future Directions for the Project
  I plan to continue fine tuning this application. Below are some potential future improvements.

### Messaging  
  I would like to add the ability for users to append further messages to existing accepted offers. This make sense from a functional point of view as it would allow further discussion about the logistics of a favor. One way to implement this would be to create a messages table that would have a foreign key referencing the offer it is attached to. Then the offer detail component would display all messages associated with it.

###Signing in with Google, Facebook etc.
  I plan to make use of the OAuth gem in order to allow users to sign in with their credentials from other popular
  web apps.
<!-- #FavoRabbit

Heroku Link http://favorabbit.herokuapp.com
## Minimum Viable Product

FavoRabbit is a web application inspired by TaskRabbit that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [x] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an TaskRabbit-inspired site with a favor twist: posting favor requests, browsing favor requests, accepting favor requests, and reviewing favors done.
- [x] Hosting on Heroku
- [x] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README
- [ ] Create, read, edit, and delete favor requests
- [ ] Accept favor offers from other users
- [ ] View a dashboard with: bookings, pending favor requests, and pending favor offers



## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md


## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Favors Model, API, and basic APIUtil (1.5 days)

**Objective:** Favors can be created, read, edited and destroyed through
the API.

- [ ] create `Favor` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for favors (`FavorsController`)
- [ ] jBuilder views for favors
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Favors can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each favor component, building out the flux loop as needed.
  - [ ] `UserDashboard`
  - [ ] `FavorDetail`
  - [ ] `FavorForm`


### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Categories (1 day)

**Objective:** Favors belong to Categories, and categories can be viewed by clicking on
see all categories.

- [ ] create `Category` model
- build out API, Flux loop, and components for:
  - [ ] Category CRUD
- Use CSS to style new views


### Phase 6: Reviews (1.5 days)

**Objective:** Users can leave reviews for other users who have done them a favor.

- [ ] create `Review` model
- build out API, Flux loop, and components for:
  - [ ] fetching reviews for user
- [ ] Style new elements


### Phase 7: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes. -->
