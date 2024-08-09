// Mock data for demonstration purposes
export default function handler(req, res) {
  const data = {
    inbox: [
      { email: "Beata@gmail.com", status: "Interested" },
      { email: "Sanya@gmail.com", status: "Closed" },
      { email: "william@gmail.com", status: "Interested" },
      { email: "johnson@gmail.com", status: "Meeting Booked" },
      { email: "orlando@gmail.com", status: "Meeting Completed" },
    ],
    emailContent: {
      subject: "New Product Launch",
      body: "Hi {FIRST_NAME}, I would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products."
    },
    leadDetails: {
      name: "Orlando",
      contactNo: "+54-9062827869",
      email: "orlando@gmail.com",
      linkedIn: "linkedin.com/in/timvadde/",
      companyName: "Reachinbox"
    }
  };

  res.status(200).json(data);
}
