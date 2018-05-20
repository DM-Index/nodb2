#Made with Create-React-App
#Currently In Beta

The Hit list:

Index.js Ln 22: app.get("/data/weather/:search", getData);
^
//! ----^ CB function is not working, logging as an anon obj----

---Form.js---

ln 37: <button> is currently giving me an error. This tends to be an on-off problem that i cant really fix. console.logs //! ^ TypeError: \_this2.props.getWeather is not a function
^
This button is intended to render the result of a long chain. The form component takes in text through a onChange method and an event sets the state of this.search to whatever was typed. The onSubmit method when pressed then takes whatever(is it json?) that is in the search array at the time of the click and

<form onClick="processForm()">
	<input type="text" name="first_name"/>
	<input type="text" name="last_name"/>
	<input type="submit" value="Submit"/>
</form>
function processform() {
	axios.get('/testing').then(resposne => console.log(response));
}
app.get('/testing', function(req,res) {
	res.send("Hello, World");
});
\
The form is used to send data to the server. The rendering with the req.body will be done on the server side
So let's start from the top:
Once the form is submitted, the processForm function is called, using axios to make a GET request to /testing. When /testing is accessed it responds with "Hello, World".
In the .then callback, the "Hello World" will be in the response variable that is being passed through.
So your client is making a request and waiting for a response to be passed through to the .then callback method
