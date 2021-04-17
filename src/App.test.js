import { render, screen } from '@testing-library/react';
import React from "react";
import { shallow, mount } from "enzyme";
import AccountFetch from "./component/JestScripts/FetchAccount"
import App from "./App";
import toJson from "enzyme-to-json";
import AccountFetch from './component/JestScripts/FetchAccount';

it("renders without crashing", () => {
  shallow(<App/>)
})

it("renders Account Header", () => {
  const wrapper = shallow(<AccountFetch/>)
})