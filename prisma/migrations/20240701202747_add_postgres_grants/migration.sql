GRANT usage ON schema public TO postgres,
anon,
authenticated,
service_role;

GRANT ALL privileges ON ALL tables IN schema public TO postgres,
anon,
authenticated,
service_role;

GRANT ALL privileges ON ALL functions IN schema public TO postgres,
anon,
authenticated,
service_role;

GRANT ALL privileges ON ALL sequences IN schema public TO postgres,
anon,
authenticated,
service_role;

ALTER DEFAULT PRIVILEGES IN schema public
GRANT ALL ON tables TO postgres,
anon,
authenticated,
service_role;

ALTER DEFAULT PRIVILEGES IN schema public
GRANT ALL ON functions TO postgres,
anon,
authenticated,
service_role;

ALTER DEFAULT PRIVILEGES IN schema public
GRANT ALL ON sequences TO postgres,
anon,
authenticated,
service_role;
