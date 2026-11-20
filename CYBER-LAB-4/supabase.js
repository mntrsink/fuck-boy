const SUPABASE_URL = "https://supabase.com/dashboard/project/zlngypvrizbfbztqpvbw/settings/api-keys";
const SUPABASE_KEY = "sb_publishable_LW_VJi32plEvokdnkH_rZw_X6feTIr0";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);