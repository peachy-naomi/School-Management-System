import React from "react";
import { useState } from "react";

function School(){
    const[dashboard] = useState("instructor")
    return(
        <section className="school">
            {dashboard === "admin" && (
                <div className="admin">
                <div className="dashboard">
                <div className="sidebar">
                    <h2>Admin</h2>
                    <p>Users</p>
                    <p>Courses</p>
                    <p>Reports</p>
                </div>

                <div className="main">
                    <h1>Admin Dashboard</h1>
                    <div className="card">Total Students: 120</div>
                    <div className="card">Total Instructors: 15</div>
                </div>
            </div>
            </div>

            )}
            
            {dashboard === "student" && (
                <div className="student">
                <div className="dashboard">
                    <div className="sidebar">
                        <h2>Student</h2>
                        <p>My Courses</p>
                        <p>Assignments</p>
                        <p>Grades</p>
                    </div>

                    <div className="main">
                        <h1>Student Dashboard</h1>
                        <div className="card">Enrolled Courses: 5</div>
                        <div className="card">Pending Assignments: 2</div>
                </div>
            </div>

            </div>
            )}
            
            {dashboard === "instructor" && (
                <div className="instructor">
                <div className="dashboard">
                    <div className="sidebar">
                        <h2>Instructor</h2>
                        <p>My Classes</p>
                        <p>Students</p>
                        <p>Upload Material</p>
                    </div>

                    <div className="main">
                    <h1>Instructor Dashboard</h1>
                    <div className="card">Classes: 3</div>
                    <div className="card">Students: 80</div>
                </div>
            </div>

            </div>
            )}
            
        </section>
    )
}

export default School