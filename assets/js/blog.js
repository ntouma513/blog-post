document.addEventListener("DOMContentLoaded", function() {
    const blogList = document.getElementById("blog-list")
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    if(blogPosts.length ===0) {
        blogList.innerHTML = "<p>No blog posts available.</p>";
    } else {
        
            
        });
    }
})