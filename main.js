<html lang="en">
<head>
    <style>
    </style>
</head>
<body>
    <header>
    </header>
    <div class="container">
        <h2>Welcome to Our School</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec ex tempus mattis.</p>

        <!-- Event Calendar -->
        <div id="event-calendar">
            <h3>Upcoming Events</h3>
            <ul>
                <li><a href="#">Event 1 - Date: MM/DD/YYYY</a></li>
                <li><a href="#">Event 2 - Date: MM/DD/YYYY</a></li>
                <li><a href="#">Event 3 - Date: MM/DD/YYYY</a></li>
            </ul>
        </div>
        <h2>Contact Us</h2>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" required></textarea><br>

            <input type="submit" value="Submit">
        </form>
    </div>
   
    <script>
        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get form input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // You can perform further processing here, such as sending the data to a server

            // Reset the form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            alert("Message sent successfully!"); // You can customize this message
        });
    </script>
</body>
</html>