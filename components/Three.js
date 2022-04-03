// import React from 'react'
import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { SearchAPI } from "../api/SearchAPI";

export default function Three() {
  const [UserId, setUserId] = useState("-");
  const [Id, setId] = useState("-");
  const [Title, setTitle] = useState("-");
  const [Body, setBody] = useState("-");

  // Loading hooks
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const userId = "1";

  useEffect((res) => {
    SearchAPI(userId)
      .then((res) => {
        if (res.status !== 200) {
          throw Error("Could not fetch the data for that resource");
        }
        if (res.status === 200) {
          const { data } = res;

          setUserId(data.userId);
          setId(data.id);
          setTitle(data.title);
          setBody(data.body);
          setIsPending(false);
          setError(null);
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
        setIsPending(false);
        setError(error.message);
      });
  });

  return (
    <>
      {/* <div>Three</div> */}
      {error && <div>{error}</div>}

      <div>
        <Grid
          container
          style={{
            padding: "1% 25px",
            border: "2px solid black",
            backgroundColor: "aliceblue",
            width: "60%",
          }}
        >
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h3>User ID</h3>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h4 className="customer-title">
              : {UserId} {isPending && <div>Loading....</div>}
            </h4>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h3>Id</h3>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h4 className="customer-title">
              : {Id} {isPending && <div>Loading....</div>}
            </h4>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h3>Title</h3>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h4 className="customer-title">
              : {Title} {isPending && <div>Loading....</div>}
            </h4>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h3>Body</h3>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: "1%" }}>
            <h4 className="customer-title">
              : {Body} {isPending && <div>Loading....</div>}
            </h4>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
