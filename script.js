let x=prompt("Enter an adjective")

let y=prompt("Enter a noun")

let z=prompt("Enter a proper noun") 

adj_list=["interesting", "lazy", "round", x]

noun_list=["hamburger", "giraffes", "computer", y]

proper_noun_list=["WalMart", "Jeff from the Wiggles", "Steve Urkel", z]

let madlibs= "The " + noun_list[Math.floor(Math.random()*noun_list.length)]+ " Not Taken by " 
  +proper_noun_list[Math.floor(Math.random()*proper_noun_list.length)]+ ": Two " 
  +noun_list[Math.floor(Math.random()*noun_list.length)] + " diverged in a " 
  +adj_list[Math.floor(Math.random()*adj_list.length)] + " " + noun_list[Math.floor(Math.random()*noun_list.length)] + 
  " , and " + proper_noun_list[Math.floor(Math.random()*proper_noun_list.length)] + " - " 
  + proper_noun_list[Math.floor(Math.random()*proper_noun_list.length)] 
  + " took the one less traveled by, and that has made all the difference."

madlibs.fontsize(5)

document.write(madlibs)
