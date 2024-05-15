import React from "react";
import ReactGA from "react-ga";

const useGATracker = (category="tindelTestCategory") => {
  const eventTracker = (action = "tindelTestAction", label = "tindelTestLabel") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useGATracker;
