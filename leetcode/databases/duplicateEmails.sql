-- Write your MySQL query statement below
select a.Email from (select email as Email, count(email) as cnt from Person group by email) a
where a.cnt > 1
