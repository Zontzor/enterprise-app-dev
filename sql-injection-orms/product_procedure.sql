CREATE OR REPLACE FUNCTION get_product(book_title VARCHAR(70))
RETURNS setof products AS $BODY$
BEGIN
  RETURN QUERY
  select * from products where title like book_title;
END;
$BODY$
LANGUAGE plpgsql;
