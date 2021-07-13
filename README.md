# RestaurantDateApp

This web app is meant to help the indecisive couples.

03/03/20
- Able to add items without having doubles. I figured I could do this by implementing a hash table, but in the moment it did not make much sense. 

In the future it might be nice for optimization because the search for duplicates is "linear" (not really since it is in a while loop, if I understand correctly that would be quadratic which is O(n^2)).

Hope to add next:
 - updated css
 - ability to pick the location at which the user is searching for 
 - maybe a "loading options" prompt


07/012/21
- Made many changes since last push. These include:
  * Use of google places and maps API to populate a JSON object of local restaurants
  * Slider.js for some fancy UI experience

Issues: 
  * CORs issue, need to figure out how to run on server side proficiently
  * JSON parsing error recently appeared that needs to be addressed

