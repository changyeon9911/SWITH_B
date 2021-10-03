# SWTH BACKEND

TODO LIST(Authority)

Admin
0-CreateAdmin
0-DeleteAdmin(Admin)
0-LoginAdmin
0-EditAdmin(Admin)
0-ViewAdmin(Admin)
0-ListAdmin(Admin)

Stdnt(Student)
0-CreateStdnt
0-DeleteStdnt(Stdnt + Admin)
0-LoginStdnt
0-ViewStdnt
0-ListStdnt
0-EditStdnt(Stdnt + Admin)
0-AddCPStdnt(Stdnt)
0-EditCPStdnt(Stdnt + Admin)

Tutor
0-CreateTutor
0-DeleteTutor(Tutor + Admin)
0-LoginTutor
0-ViewTutor
0-ListTutor
0-EditTutor(Tutor + Admin)

Class
0-CreateClass(Tutor + Admin)
0-DeleteClass(Tutor + Admin)
0-RegisterClass(Stdnt)
0-ViewClass(Participants + Admin)
0-ListClass(Participants + Admin) : Array

CPCode(code, num, used)
0-CreateCPCode(Admin)
0-DeleteCPCode(Admin)
0-ViewCPCode(Admin)
0-ListCPCode(Admin)

FdBack(FeedBack)
0-CreateFdBack(Tutor + Admin)
0-DeleteFdBack(Tutor + Admin)
0-EditFdBack(Tutor + Admin)
0-ViewFdBack(Participants + Admin) => ViewClass wrapped
0-ListFdBack(Participants + Admin) => ListClass wrapped

TBook(TextBook)
0-CreateTbook(Admin)
0-DeleteTook(Admin)
0-EditTbook(Admin)
0-ViewTbook
0-ListTbook

SiteMap
