import React from "react";
import {shallow, configure} from "enzyme";
import Todo from "./Todo";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { render, fireEvent } from '@testing-library/react';
import App from "../App";


configure({ adapter: new Adapter() });


describe("Basic rendering test for Todo component", ()=>{
    it("Should have a task name", ()=>{
        const text = "Hello";
        const todoObj = {
            id: 1,
            completed: true,
        }
        const todo = shallow(<Todo todo={todoObj} text={text} />);
        expect(todo.find("task").length).toBeDefined();
    });

    it("Should have a complete button", ()=>{
        const todoObj = {
            id: 2,
            completed: false,
        }
        const {getByTestId} = render(<Todo todo={todoObj}/>);
        expect(getByTestId("complete-btn")).toBeDefined();
    });

    it("Should have a delete button", ()=>{
        const todoObj = {
            id: 2,
            completed: false,
        }
        const {getByTestId} = render(<Todo todo={todoObj}/>);
        expect(getByTestId("delete-btn")).toBeDefined();
    });
})
