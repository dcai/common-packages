import React from "react";
import { shallow } from "enzyme";
import { Button } from "./index.js";

describe("<Button />", () => {
  it("renders <Button /> component", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find(".label").length).toBe(1);
  });
  //
  // it('renders an `.icon-star`', () => {
  // const wrapper = shallow(<MyComponent />);
  // expect(wrapper.find('.icon-star')).to.have.length(1);
  // });
  //
  // it('renders children when passed in', () => {
  // const wrapper = shallow((
  // <MyComponent>
  // <div className="unique" />
  // </MyComponent>
  // ));
  // expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });
  //
  // it('simulates click events', () => {
  // const onButtonClick = sinon.spy();
  // const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  // wrapper.find('button').simulate('click');
  // expect(onButtonClick).to.have.property('callCount', 1);
  // });
});
