import { useState, useEffect } from 'react';

export function useStudentData(studentID) {
    const [studentData, setStudentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`/students/${studentID}.json`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch student data for ID: ${studentID}`);
                }
                const data = await response.json();
                setStudentData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (studentID) {
            fetchStudentData();
        }
    }, [studentID]);

    return { studentData, loading, error };
}