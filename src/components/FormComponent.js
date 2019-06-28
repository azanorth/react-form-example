import React from 'react';
import '../assets/styles/App.css';

export default function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
          onChange={props.handleChange}/>
        <br />

        <input
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
          onChange={props.handleChange}/>

        <br />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={props.age}
          onChange={props.handleChange}/>
        <br />

        <br />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}/> Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}/> Female
        </label>

        <br />
        <br />

        <label>You destination: </label>
        <br />
        <select
          value={props.destination}
          onChange={props.handleChange}
          name="destination">

          <option value="">None</option>
          <option value="Ukraine">Ukraine</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="Mars">Mars</option>
        </select>
        <br />
        <br />

        <p ><strong>Dietary restrictions:</strong></p>
        <label>
          <input
            type="checkbox"
            name="vegetarian"
            checked={props.vegetarian}
            onChange={props.handleChange}/> Vegetarian
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="kosher"
            checked={props.kosher}
            onChange={props.handleChange}/> Kosher
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="lactose_free"
            checked={props.lactose_free}
            onChange={props.handleChange}/> Lactose free
        </label>

        <br />
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Your name: {props.firstName} {props.lastName}</p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.destination}</p>
      <p>
        Your dietary restrictions:
        <br />
        {props.restrictions.map(value => `${value}, `)}
      </p>
    </main>
  )
}
