import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./App.css";

export class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      name: "",
      title: "",
      body: "",
      email: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { userId, name, title, body, email, date, gender, Password } =
      this.state;

    return (
      <>
        <form
          onSubmit={this.submitHandler}
          style={{
            border: "2px solid black",
            padding: "5%",
            width: "50%",
            backgroundColor: "aliceblue",
          }}
        >
          <h2>Validation: </h2>
          <div>
            <Grid
              container
              style={{
                padding: "1% 25px",
                border: "2px solid black",
                backgroundColor: "aliceblue",
              }}
            >
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <h3>User ID : </h3>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <input
                  type="number"
                  name="userId"
                  value={userId}
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <h3>Name : </h3>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <h3>Password : </h3>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <input
                  type="password"
                  name="password"
                  value={Password}
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <h3>Title : </h3>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <h3>Body : </h3>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <input
                  type="text"
                  name="body"
                  value={body}
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <h3>Email : </h3>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <h3>DOB : </h3>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <h3>Gender : </h3>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
                <input
                  type="radio"
                  name="radio"
                  value={gender}
                  onChange={this.changeHandler}
                />
                <label for="html">Male</label>
                <br></br>

                <input
                  type="radio"
                  name="radio"
                  value={gender}
                  onChange={this.changeHandler}
                />
                <label for="html">Female</label>
                <br></br>

                <input
                  type="radio"
                  name="radio"
                  value={gender}
                  onChange={this.changeHandler}
                />
                <label for="html">Other</label>
                <br></br>
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid style={{ display: "flex" }}>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                style={{ padding: "5%", textAlign: "center" }}
              >
                <button className="btn" type="reset">
                  Reset
                </button>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                style={{ padding: "5%", textAlign: "center" }}
              >
                <button className="btn" type="submit">
                  Submit
                </button>
              </Grid>
            </Grid>
          </div>
        </form>
      </>
    );
  }
}

export default Two;
