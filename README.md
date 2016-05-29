#FavoRabbit

## Minimum Viable Product

FavoRabbit is a web application inspired by TaskRabbit that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an TaskRabbit-inspired site with a favor twist: posting favor requests, browsing favor requests, accepting favor requests, and reviewing favors done.
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

## Product Goals and Priorities

FavoRabbit will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete favor requests (MVP)
- [ ] View a dashboard with: upcoming favors(to be done for me), upcoming favors to be done(for others), favors done(for me), and favors done(by me)  (MVP)
- [ ] leave reviews of other users (expected feature, but not MVP)


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
- [ ] Add modals, transitions, and other styling flourishes.
