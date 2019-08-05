/*
root = {
  val,
  left: {
    val,
    left,
    right
  }
  right: {
    val,
    left,
    right
  }
}
we iterate through using bfs, and mutate the obj adding an ancestor prop
then once we hit the search val, we build a return array of our ancestors
*/
