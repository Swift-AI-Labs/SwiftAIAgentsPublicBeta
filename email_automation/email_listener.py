import imaplib
import email

class EmailListener:
    def __init__(self, imap_server, username, password):
        self.imap_server = imap_server
        self.username = username
        self.password = password

    def check_email(self):
        with imaplib.IMAP4_SSL(self.imap_server) as mail:
            mail.login(self.username, self.password)
            mail.select('inbox')
            result, data = mail.search(None, 'ALL')
            email_ids = data[0].split()
            for e_id in email_ids[-5:]:  # Get the last 5 emails
                result, msg_data = mail.fetch(e_id, '(RFC822)')
                msg = email.message_from_bytes(msg_data[0][1])
                print(f"From: {msg['From']}, Subject: {msg['Subject']}")
                self.process_email(msg)

    def process_email(self, msg):
        # Add logic to process the email content
        print(f"Processing email from {msg['From']}: {msg.get_payload(decode=True)}")