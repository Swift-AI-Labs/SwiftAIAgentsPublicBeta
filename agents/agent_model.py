class Agent:
    def __init__(self, name):
        self.name = name

    def perform_task(self):
        print(f"{self.name} is performing a task...")
        # Complex logic for task performance
        result = self.complex_logic()
        print(f"Task result: {result}")

    def complex_logic(self):
        # Simulate complex decision-making
        return "Task completed successfully!"

    def log_activity(self, activity):
        with open("agent_activity.log", "a") as log_file:
            log_file.write(f"{self.name}: {activity}\n")