import unittest
from email_automation.email_sender import EmailSender

class TestEmailSender(unittest.TestCase):
    def test_send_email(self):
        sender = EmailSender("smtp.example.com", 587, "user@example.com", "password")
        sender.send_email("recipient@example.com", "Test Subject", "Test Body")  # Check console output

    def test_send_bulk_emails(self):
        sender = EmailSender("smtp.example.com", 587, "user@example.com", "password")
        sender.send_bulk_emails(["recipient1@example.com", "recipient2@example.com"], "Bulk Subject", "Bulk Body")  # Check console output

if __name__ == '__main__':
    unittest.main()