const form = document.getElementById("loginForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    message.textContent = "Нэвтэрч байна...";

    try {
        const { data, error } = await supabaseClient.functions.invoke(
            "admin-login",
            {
                body: { username, password }
            }
        );

        if (error || !data?.access_token || !data?.refresh_token) {
            message.textContent =
                data?.error || "Username эсвэл password буруу байна.";
            return;
        }

        const { error: sessionError } =
            await supabaseClient.auth.setSession({
                access_token: data.access_token,
                refresh_token: data.refresh_token
            });

        if (sessionError) {
            message.textContent = "Нэвтрэхэд алдаа гарлаа.";
            return;
        }

        message.textContent = "Амжилттай нэвтэрлээ!";
        window.location.href = "index.html";

    } catch (err) {
        message.textContent = "Сервертэй холбогдоход алдаа гарлаа.";
        console.error(err);
    }
});