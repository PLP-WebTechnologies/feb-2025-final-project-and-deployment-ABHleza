JavaScript
// Generate blog posts dynamically
const blogPosts = [
    { title: "Post 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Post 2", content: "Sed sit amet nulla auctor, vestibulum magna sed, convallis ex." },
    { title: "Post 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

const blogPostsSection = document.getElementById("blog-posts");

blogPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
    `;
    blogPostsSection.appendChild(postElement);
});

// Form validation
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name === "" || email === "") {
        e.preventDefault();
        alert("Please fill out all fields");
    }
});
