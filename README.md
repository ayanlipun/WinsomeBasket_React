# Namsate React by Ayan 🍲

# Extension to use as a react developer

- ESLint
- Better comments
- Prettier - Code formatter
- Bracket Pair Colorization Toggler

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement (Immidiate effect in browser while change in html file. )
- File Watching Algorithm - Written in C++
- Caching - Faster builds (put in .parcle-cache folder)
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Spliting
- Differential Bundling - support older browsers
- Dignostic
- Error Handling
- Https
- Tree Shaking - remove unused code
- Different build for dev and prod bundles

## Note - Read from documentaion pf Parcel - https://parceljs.org/

# Babel

- https://babeljs.io/

# React Food Ordering Project Layout

# ==================================

- Header
  - Logo
  - New Items
- Body
  - Search
  - ResaurantContainer
    - RestaurantCard
- Footer
  - copyrights
  - links
  - address
  - contact

# Two types of Export/Import

- Default Export/Import

  - export default Component; import Component from "path";

- Named Export/Import
  - export const Component; import {Component} from "path";

# React Hooks - (Normal JS utility functions)

    - useState() - Superpowerful State Variables in react
    - useEffect()


# React Fiber Architecture (Must Study)

    https://github.com/acdlite/react-fiber-architecture










# Error , Exceptions and their solution.

- (1) Error --> error: Expected content key ccf8fe793c3f9503 to exist
- solution :  
   - You have to first stops the execution of program by ctrl + c. - then you have to delete the .parcel-cache from the project. - then build the project. npx parcel index.html
