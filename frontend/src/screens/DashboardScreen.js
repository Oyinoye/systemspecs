import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function DashboardScreen() {
  // }, [dispatch]);

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  if (!userInfo) { return <Redirect to="/" /> }

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  return (
    <div>
    <div className="row">
      <h1>Dashboard</h1>
    </div>
      <>
        <ul className="row summary">
          <li>
            <div className="summary-title color1">
              <span>
                <i className="fa fa-users" /> User
              </span>
            </div>
            <div className="summary-body">
              <h2>Name: {userInfo["user"].fullName}</h2>
              <h2>Address: {userInfo["user"].address}</h2>
              <h2>Email: {userInfo["user"].user["email"]}</h2>
              <h2>Phone number: {userInfo["user"].phoneNumber}</h2>
            </div>
          </li>
          <li>
            <div className="summary-title color2">
              <span>
                <i className="fa fa-shopping-cart" /> Image
              </span>
            </div>
            <div className="summary-body">
            </div>
          </li>
          <li>
            <div className="summary-title color3">
              <span>
                <i className="fa fa-money" /> Wallet
              </span>
            </div>
            <div className="summary-body">
            </div>
          </li>
        </ul>
        <div>
          <div>
            <h2>Google Maps</h2>
            {/* Replace API key */}
            <LoadScript googleMapsApiKey='REACT_GOOGLE_MAPS_API_KEY'>
              <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
            </LoadScript>
          </div>
        </div>
        <div>
          <h2>Proximity</h2>
          
        </div>
      </>
    
  </div>
  );
}
