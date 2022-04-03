import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { UserDetailsAPI } from "../api/UserDetailsAPI";

export default function UserDetails() {
  const [UserName, setUserName] = useState("-");
  const [Id, setId] = useState("-");
  const [Name, setName] = useState("-");
  const [Email, setEmail] = useState("-");
  const [Phone, setPhone] = useState("-");
  const [Website, setWebsite] = useState("-");

  const [Street, setStreet] = useState("-");
  const [Suite, setSuite] = useState("-");
  const [City, setCity] = useState("-");
  const [ZipCode, setZipcode] = useState("-");

  const [Lat, setLat] = useState("-");
  const [Lng, setLng] = useState("-");

  const [ComName, setComName] = useState("-");
  const [CatchPhrase, setCatchPhrase] = useState("-");
  const [Bs, setBs] = useState("-");

  const userIdDetails = "1";

  useEffect((res) => {
    UserDetailsAPI(userIdDetails)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res;

          setUserName(data.username);
          setId(data.id);
          setName(data.name);
          setEmail(data.email);
          setPhone(data.phone);
          setWebsite(data.website);

          setStreet(data.address.street);
          setSuite(data.address.suite);
          setCity(data.address.city);
          setZipcode(data.address.zipcode);

          setLat(data.address.geo.lat);
          setLng(data.address.geo.Lng);

          setComName(data.company.name);
          setCatchPhrase(data.company.catchPhrase);
          setBs(data.company.bs);
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h3>UserDetails : </h3>

      <div>
        <Grid
          container
          style={{
            padding: "1% 25px",
            border: "2px solid black",
            backgroundColor: "aliceblue",
          }}
        >
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>User ID</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Id}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Name</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Name}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>User Name</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {UserName}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Email</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Email}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Phone</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Phone}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Website</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Website}</h4>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: "1%" }}>
            <h3>Address Details: </h3>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Street</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Street}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Suite</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Suite}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>City</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {City}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Zipcode</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {ZipCode}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Latitude</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Lat}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Longtitude</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Lng}</h4>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: "1%" }}>
            <h3>Company Details: </h3>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Company Name</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {ComName}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>Catch Phrase</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {CatchPhrase}</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4>BS</h4>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} style={{ padding: "1%" }}>
            <h4 className="customer-title">: {Bs}</h4>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
