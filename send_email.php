<?php
require_once __DIR__ . '/vendor/autoload.php';

// Set up the Google Client
$client = new Google_Client();
$client->setAuthConfig('client_secret.json'); // Path to your Client Secret file
$client->setAccessType('offline');

// Exchange authorization code for access token
if (isset($_GET['code'])) {
    $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $accessToken = $client->getAccessToken();
    // Save access token to a file or database
}

// Load previously authorized credentials from a file or database
if (file_exists('path/to/credentials.json')) {
    $accessToken = json_decode(file_get_contents('path/to/credentials.json'), true);
    $client->setAccessToken($accessToken);
}

// Create Gmail service
$service = new Google_Service_Gmail($client);

// Compose the email message
$email = new Google_Service_Gmail_Message();
$email->setRaw(base64_encode("From: Noureldin.ab98@gmail.com\r\nTo: nourking3773@gmail.com\r\nSubject: Test email\r\n\r\nThis is a test email."));

// Send the email
$message = $service->users_messages->send('nourking3773@gmail.com', $email);

echo 'Email sent successfully!';
?>
