import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';
declare var M: any;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})

export class StudentComponent {
  
  constructor(public studentService: StudentService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshStudentList();

  }
  refreshStudentList() {
    this.studentService.getStudentList().subscribe((res) => {
      this.studentService.students = res as Student[];
    });
  }


  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.studentService.selectedStudent = {
      _id: "",
      name: "",
      cms: 0,
      email: "",
      phone: "",
      address: ""

    }
  }
  
  onSubmit(form: NgForm) {
    if (this.studentService.selectedStudent._id == "") {
      this.studentService.postStudent(form.value).subscribe((res) => {
        this.resetForm(form);;
        this.refreshStudentList();
        if(res==true){
        M.toast({ html: 'Saved successfully', classes: 'rounded'});
        }
        else{
          alert('CMS already exists');
        }
      });
     
  }
    else {
      this.studentService.putStudent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshStudentList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }


  }

 
  editStudent(stud: Student) {
    this.studentService.selectedStudent = stud;
  }
  deleteStudent(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.studentService.deleteStudent(_id).subscribe((res) => {
        this.refreshStudentList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
