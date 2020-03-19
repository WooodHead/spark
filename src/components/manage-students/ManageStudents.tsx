import React from "react";
import './ManageStudents.scss';

interface ManageStudentsProps {
  courses: ManageStudentsCourse[];
  onManageUser: (id: string) => void;
  onViewUser: (id: string) => void;
  onDeleteUser: (id: string) => void;
}

interface ManageStudentsCourse {
  id: string;
  code: string;
  name: string;
  students: ManageStudentUser[];
}

interface ManageStudentUser {
  id: string;
  imageUri: string;
  name: string;
  email: string;
  status: string;
}


const ManageStudents: React.FC<ManageStudentsProps> = (props) => {
  const [activeCourse, setActiveCourse] = React.useState<ManageStudentsCourse>(props.courses[0]);
  const [selectedStudents, setSelectedStudents] = React.useState<Set<string>>(new Set());


  // setting toggle all checkbox to indeterminate if at least one row item is selected
  React.useEffect(() => {
    const checkbox = document.querySelector("#selectAllCheckbox") as HTMLInputElement;
    if (selectedStudents.size > 0) {
      checkbox.indeterminate = true;
    } else {
      checkbox.indeterminate = false;
    }
  }, [selectedStudents]);

  const toggleAllSelected = () => {
    if (selectedStudents.size > 0) {
      selectedStudents.clear();
      setSelectedStudents(new Set(selectedStudents));
    } else {
      // populate selectedStudents Set with all students
      activeCourse.students.forEach((student) => {
        selectedStudents.add(student.id);
      });

      setSelectedStudents(new Set(selectedStudents));
    }
  };

  const toggleCurrentSelected = (studentId: string) => {
    if (selectedStudents.has(studentId)) {
      selectedStudents.delete(studentId);
      setSelectedStudents(new Set(selectedStudents));
    } else {
      selectedStudents.add(studentId);
      setSelectedStudents(new Set(selectedStudents));
    }
  };

  const courseTabs: JSX.Element[] = props.courses.map((course) => {
    const isActiveCourse = course.id === activeCourse.id;
    return (
      <li
        key={course.id}
        className={isActiveCourse ? "uk-active" : ""}
        onClick={() => {
          setActiveCourse(course);
        }}
      >
        <a>{course.code}</a>
      </li>
    );
  });

  const studentRows: JSX.Element[] = activeCourse.students.map((student) => {
    return (
      <tr key={student.id}>
        <td>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={selectedStudents.has(student.id)}
            onChange={() => toggleCurrentSelected(student.id)}
          />
        </td>
        <td>
          <div className="student-photo">
            <img
              src={student.imageUri}
              alt="User Image"
              data-uk-img/>
          </div>
        </td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.status}</td>
        <td>Manage | View | Delete</td>
      </tr>
    );
  });

  return (
    <div className="manage-students">
      <div className="uk-card uk-card-default uk-card-body">
        <ul className="uk-tab">
          {courseTabs}
        </ul>
        <ul className="uk-breadcrumb">
          <li>Students</li>
          <li>{activeCourse.name}</li>
        </ul>
        <button className="uk-button uk-margin-medium" disabled={false}>Delete</button>


        <div className="uk-overflow-auto">
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th className="uk-table-shrink">
                  <input
                    id="selectAllCheckbox"
                    className="uk-checkbox"
                    type="checkbox"
                    checked={selectedStudents.size === activeCourse.students.length}
                    onChange={() => toggleAllSelected()}
                  />
                </th>
                <th className="uk-table-shrink">IMAGE</th>
                <th className="uk-table-expand">NAME</th>
                <th className="uk-table-expand">EMAIL</th>
                <th className="uk-table-expand">STATUS</th>
                <th className="uk-table-expand">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {studentRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
