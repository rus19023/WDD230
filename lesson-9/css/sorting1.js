const sortTowns = (a, b) => {
    const townSort = {
                     "Preston" : 0,
                     "Soda Springs" : 1,
                     "Fish Haven" : 2
                   }                 
  
     return townSort[a] - townSort[b]
  }
  ["Preston", "Fish Haven", "Soda Springs"].sort(sortTowns);