import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { SearchAPI } from "../api/SearchAPI";

export default function Search() {
  const [UserId, setUserId] = useState("-");
  const [Id, setId] = useState("-");
  const [Title, setTitle] = useState("-");
  const [Body, setBody] = useState("-");

  const userId = "1";

  useEffect((res) => {
    SearchAPI(userId)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res;

          setUserId(data.userId);
          setId(data.id);
          setTitle(data.title);
          setBody(data.body);
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
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
            <h3>User ID</h3>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {UserId}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h3>Id</h3>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Id}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h3>Title</h3>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Title}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h3>Body</h3>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Body}</h4>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
