CREATE OR REPLACE FUNCTION GetAllProducts()
RETURNS setof student AS
$BODY$
BEGIN
RETURN QUERY
select * from products;
END;
$BODY$
LANGUAGE plpgsql;
