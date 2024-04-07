--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Ubuntu 16.2-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: tcgenie; Type: DATABASE; Schema: -; Owner: tcgenie
--

CREATE DATABASE tcgenie WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE tcgenie OWNER TO tcgenie;

\connect tcgenie

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Student; Type: TABLE; Schema: public; Owner: tcgenie
--

CREATE TABLE public."Student" (
    id text NOT NULL,
    name text NOT NULL,
    admission_no text,
    phone_no text,
    caste text,
    religion text,
    date_of_birth timestamp(3) without time zone,
    date_of_admission timestamp(3) without time zone,
    class text,
    previous_instution text,
    tc_recieved_date timestamp(3) without time zone,
    tc_recieved_no text,
    date_of_leaving timestamp(3) without time zone,
    reason_for_leaving text,
    "otherFields" jsonb,
    tc_issued_date timestamp(3) without time zone,
    tc_issued_by text,
    tc_issued_no text,
    remarks text,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by text NOT NULL,
    deleted_at timestamp(3) without time zone,
    deleted_by text,
    deleted_reason text,
    deleted boolean DEFAULT false NOT NULL,
    class_at_time_of_leaving text,
    conduct text,
    parent_address text,
    parent_name text,
    shared_with text[],
    all_fees_paid boolean,
    applied_date timestamp(3) without time zone,
    attended_days text,
    has_fee_concession boolean,
    is_qualified_for_higher_class boolean,
    last_attendance_date timestamp(3) without time zone,
    roll_removed_date timestamp(3) without time zone,
    working_days text
);


ALTER TABLE public."Student" OWNER TO tcgenie;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: tcgenie
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO tcgenie;

--
-- Name: accounts; Type: TABLE; Schema: public; Owner: tcgenie
--

CREATE TABLE public.accounts (
    id text NOT NULL,
    "userId" text NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.accounts OWNER TO tcgenie;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: tcgenie
--

CREATE TABLE public.posts (
    id text NOT NULL,
    title text NOT NULL,
    content jsonb,
    published boolean DEFAULT false NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "authorId" text NOT NULL
);


ALTER TABLE public.posts OWNER TO tcgenie;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: tcgenie
--

CREATE TABLE public.sessions (
    id text NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.sessions OWNER TO tcgenie;

--
-- Name: status; Type: TABLE; Schema: public; Owner: tcgenie
--

CREATE TABLE public.status (
    user_id text NOT NULL,
    total_students integer DEFAULT 0 NOT NULL,
    new_students_this_month integer DEFAULT 0 NOT NULL,
    total_tc_issued integer DEFAULT 0 NOT NULL,
    total_tc_issued_this_month integer DEFAULT 0 NOT NULL,
    total_tc_issued_this_year integer DEFAULT 0 NOT NULL,
    last_login_at timestamp(3) without time zone,
    total_logins integer DEFAULT 0 NOT NULL,
    updated_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.status OWNER TO tcgenie;

--
-- Name: users; Type: TABLE; Schema: public; Owner: tcgenie
--

CREATE TABLE public.users (
    id text NOT NULL,
    name text,
    email text,
    "emailVerified" timestamp(3) without time zone,
    image text,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    password text,
    approved_at timestamp(3) without time zone,
    approved_by text,
    is_approved boolean DEFAULT false NOT NULL,
    roles text[] DEFAULT ARRAY['USER'::text],
    institution_id text
);


ALTER TABLE public.users OWNER TO tcgenie;

--
-- Name: verification_tokens; Type: TABLE; Schema: public; Owner: tcgenie
--

CREATE TABLE public.verification_tokens (
    identifier text NOT NULL,
    token text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.verification_tokens OWNER TO tcgenie;

--
-- Data for Name: Student; Type: TABLE DATA; Schema: public; Owner: tcgenie
--

INSERT INTO public."Student" (id, name, admission_no, phone_no, caste, religion, date_of_birth, date_of_admission, class, previous_instution, tc_recieved_date, tc_recieved_no, date_of_leaving, reason_for_leaving, "otherFields", tc_issued_date, tc_issued_by, tc_issued_no, remarks, created_at, updated_at, created_by, deleted_at, deleted_by, deleted_reason, deleted, class_at_time_of_leaving, conduct, parent_address, parent_name, shared_with, all_fees_paid, applied_date, attended_days, has_fee_concession, is_qualified_for_higher_class, last_attendance_date, roll_removed_date, working_days) VALUES ('cloldxri60003dbe0bg209tsp', 'Amjed Ali K', '12313', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-11-05 11:23:42.078', '2023-11-05 11:23:42.078', 'clol429260000db8822uw55cs', NULL, NULL, NULL, false, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public."Student" (id, name, admission_no, phone_no, caste, religion, date_of_birth, date_of_admission, class, previous_instution, tc_recieved_date, tc_recieved_no, date_of_leaving, reason_for_leaving, "otherFields", tc_issued_date, tc_issued_by, tc_issued_no, remarks, created_at, updated_at, created_by, deleted_at, deleted_by, deleted_reason, deleted, class_at_time_of_leaving, conduct, parent_address, parent_name, shared_with, all_fees_paid, applied_date, attended_days, has_fee_concession, is_qualified_for_higher_class, last_attendance_date, roll_removed_date, working_days) VALUES ('cloleiva90007dbe0jlxm15p3', 'Test Udddd', '1123', '2392398332', 'adskfjlj', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-11-05 11:40:06.754', '2023-11-05 11:40:06.754', 'clol429260000db8822uw55cs', NULL, NULL, NULL, false, NULL, NULL, 'saldkfjdsjflj', 'adsfjklafs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public."Student" (id, name, admission_no, phone_no, caste, religion, date_of_birth, date_of_admission, class, previous_instution, tc_recieved_date, tc_recieved_no, date_of_leaving, reason_for_leaving, "otherFields", tc_issued_date, tc_issued_by, tc_issued_no, remarks, created_at, updated_at, created_by, deleted_at, deleted_by, deleted_reason, deleted, class_at_time_of_leaving, conduct, parent_address, parent_name, shared_with, all_fees_paid, applied_date, attended_days, has_fee_concession, is_qualified_for_higher_class, last_attendance_date, roll_removed_date, working_days) VALUES ('clolejoo60009dbe0n7lgpcga', 'Test Udddda', '2332', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-11-05 11:40:44.838', '2023-11-05 11:40:44.838', 'clol429260000db8822uw55cs', NULL, NULL, NULL, false, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public."Student" (id, name, admission_no, phone_no, caste, religion, date_of_birth, date_of_admission, class, previous_instution, tc_recieved_date, tc_recieved_no, date_of_leaving, reason_for_leaving, "otherFields", tc_issued_date, tc_issued_by, tc_issued_no, remarks, created_at, updated_at, created_by, deleted_at, deleted_by, deleted_reason, deleted, class_at_time_of_leaving, conduct, parent_address, parent_name, shared_with, all_fees_paid, applied_date, attended_days, has_fee_concession, is_qualified_for_higher_class, last_attendance_date, roll_removed_date, working_days) VALUES ('clolenth7000hdbe0fpvpbfoa', 'Amjed', '23324', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-11-05 11:43:57.691', '2023-11-05 11:43:57.691', 'clol429260000db8822uw55cs', NULL, NULL, NULL, false, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public."Student" (id, name, admission_no, phone_no, caste, religion, date_of_birth, date_of_admission, class, previous_instution, tc_recieved_date, tc_recieved_no, date_of_leaving, reason_for_leaving, "otherFields", tc_issued_date, tc_issued_by, tc_issued_no, remarks, created_at, updated_at, created_by, deleted_at, deleted_by, deleted_reason, deleted, class_at_time_of_leaving, conduct, parent_address, parent_name, shared_with, all_fees_paid, applied_date, attended_days, has_fee_concession, is_qualified_for_higher_class, last_attendance_date, roll_removed_date, working_days) VALUES ('clolqr50i0001dbgo8opx2j81', 'Salim Ummer', '324223', '355353355355', 'Muslim', 'Islam', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-11-05 17:22:28.002', '2023-11-05 17:22:28.002', 'clol429260000db8822uw55cs', NULL, NULL, NULL, false, NULL, NULL, 'dsaffsdaafs', 'Name', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public."Student" (id, name, admission_no, phone_no, caste, religion, date_of_birth, date_of_admission, class, previous_instution, tc_recieved_date, tc_recieved_no, date_of_leaving, reason_for_leaving, "otherFields", tc_issued_date, tc_issued_by, tc_issued_no, remarks, created_at, updated_at, created_by, deleted_at, deleted_by, deleted_reason, deleted, class_at_time_of_leaving, conduct, parent_address, parent_name, shared_with, all_fees_paid, applied_date, attended_days, has_fee_concession, is_qualified_for_higher_class, last_attendance_date, roll_removed_date, working_days) VALUES ('cloqrdjsv00016nhsvzqpfnmo', 'Akhil E', '3222', '9745814924', 'Ezhava', 'Hindu', '1995-05-24 18:30:00', '2012-08-11 18:30:00', 'EL S4', 'VHMHSS Morayur', '2017-07-01 18:30:00', '252/545/2022', '2001-12-11 18:30:00', 'Personal', NULL, '2001-12-30 18:30:00', NULL, '332324', 'No remarks', '2023-11-09 05:38:44.479', '2023-11-09 05:38:44.479', 'clol429260000db8822uw55cs', NULL, NULL, NULL, false, 'ELS3', 'Good', 'ABCD ABCD ABCD', 'Parent', NULL, true, '2000-12-11 18:30:00', '21', true, true, '2012-12-11 18:30:00', '2014-07-12 18:30:00', '32');
INSERT INTO public."Student" (id, name, admission_no, phone_no, caste, religion, date_of_birth, date_of_admission, class, previous_instution, tc_recieved_date, tc_recieved_no, date_of_leaving, reason_for_leaving, "otherFields", tc_issued_date, tc_issued_by, tc_issued_no, remarks, created_at, updated_at, created_by, deleted_at, deleted_by, deleted_reason, deleted, class_at_time_of_leaving, conduct, parent_address, parent_name, shared_with, all_fees_paid, applied_date, attended_days, has_fee_concession, is_qualified_for_higher_class, last_attendance_date, roll_removed_date, working_days) VALUES ('clor0d06c0001l808ix82c4a9', 'shahul', '1234', '9946965393', 'islam', 'muslim', '1974-11-29 18:30:00', '2023-10-11 18:30:00', 'of ', 'poly mji', '0023-10-07 18:06:32', '1234', '2023-10-07 18:30:00', 'other', NULL, '2024-10-31 18:30:00', NULL, '123', 'sss', '2023-11-09 09:50:15.585', '2023-11-09 09:50:15.585', 'cloqzpgk40000l9086yo2rtn3', NULL, NULL, NULL, false, 'off', 'good', 'madasseri
tippusulthan road 
tuvvur', 'moideen', NULL, true, '0023-10-31 18:06:32', '185', true, false, '0023-11-09 18:06:32', '0023-10-31 18:06:32', '200');
INSERT INTO public."Student" (id, name, admission_no, phone_no, caste, religion, date_of_birth, date_of_admission, class, previous_instution, tc_recieved_date, tc_recieved_no, date_of_leaving, reason_for_leaving, "otherFields", tc_issued_date, tc_issued_by, tc_issued_no, remarks, created_at, updated_at, created_by, deleted_at, deleted_by, deleted_reason, deleted, class_at_time_of_leaving, conduct, parent_address, parent_name, shared_with, all_fees_paid, applied_date, attended_days, has_fee_concession, is_qualified_for_higher_class, last_attendance_date, roll_removed_date, working_days) VALUES ('cloldim6p0001dbe0390vmod3', 'Amjed Ali K', '12133', '9745814924', 'Muslim', 'Islam', '1995-07-11 18:30:00', '2001-12-11 18:30:00', 'ELS1', 'VHMHSS Morayur', '2011-01-29 18:30:00', '56648653', '2001-12-11 18:30:00', 'Personal', NULL, '2001-12-30 18:30:00', NULL, '332324', 'No remarks', '2023-11-05 11:11:55.345', '2023-11-05 11:11:55.345', 'clol429260000db8822uw55cs', NULL, NULL, NULL, false, 'ELS3', 'Good', 'Kodali Kozhiparambil H
Mongam PO
Malappuram dist', 'Ahammed K', NULL, true, '2003-01-14 18:30:00', '21', true, false, '2012-12-11 18:30:00', '2014-07-12 18:30:00', '32');
INSERT INTO public."Student" (id, name, admission_no, phone_no, caste, religion, date_of_birth, date_of_admission, class, previous_instution, tc_recieved_date, tc_recieved_no, date_of_leaving, reason_for_leaving, "otherFields", tc_issued_date, tc_issued_by, tc_issued_no, remarks, created_at, updated_at, created_by, deleted_at, deleted_by, deleted_reason, deleted, class_at_time_of_leaving, conduct, parent_address, parent_name, shared_with, all_fees_paid, applied_date, attended_days, has_fee_concession, is_qualified_for_higher_class, last_attendance_date, roll_removed_date, working_days) VALUES ('closyf2ib0001l308o9sb1h87', 'Salim Ummer', '232332', '9745842698', 'Muslim', 'Islam', '1999-01-30 18:30:00', '2019-04-29 18:30:00', 'EEE S1', 'Malappuram Boys HSS', '2020-04-20 18:30:00', '122321', '2022-04-29 18:30:00', 'Pass ount', NULL, '2023-01-30 18:30:00', NULL, '326/12/2022', 'Nil', '2023-11-10 18:31:25.041', '2023-11-10 18:31:25.041', 'clol429260000db8822uw55cs', NULL, NULL, NULL, false, 'EEE S6', 'Good', 'Makaraparamb
Kootilangadi
Malappuram', 'Ummer', NULL, true, '2023-01-30 18:30:00', '391', false, true, '2022-04-02 18:30:00', '2022-04-29 18:30:00', '485');


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: tcgenie
--

INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('7438586e-ca1a-46f6-a365-2d4ae99fcf6d', '9a2e17f98757f9b1f9e868fea2a4f69f0a87743dc760237ba3b9fd5482cb981e', '2023-11-04 20:41:49.924513+00', '20231104110104_init', NULL, NULL, '2023-11-04 20:41:48.900753+00', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('d804699d-85b8-485a-b89a-cf02e3064de9', '429b9d1cebd793934c39cde74546044ba6a485f87ae60aa4befb72088bba8893', '2023-11-04 20:41:51.153106+00', '20231104134424_up1', NULL, NULL, '2023-11-04 20:41:50.129516+00', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('7db7a799-ad2e-4493-ae74-b77b7909e58b', '2e372f50890873c279baf2bcba53f67ed252c9188a4ed6c4e831c8ad926bd48e', '2023-11-04 20:41:52.483832+00', '20231104185805_up1', NULL, NULL, '2023-11-04 20:41:51.562792+00', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('c15c45e8-00a5-4693-b500-5a651db81ab3', '6c37a3bfc35781bc97305fb018b12a3bf542d8a36d36264966fd2af6240f5536', '2023-11-05 11:07:00.616666+00', '20231105110659_up3', NULL, NULL, '2023-11-05 11:07:00.117073+00', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('c533eb6b-cf5c-43f4-9153-099f284bb485', 'f0c9e40d3599efa7ee6896f75d7c27160cbd388683904ffc0396fb956940e792', '2023-11-05 11:10:51.207072+00', '20231105111050_up5', NULL, NULL, '2023-11-05 11:10:50.687809+00', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('c84cccb6-024e-4c07-9aac-de649d3a62dc', '341a727019eef09674925033d18587f2413afaf864017167fdaf47e9ac196b09', '2023-11-05 15:07:52.6919+00', '20231105150752_up6', NULL, NULL, '2023-11-05 15:07:52.350964+00', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('7dc9caf6-95ef-4899-ae9d-82d0a278d41f', 'e014e3652c832535c9fee88ee34a966db7fb8cf34f076f58c2b64c7e0cd1946f', '2023-11-08 10:54:05.579216+00', '20231108105401_up7', NULL, NULL, '2023-11-08 10:54:03.970361+00', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('396731cb-9dce-487c-9ccd-ddfe5e28c4a8', '0a6d31e60b04f69c9aefa6e892f3e0ea39dc7830974a967148bd2a13840e4a9a', '2023-11-08 19:38:51.775226+00', '20231108193849_up10', NULL, NULL, '2023-11-08 19:38:50.723577+00', 1);


--
-- Data for Name: accounts; Type: TABLE DATA; Schema: public; Owner: tcgenie
--



--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: tcgenie
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: tcgenie
--



--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: tcgenie
--

INSERT INTO public.status (user_id, total_students, new_students_this_month, total_tc_issued, total_tc_issued_this_month, total_tc_issued_this_year, last_login_at, total_logins, updated_at) VALUES ('cloqzpgk40000l9086yo2rtn3', 3, 0, 3, 3, 2, NULL, 0, '2023-11-09 09:50:16.503');
INSERT INTO public.status (user_id, total_students, new_students_this_month, total_tc_issued, total_tc_issued_this_month, total_tc_issued_this_year, last_login_at, total_logins, updated_at) VALUES ('clol429260000db8822uw55cs', 14, 0, 11, 11, 11, NULL, 0, '2023-11-05 17:22:28.582');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tcgenie
--

INSERT INTO public.users (id, name, email, "emailVerified", image, created_at, updated_at, password, approved_at, approved_by, is_approved, roles, institution_id) VALUES ('clol429260000db8822uw55cs', 'Amjed Ali K', 'amjedmgm@gmail.com', NULL, NULL, '2023-11-05 06:47:15.295', '2023-11-05 06:47:15.295', '$2b$10$dXtDUZhGE/1tj3jE60vwW.7CaMraNWTfANF21LLozm8Nnil1SMpgi', '2023-11-05 06:47:15.292', NULL, true, '{USER}', NULL);
INSERT INTO public.users (id, name, email, "emailVerified", image, created_at, updated_at, password, approved_at, approved_by, is_approved, roles, institution_id) VALUES ('clomy23jk0000jk09p7rmtp1w', 'aflah', 'aflahsidhique@gmail.com', NULL, NULL, '2023-11-06 13:34:42.8', '2023-11-06 13:34:42.8', '$2b$10$Ewdxf7YgaX775I7DY237NOh5SgvsANIi5CiyWe0QR0d2KpWPspV.q', '2023-11-06 13:34:42.797', NULL, true, '{USER}', NULL);
INSERT INTO public.users (id, name, email, "emailVerified", image, created_at, updated_at, password, approved_at, approved_by, is_approved, roles, institution_id) VALUES ('cloqzpgk40000l9086yo2rtn3', 'Shahul Hameed M', 'shahulhameedtvr@gmail.com', NULL, NULL, '2023-11-09 09:31:57.066', '2023-11-09 09:31:57.066', '$2b$10$Nnnxe7tnqzo80GYbHDT2yuU9Yk20xyFLFNRqshKvCj78E2YPGL1CS', '2023-11-09 09:31:57.064', NULL, true, '{USER}', NULL);
INSERT INTO public.users (id, name, email, "emailVerified", image, created_at, updated_at, password, approved_at, approved_by, is_approved, roles, institution_id) VALUES ('clovbhffb0000js08rafngr0o', 'Test user', 'testuser@yopmail.com', NULL, NULL, '2023-11-12 10:12:42.455', '2023-11-12 10:12:42.455', '$2b$10$GXrZQa1/Gm7vZvefRCu/h.SSoaiDm5/SCW.zdGGXQiypW.d5fD6IK', '2023-11-12 10:12:42.442', NULL, true, '{USER}', NULL);
INSERT INTO public.users (id, name, email, "emailVerified", image, created_at, updated_at, password, approved_at, approved_by, is_approved, roles, institution_id) VALUES ('clu3no68m0000l708q6irjmxs', 'vik', 'realhacker2015@gmail.com', NULL, NULL, '2024-03-23 05:34:33.623', '2024-03-23 05:34:33.623', '$2b$10$0WdSvjxj08iWIxjui3xCT.vwJm440ZEMSsSEBmAavpeyFBtaqqX62', '2024-03-23 05:34:33.62', NULL, true, '{USER}', NULL);


--
-- Data for Name: verification_tokens; Type: TABLE DATA; Schema: public; Owner: tcgenie
--



--
-- Name: Student Student_pkey; Type: CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public."Student"
    ADD CONSTRAINT "Student_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: Student_admission_no_idx; Type: INDEX; Schema: public; Owner: tcgenie
--

CREATE INDEX "Student_admission_no_idx" ON public."Student" USING btree (admission_no);


--
-- Name: Student_created_by_idx; Type: INDEX; Schema: public; Owner: tcgenie
--

CREATE INDEX "Student_created_by_idx" ON public."Student" USING btree (created_by);


--
-- Name: Student_name_idx; Type: INDEX; Schema: public; Owner: tcgenie
--

CREATE INDEX "Student_name_idx" ON public."Student" USING btree (name);


--
-- Name: accounts_provider_providerAccountId_key; Type: INDEX; Schema: public; Owner: tcgenie
--

CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON public.accounts USING btree (provider, "providerAccountId");


--
-- Name: sessions_sessionToken_key; Type: INDEX; Schema: public; Owner: tcgenie
--

CREATE UNIQUE INDEX "sessions_sessionToken_key" ON public.sessions USING btree ("sessionToken");


--
-- Name: status_user_id_key; Type: INDEX; Schema: public; Owner: tcgenie
--

CREATE UNIQUE INDEX status_user_id_key ON public.status USING btree (user_id);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: tcgenie
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: verification_tokens_identifier_token_key; Type: INDEX; Schema: public; Owner: tcgenie
--

CREATE UNIQUE INDEX verification_tokens_identifier_token_key ON public.verification_tokens USING btree (identifier, token);


--
-- Name: verification_tokens_token_key; Type: INDEX; Schema: public; Owner: tcgenie
--

CREATE UNIQUE INDEX verification_tokens_token_key ON public.verification_tokens USING btree (token);


--
-- Name: Student Student_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public."Student"
    ADD CONSTRAINT "Student_created_by_fkey" FOREIGN KEY (created_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: accounts accounts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: posts posts_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: status status_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tcgenie
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

