import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOMClient from 'react-dom/client';
import DegreeInfo from '../Pages/DegreeInfo.js';
import { MemoryRouter } from 'react-router-dom';
import { useStudentData } from '../hooks/useStudentData';


jest.spyOn(console, 'warn').mockImplementation(() => {});

jest.mock('../hooks/useStudentData');


describe('DegreeInfo', () => {
  it('should call useStudentData hook correctly', () => {
    // Mocking the return value of the hook
    useStudentData.mockReturnValue({
      studentData: { groups: [{ label: 'Group 1', status: 'Completed', rqrmnt_group: 'group1' }] },
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/degree-information/1122334']}>
        <DegreeInfo />
      </MemoryRouter>
    );

    // Check if "Degree Information" appears on the screen
    expect(screen.getByText(/Degree Information/i)).toBeInTheDocument();

    // Check if useStudentData was called
    expect(useStudentData).toHaveBeenCalledTimes(1);  // Check it was called once
  });
});