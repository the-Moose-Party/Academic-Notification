import React from "react";
import { render, screen } from '@testing-library/react';
import DegreeInfo from "../Pages/DegreeInfo";
import { BrowserRouter as Router } from "react-router-dom";

describe('component', () => {
    test('Degree Progress Page Renders', () => {
        render(<Router> <DegreeInfo /> </Router>);
    
    
    });
})