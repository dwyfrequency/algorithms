# Write your MySQL query statement below
--  select class from courses group by class  having count(class) >= 5
select class from courses group by class having count(distinct student) >= 5;
