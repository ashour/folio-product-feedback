GRANT USAGE ON SCHEMA public TO rls_user;

GRANT USAGE,
SELECT
  ON ALL SEQUENCES IN SCHEMA public TO rls_user;

GRANT ALL ON ALL TABLES IN SCHEMA public TO rls_user;

ALTER TABLE "public"."feedbacks" enable ROW level security;

ALTER TABLE "public"."user_profiles" enable ROW level security;

ALTER TABLE "public"."_prisma_migrations" enable ROW level security;

CREATE POLICY "feedbacks SELECT to rls_user authenticated" ON "public"."feedbacks" TO rls_user USING (
  (
    (auth.jwt () ->> 'role'::text) = 'authenticated'::text
  )
);

CREATE POLICY "feedbacks SELECT to any authenticated" ON "public"."feedbacks" TO authenticated USING (TRUE);

CREATE POLICY "feedbacks INSERT to rls_user authenticated" ON "public"."feedbacks" TO rls_user
WITH
  CHECK (
    (
      (auth.jwt () ->> 'role'::text) = 'authenticated'::text
    )
  );

CREATE POLICY "feedbacks UPDATE to owner" ON "public"."feedbacks" TO rls_user USING (
  (
    (
      SELECT
        (auth.uid ())::text AS uid
    ) = "authorId"
  )
)
WITH
  CHECK (
    (
      (
        SELECT
          (auth.uid ())::text AS uid
      ) = "authorId"
    )
  );

CREATE POLICY "Users can delete their own feedback" ON "public"."feedbacks" TO rls_user USING (
  (
    (
      SELECT
        (auth.uid ())::text AS uid
    ) = "authorId"
  )
);
