import unittest
from agents.agent_model import Agent

class TestAgent(unittest.TestCase):
    def test_perform_task(self):
        agent = Agent("TestAgent")
        agent.perform_task()  # Check console output

    def test_log_activity(self):
        agent = Agent("TestAgent")
        agent.log_activity("Test activity logged.")
        with open("agent_activity.log", "r") as log_file:
            logs = log_file.readlines()
            self.assertIn("TestAgent: Test activity logged.\n", logs)

if __name__ == '__main__':
    unittest.main()