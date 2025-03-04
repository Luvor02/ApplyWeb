from dotenv import load_dotenv
import os
from supabase import create_client, Client

# Lade Umgebungsvariablen aus .env
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Erstelle den Supabase-Client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
