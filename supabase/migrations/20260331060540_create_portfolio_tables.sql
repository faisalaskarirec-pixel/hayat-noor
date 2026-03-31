/*
  # Create Portfolio Tables for Hayat Noor

  1. New Tables
    - `credits`: Production credits with project details
      - `id` (uuid, primary key)
      - `project_title` (text, unique)
      - `role` (text: Script Supervisor, Producer, Screenwriter)
      - `format` (text: Feature, Series, Short, Development)
      - `status` (text: Completed, In Development, Pre-Production)
      - `order` (integer for sorting)
      - `created_at` (timestamp)

    - `testimonials`: Industry testimonials and feedback
      - `id` (uuid, primary key)
      - `quote` (text)
      - `author_name` (text)
      - `author_role` (text)
      - `author_company` (text)
      - `order` (integer for sorting)
      - `created_at` (timestamp)

    - `contact_inquiries`: Production inquiry submissions
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `project_type` (text)
      - `production_stage` (text)
      - `timeline` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for credits and testimonials
    - Public write access for contact_inquiries (anyone can submit)
*/

-- Create credits table
CREATE TABLE IF NOT EXISTS credits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_title text UNIQUE NOT NULL,
  role text NOT NULL,
  format text NOT NULL,
  status text NOT NULL,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote text NOT NULL,
  author_name text NOT NULL,
  author_role text NOT NULL,
  author_company text,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  production_stage text NOT NULL,
  timeline text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Public read access for credits
CREATE POLICY "Credits are publicly readable"
  ON credits
  FOR SELECT
  TO public
  USING (true);

-- Public read access for testimonials
CREATE POLICY "Testimonials are publicly readable"
  ON testimonials
  FOR SELECT
  TO public
  USING (true);

-- Public write access for contact inquiries
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Public read access for contact inquiries (for admin viewing)
CREATE POLICY "Contact inquiries are readable by authenticated users"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);
