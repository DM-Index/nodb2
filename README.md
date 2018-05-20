#Made with Create-React-App
#Currently In Beta

The Hit list:

Index.js Ln 22: app.get("/data/weather/:search", getData);
^
//! ----^ CB function is not working, logging as an anon obj----

---Form.js---

ln 15: handleChange method is not firing. Console.logging reveals an empty object.
^
It is supposed to receive an event in the input box and and map onto results

ln 22: onClickHandler: Not a bug per-say but i'm not certain that it is firing.
^
It is supposed to change the result array to props.search

ln 37: <button> is currently giving me an error. This tends to be an on-off problem that i cant really fix. console.logs //! ^ TypeError: \_this2.props.getWeather is not a function
^
This button is intended to render the result of a long chain. The form component takes in text through a onChange method and an event sets the state of this.search to whatever was typed. The onSubmit method when pressed then takes whatever(is it json?) that is in the search array at the time of the click and

---Notes----
I have many objects and nothing returns in any of them.
