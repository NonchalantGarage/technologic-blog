async function createPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_content = document
    .querySelector('input[name="post-content"]')
    .value.trim();


  if (title && post_content) {
    const blogPost = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        post_content,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (blogPost.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".post-form")
  .addEventListener("submit", createPostHandler);
