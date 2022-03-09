## vuex

Components need to share state in many cases
Vuex provides a single source of truth for data/state
no need to pass events up and props down through multiple components

## vuex terms

State - App level state/data (todos,posts,token)
Getters - Get pieces of states or computed values from state
Actions - called from components to commit mutation
Mutations - Mutate the state (Update data)
Modules - Each module can have its own state, getters,actions and mutations (posts module, auth module)
