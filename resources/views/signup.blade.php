<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>

    
</head>
<body>
    <div id="Signup">

<h2>Sign Up</h2>

<form action="{{ route('signup.store') }}" method="POST">
    @csrf
    <input type="text" name="username" placeholder="username" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="number" name="phone" placeholder="phone" required>
    <input type="password" name="password" placeholder="Password" required>
    <input type="password" name="password_confirmation" placeholder="Confirm Password" required>

    <button type="submit">Sign Up</button>
</form>

</body>
</html>