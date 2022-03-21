import React from "react";
import { configure, shallow } from "enzyme";
import Form from "./Form";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {render, fireEvent} from '@testing-library/react';

configure({ adapter: new Adapter() })

describe("Basic Testing Form component",()=>{

    it("Should have an input element",()=>{
        const formComp = shallow(<Form />);
        expect(formComp.find("input")).toBeDefined();
    });

    it("Should have an Add Button element",()=>{
        const formComp = shallow(<Form />);
        expect(formComp.find("addBtn")).toBeDefined();
    })
})

describe("Functionality Testing",()=>{

    it("Add button to be disabled", ()=>{
        const {getByTestId} =  render(<Form />);
        const addBtn = getByTestId("addBtn");
        expect(addBtn.disabled).toBe(true);
    });

    it("Add Button to be enabled", ()=>{
        const {getByTestId} =  render(<Form />);
        const input = getByTestId("input");
        const addBtn = getByTestId("addBtn");
        fireEvent.change(input, { target: { value: 'test' } })
        expect(addBtn.disabled).toBe(false);
    });

    it("Should submit the form when add button clicked",()=>{
            const addTodo = jest.fn();
            const wrapper = shallow(<Form addTodo={addTodo} />);
            wrapper.find("input").simulate("change", {
            target: { value: "Hi" },
            });
            wrapper.find("form").simulate("submit", {
            preventDefault: () => {},
            });
            expect(addTodo).toHaveBeenCalled();
    })

})