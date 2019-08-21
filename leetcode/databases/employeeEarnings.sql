# Write your MySQL query statement below
select e1.name as "Employee" from Employee e1 inner join Employee e2
-- join employeeCopyTable id with the Employee original manager id
-- e2 gives us the managers and e1 gives us the employees then we just compar salaries
on e2.id = e1.ManagerId and e2.salary < e1.salary
